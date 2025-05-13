const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: "Paris",
  },
  {
    question: "Which language is used to style web pages?",
    answers: ["HTML", "CSS", "JavaScript", "Python"],
    correct: "CSS",
  },
  {
    question: "Which year did JavaScript first appear?",
    answers: ["1995", "2000", "1990", "1985"],
    correct: "1995",
  },
  {
    question: "Which one is popular java frontend framework?",
    answers: ["React", "Node", "Spring", "Mongodb"],
    correct: "React",
  },
  {
    question: "Which of the following is not a semantic HTML5 tag?",
    answers: ["article", "section", "div", "aside"],
    correct: "div",
  },
  {
    question:
      "Which javascript method is commonly used to add element at the end of an array?",
    answers: ["push", "append", "addToEnd", "concat"],
    correct: "push",
  },
  {
    question:
      "Which HTTP method is typically used to retrieve data from a server?",
    answers: ["POST", "PUT", "DELETE", "GET"],
    correct: "GET",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtonsElement.innerHTML = "";
}

function selectAnswer(answer) {
  const correctAnswer = questions[currentQuestionIndex].correct;
  if (answer === correctAnswer) {
    score++;
  }
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionElement.textContent = "Quiz Completed!";
    answerButtonsElement.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.textContent = `Your score: ${score}/${questions.length}`;
  }
});

startQuiz();
