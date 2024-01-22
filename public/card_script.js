const questionsAndAnswers = [
  { question: "What is your favorite color?", answer: "My favorite color is blue." },
  { question: "What is the capital of France?", answer: "The capital of France is Paris." },
  { question: "Define cybersecurity.", answer: "Cybersecurity involves protecting computer systems, networks, and data from theft, damage, or unauthorized access." },
  { question: "What is a firewall?", answer: "A firewall is a security barrier that monitors and controls incoming and outgoing network traffic." },
  { question: "Explain the concept of phishing.", answer: "Phishing is a cyber attack where attackers trick individuals into divulging sensitive information by posing as trustworthy entities." },
  { question: "Define VPN.", answer: "VPN stands for Virtual Private Network, providing a secure connection over the internet." },
  { question: "What is the purpose of two-factor authentication (2FA)?", answer: "2FA adds an extra layer of security by requiring users to provide two different authentication factors." },
  { question: "Why are strong passwords important?", answer: "Strong passwords help prevent unauthorized access and enhance overall account security." },
  { question: "What is malware?", answer: "Malware is malicious software designed to harm or exploit computers and users." },
  { question: "Explain the role of software updates in cybersecurity.", answer: "Software updates patch known vulnerabilities, enhancing system security." },
  { question: "Differentiate between symmetric and asymmetric encryption.", answer: "Symmetric encryption uses one key for both encryption and decryption, while asymmetric encryption uses a pair of public and private keys." },
  { question: "Define DDoS attack.", answer: "A DDoS attack overwhelms a system by flooding it with traffic from multiple sources, making it unavailable to users." },
  { question: "Why is regular data backup important?", answer: "Regular backups ensure data can be recovered in case of loss or cyber attacks." },
  { question: "What is a vulnerability assessment?", answer: "A vulnerability assessment identifies weaknesses in a system that could be exploited by attackers." },
  { question: "Define encryption.", answer: "Encryption is the process of converting information into a code to prevent unauthorized access." },
  { question: "What is the principle of least privilege?", answer: "The principle of least privilege restricts user access rights to the minimum necessary for their job functions." },
  { question: "Explain the concept of social engineering.", answer: "Social engineering involves manipulating individuals into divulging confidential information through psychological tactics." },
  { question: "What is a honeypot in cybersecurity?", answer: "A honeypot is a decoy system designed to attract and detect hackers or malware." },
  { question: "Define biometric authentication.", answer: "Biometric authentication uses physical or behavioral characteristics, like fingerprints or facial recognition, for user identification." },
  { question: "What is the dark web?", answer: "The dark web is a part of the internet accessible only with specific software, often associated with illegal activities." },
  { question: "What does the term 'pharming' refer to?", answer: "Pharming is a cyber attack that redirects website traffic to a fraudulent site without the user's knowledge." },
  { question: "Explain the importance of a cybersecurity policy.", answer: "A cybersecurity policy provides guidelines and procedures to protect an organization's information assets." },
  { question: "Define penetration testing.", answer: "Penetration testing involves simulating cyber attacks to evaluate the security of a system or network." },
  { question: "What is ransomware?", answer: "Ransomware is malicious software that encrypts a user's files and demands payment for their release." },
  { question: "Define endpoint security.", answer: "Endpoint security focuses on protecting devices like computers and mobile devices from cyber threats." },
  { question: "What is a SQL injection attack?", answer: "A SQL injection attack exploits vulnerabilities in a website's code to manipulate its database." },
  { question: "Explain the concept of a security token.", answer: "A security token is a physical device or software application used for user authentication." },
  { question: "What is a man-in-the-middle attack?", answer: "A man-in-the-middle attack intercepts and possibly alters communication between two parties without their knowledge." },
  { question: "Define zero-day vulnerability.", answer: "A zero-day vulnerability is a software flaw unknown to the vendor, making it exploitable by attackers." },
  { question: "What is the role of a security incident response plan?", answer: "A security incident response plan outlines steps to take in the event of a cyber security incident." },
  { question: "Define encryption key.", answer: "An encryption key is a code or password used to encrypt and decrypt data." },
  { question: "What is a security patch?", answer: "A security patch is a software update designed to fix specific vulnerabilities and improve system security." },
  { question: "Explain the concept of a brute-force attack.", answer: "A brute-force attack involves attempting all possible combinations of passwords until the correct one is found." },
  { question: "What is a botnet?", answer: "A botnet is a network of compromised computers controlled by a single entity for malicious purposes." },
  { question: "Define multi-factor authentication (MFA).", answer: "MFA requires users to provide two or more authentication factors for enhanced security." },
  { question: "What is a digital certificate?", answer: "A digital certificate is an electronic document verifying the authenticity of a website or user." },
  { question: "Explain the concept of cybersecurity awareness training.", answer: "Cybersecurity awareness training educates users on recognizing and preventing cyber threats." },
  { question: "Define network segmentation.", answer: "Network segmentation involves dividing a network into smaller, isolated segments to enhance security." },
  { question: "What is a security audit?", answer: "A security audit is an assessment of an organization's security policies, controls, and procedures." },
  { question: "Explain the role of a security information and event management (SIEM) system.", answer: "A SIEM system collects and analyzes log data to detect and respond to security incidents." },
  { question: "What is a honey token?", answer: "A honey token is bait information placed to detect and alert on unauthorized access or activity." },
  { question: "Define the term 'social media engineering'.", answer: "Social media engineering involves manipulating individuals through social media platforms to gain sensitive information." },
  { question: "What is a vulnerability patch?", answer: "A vulnerability patch is a software update specifically released to fix known security vulnerabilities." },
  { question: "Explain the concept of a security perimeter.", answer: "A security perimeter is the boundary that separates an organization's internal network from external networks." },
  { question: "Define the term 'malvertising'.", answer: "Malvertising involves using online advertising to spread malware or exploit vulnerabilities." },
  { question: "What is a security token?", answer: "A security token is a physical or virtual device used to generate one-time passwords for authentication." },
  { question: "Explain the concept of a cybersecurity risk assessment.", answer: "A cybersecurity risk assessment evaluates potential threats and vulnerabilities to determine the level of risk an organization faces." },
  { question: "Define the term 'sandboxing' in cybersecurity.", answer: "Sandboxing involves isolating and running untrusted programs in a restricted environment to prevent harm to the system." },
  { question: "What is a password manager?", answer: "A password manager is a tool that securely stores and manages passwords for various online accounts." },
  { question: "Explain the concept of 'security through obscurity'.", answer: "Security through obscurity relies on keeping system details secret as a primary means of protection, which is generally considered inadequate." },
  { question: "What is a keylogger?", answer: "A keylogger is a type of malware that records keystrokes, often used to capture sensitive information like passwords." },
  { question: "Define the term 'security posture'.", answer: "Security posture refers to an organization's overall cybersecurity strength and readiness to defend against threats." },
  // Add more questions and answers as needed
];

let currentQuestionIndex = 0;
let isFlipped = false;
let shuffledQuestions = [];

function shuffleQuestions() {
  shuffledQuestions = [...questionsAndAnswers];
  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
  }
}

function showNextQuestion() {
  shuffleQuestions();
  const questionCard = document.getElementById("flipCard");
  const questionText = document.getElementById("question");
  const answerText = document.getElementById("answer");

  // Check if all questions have been shown
  if (currentQuestionIndex >= shuffledQuestions.length) {
    // Display popup for reaching the end of the quiz
    alert("You have reached the end of the quiz. Start again.");
    // Optionally, you can reset the quiz here
    shuffleQuestions();
    
  } else {
    // Display the next question
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answerText.textContent = currentQuestion.answer;

    // If flipped, reset the card rotation immediately
    if (isFlipped) {
      questionCard.style.transform = "rotateY(0deg)";
      isFlipped = false;
    }

    currentQuestionIndex++;
  }
}


function startAgain() {
  shuffleQuestions();
  currentQuestionIndex = 0;
  showNextQuestion();
}

// Toggle flip on card click
document.getElementById("flipCard").addEventListener("click", function() {
  const questionCard = document.getElementById("flipCard");

  if (!isFlipped) {
    questionCard.style.transform = "rotateY(180deg)";
    isFlipped = true;
  }
});
