const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017');

const questionSchema = new mongoose.Schema({
  question: String,
  correct_answer: String,
  incorrect_answers: [String],
});

const Question = mongoose.model('Question', questionSchema);

app.use(bodyParser.json());

app.post('/api/questions', async (req, res) => {
  try {
    const questions = req.body.results;

    await Question.insertMany(questions);

    res.json({ success: true, message: 'Questions saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
