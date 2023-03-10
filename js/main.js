const date = new Date();

setInterval(() => {
    const data = new Date();
    demo.innerHTML =
      String(data.getHours()).padStart(2, "0") +
      ":" +
      String(data.getMinutes()).padStart(2, "0") +
      ":" +
      String(data.getSeconds()).padStart(2, "0");
}, 1000);
//************************************************ */

const avttestsMap = avttests.map((avttest) => {
  return{
      questionImg: avttest.symbol_img,
      questionTitle: avttest.symbol_title
  }
});
// ////////////////////////////////////////////////////////////////////////

const questionImg = document.querySelector(".js-avt-img");
const choices = document.querySelector(".choice-text");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];
const CORRECT_BONUS = 5;
const MAX_QUESTION = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestion = [...avttestsMap];
  // console.log(availableQuestion);
  getNewQuestion();
}

getNewQuestion = () => {

  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestion.length);

  currentQuestion = availableQuestion[questionIndex];
  questionImg.src = currentQuestion.questionImg;
  choices.textContent = currentQuestion.questionTitle;

  availableQuestion.splice(questionIndex, 1);
  acceptingAnswers = true;
}

startGame();
// *****************************************************************
const elQuestionText = document.querySelector(".question-text");
const elQuestionDone = document.querySelector(".done-question");

let i = 0;
choices.addEventListener('click', (e) => {
  if (!acceptingAnswers) return;

  acceptingAnswers = false;
  const selectedChoice = e.target;
  const selectedAnswer = selectedChoice.dataset['number'];

  const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

  setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
  }, 500);

  i++;
  if(i == 10){
    
  }
  elQuestionText.textContent = "Question: "+i;
  elQuestionDone.textContent = "Completed questions: "+ i + "/10";

});

