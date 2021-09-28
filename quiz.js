const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = [
  "yes",
  "no",
  "yes",
  "yes",
  "yes",
  "isosceles triangle",
  90,
  "both",
  6,
  "right angle triangle",
];
function calculateScore() {
  let index = 0;
  let score = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value == correctAnswers[index]) {
      score = score + 1;
    }

    index = index + 1;
  }

  outputEl.textContent = "Your score is " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);
