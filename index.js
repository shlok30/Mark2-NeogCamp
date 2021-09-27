var readlineSync = require("readline-sync");

var score = 0;


var highScores = [
  {
    name: "Rakesh",
    score: 5,
  },

  {
    name: "Suresh",
    score: 3,
  },

  {
    name:"Lokesh",
    score: 2
  }
]


var questions = [{
  question: "What is my favourite car",
  answer: "italia"
}, {
  question: "My favorite superhero would be? ",
  answer: "ironman"
},
{
  question: "What course did I study?",
  answer: "electronics engineering"
},
{
  question: "Which is my favourite programming language?",
  answer: "javascript" 
},
{
 question: "Which is my favourite movie?",
  answer: "yeh jawani hain deewani" 
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Shlok?");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer) { 

    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i].question;
    var currentAnswer = questions[i].answer
    play(currentQuestion, currentAnswer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores");

  for(var x = 0 ; x < highScores.length ; x++){
    console.log(`${highScores[x].name} has scored ${highScores[x].score}`)
  }
}


welcome();
game();
showScores();