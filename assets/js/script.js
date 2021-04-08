const questions = [
  {
    question: "Commonly used datatypes DO NOT include:",
    answers: [
      {text:"alerts", correct: true},
      {text: "boolean", correct: false},
      {text: "numbers", correct: false},
      {text: "strings", correct: false},
    ]
  }
]
var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");
var startHeader = document.getElementById('start-h');
var startParagraph = document.getElementById('start-p');
var questionSpace = document.getElementById('question-space');
var questionElement = document.getElementById('question');
var answerOptions = document.getElementById('answer-options')

var shuffledQuestion, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
   currentQuestionIndex++
   nextQuestion();
});

function startGame(){
  startButton.classList.add("hide");
  startHeader.classList.add("hide");
  startParagraph.classList.add("hide");
  questionSpace.classList.remove("hide");
  shuffledQuestion = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  nextQuestion();
}

function nextQuestion(){
  resetState()
  showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function resetState(){
  nextButton.classList.add("hide");
  while (answerOptions.firstChild){
    answerOptions.removeChild(answerOptions.firstChild )
  }
  
}
function showQuestion(question){
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text;
    button.classList.add("button")
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click",selectAnswer);
    answerOptions.appendChild(button); 
  })
}

function selectAnswer(e){
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  
  if(correct){
    var answerCorrect;
    var showAnswer = document.createElement(answerCorrect);
    showAnswer.textContent = "Correct Answer"
    questionSpace.appendChild(showAnswer);
  }else{
    var answerWrong;
    var showAnswer = document.createElement(answerWrong);
    showAnswer.textContent = "Wrong Answer"
    questionSpace.appendChild(showAnswer);
  }
  
  if (shuffledQuestion.length > currentQuestionIndex + 1){
    nextButton.classList.remove("hide");
  }else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");

  }

}