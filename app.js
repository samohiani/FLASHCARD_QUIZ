const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/quizdb', { useNewUrlParser: true, useUnifiedTopology: true });

const Question = mongoose.model('Question', {
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: [String],
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/quiz', async (req, res) => {
  try {
    const questions = await Question.find().limit(10);
    const data = {
      questions: questions,
    };

    res.render('quiz', data);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/get-questions', async (req, res) => {
  try {
    const selectedCategory = req.query.category || '';
    const selectedNumQuestions = req.query.amount || 10;
    const questions = await Question.aggregate([
      { $match: { category: selectedCategory } },
      { $sample: { size: parseInt(selectedNumQuestions) } }
    ]);

    res.json({ success: true, questions });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.json({ success: false, message: 'Error fetching questions' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/landingpage.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
