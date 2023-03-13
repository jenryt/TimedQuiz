const container = document.querySelector(".container");
const startScreen = document.querySelector(".startScreen");
const startBtn = document.querySelector("#start");
const timerEl = document.querySelector(".timer");

const qScreen = document.querySelector(".qScreen");
const qTitle = document.querySelector(".qTitle");
const choice1 = document.querySelector(".one");
const choice2 = document.querySelector(".two");
const choice3 = document.querySelector(".three");
const choice4 = document.querySelector(".four");
const answerMsg = document.querySelector(".answerMsg");

const endScreen = document.querySelector(".endScreen");
const showScore = document.querySelector('.showScore');
const userInitial = document.querySelector('#userInitial');

const retryBtn = document.querySelector('#tryAgain');

let qIndex = 0;
let correctAns = 0;
let quizTime = 100;
let timeInt;

qScreen.style.display = 'none';
endScreen.style.display = 'none';
// When the start button is clicked
startBtn.addEventListener('click', beginQuiz)

function beginQuiz() {
  startScreen.style.display = "none";
  qScreen.style.display = 'block';
  myTimer();
  navQuiz();
}

// Navigate between questions
function navQuiz() {
  console.log("nav quiz", qIndex);
  if (qIndex == 0 || qIndex < questions.length){
    qTitle.textContent = questions[qIndex].question;
    choice1.textContent = questions[qIndex].options[0];
    choice2.textContent = questions[qIndex].options[1];
    choice3.textContent = questions[qIndex].options[2];
    choice4.textContent = questions[qIndex].options[3];
    console.log('test1', questions[qIndex].answer)
    qIndex = qIndex + 1;
    console.log('test2', questions[qIndex-1].answer)
    } else {
      quizEnd();
    }
}

// eventListener for when to trigger question navigation function
container.addEventListener('click', function(event){
  const element = event.target;
    if(element.matches('.choice')){
      console.log('test3', `click on ${element.innerHTML}`, `answer is ${questions[qIndex-1].answer}`); //<---
      if (element.innerHTML !== questions[qIndex-1].answer) {
        quizTime -= 10; //subtrack time 
        answerMsg.textContent = "Wrong!";
        navQuiz();
      } else{
        correctAns ++;
        answerMsg.textContent = "Correct!";
        console.log('test4', correctAns*10);
        navQuiz();
      }
    }
});  
  

function myTimer() {
  timeInt = setInterval(function() {
    quizTime--;
    timerEl.textContent = `${quizTime} seconds left`;
    if(quizTime === 0){
      clearInterval(timeInt);
      quizEnd();
    }
  }, 1000);
}

function quizEnd() {
  qScreen.style.display = 'none';
  timerEl.style.display = 'none';
  endScreen.style.display = 'block';
  showScore.textContent = `You final score is ${correctAns*10} out of 110 points.`;
}

// retryBtn.addEventListener('click', function(){
//   beginQuiz();
// });

// 11 questions with answer: objects in an array
  const questions = [
    {
      question: 'What is the capital of Taiwan?',
      options: [
        'Taipei',
        'Taichung',
        'Hong Kong',
        'Shanghai'], answer: 'Taipei'
    },
    {
      question: 'What is the capital of Ukraine?',
      options: [
        'Luhansk',
        'Donetsk',
        'Kyiv',
        'Odesa'], answer: 'Kyiv'
    },
    {
      question: 'What is the capital of Japan?',
      options: [
        'Osaka',
        'Tokyo',
        'Sapporo',
        'Kyoto'], answer: 'Tokyo'
    },
    {
      question: 'What is the capital of South Korea?',
      options: [
        'Busan',
        'Seoul',
        'Jeju-si',
        'Incheon'], answer: 'Seoul'
    },
    {
      question: 'What is the capital of France?',
      options: [
        'Nice',
        'Marseille',
        'Lyon',
        'Paris'], answer: 'Paris'
    },
    {
      question: 'What is the capital of Egypt?',
      options: [
        'Cairo',
        'Alexandria',
        'Giza',
        'Faiyum'], answer: 'Cairo'
    },
    {
      question: 'What is the capital of Australia?',
      options: [
        'Canberra',
        'Sydney',
        'Brisbane',
        'Perth'], answer: 'Canberra'
    },
    {
      question: 'What is the capital of Argentina?',
      options: [
        'Mendoza',
        'Buenos Aires',
        'Córdoba',
        'Rosario'], answer: 'Buenos Aires'
    },
    {
      question: 'What is the capital of Italy?',
      options: [
        'Venice',
        'Florence',
        'Rome',
        'Naples'], answer: 'Rome'
    },
    {
      question: 'What is the capital of Germany?',
      options: [
        'Munich',
        'Hamburg',
        'Berlin',
        'Frankfurt'], answer: 'Berlin'
    },
    {
      question: 'What is the capital of United States?',
      options: [
        'Chicago',
        'San Francisco',
        'New York',
        'Washington, D.C.'], answer: 'Washington, D.C.'
    }
  ]

