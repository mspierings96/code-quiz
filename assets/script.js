var correct = 0
var incorrect = 0
var questionIndex = 0
var questionDiv = document.getElementById("questions")


var quizTime = document.getElementById("quizTime")
var timer = document.getElementById("start")
var container = document.getElementById("container")
var btnStart = document.getElementById("btn-start");

var timeLeft = 100;
var startInterval = 0;
var penalty = 5;
var quizCountdown = 100;

btnStart.addEventListener("click", startQuiz);
function startQuiz(){
    
}


var questions = [{

    title: "What is the capitol of Wisconsin?",
    choices: ["Madison", "Champaign", "Rochester", "Fargo"],
    answer: "Madison"
},

{
    title: "How far away is the sun?",
    choices: ["10 miles", "10,000 miles", "50,000 miles", "93.504 Million Miles"],
    answer: "93.504 Million Miles"
},

{
    title: "What is the largest country in Latin America?",
    choices: ["Argentina", "Argentina", "Brazil", "Peru"],
    answer: "Brazil"
},
{
    title: "What Automobile company created the first car?",
    choices: ["Ford", "Chevrolet", "Mercedes-Benz", "Toyota"],
    answer: "Mercedes-Benz"
},
{
    title: "The moon orbits the earth in how many days?",
    choices: ["10 days", "14 days", "21 days", "27 days"],
    answer: "27 days"
}]



function startTimer(){
    quizCountdown = 100;
    console.log('timer suppose to go')
    var timer = setInterval(function(){
        quizCountdown--;
        quizTime.innerHTML='00:'+quizCountdown;
        if (quizCountdown < 0) {
            clearInterval(timer);
            alert("Time is up!")
        }
    }, 1000);
}
// document.getElementById('incorrect').addEventListener('click', function() {
// });
document.getElementById("btn-start").addEventListener("click", function() {
    startTimer();
    displayQuestion();
  });



function displayQuestion () {

    questionDiv.innerHTML = "";

var btn = document.createElement("h1");   
btn.innerHTML = questions[questionIndex].title;                   
questionDiv.appendChild(btn);    

for (let i = 0; i < questions[questionIndex].choices.length; i++) {
    console.log('each choices!!', questions[questionIndex].choices[i])

    var btn = document.createElement("button");   
    btn.innerHTML = questions[questionIndex].choices[i]; 
    btn.setAttribute("class", "choice-button")
    questionDiv.appendChild(btn);    

    
};

const btns = document.querySelectorAll('.choice-button')

btns.forEach(btn => {

   btn.addEventListener('click', event => {
        console.log( event.target.innerHTML, 'Answer for this question!!!',questions[questionIndex].answer );
        if (event.target.innerHTML === questions[questionIndex].answer) {
            
            console.log("Correct!")
            correct++
            questionIndex++
            

            
        }
        else {
            console.log("Incorrect!")
            incorrect++
            questionIndex++
            quizCountdown -= 5;
            
            quizTime.innerHTML='00:'+quizCountdown;
   
            
        }   

        
        if (questionIndex >= questions.length) {
            console.log("Game Over")
            gameOver()
        }
        else {
          
            displayQuestion()
        }
        
        
   });

});

}

function gameOver() {
    questionDiv.innerHTML = "";

    var input = document.createElement("input");
    input.setAttribute("id", "highScore");
    questionDiv.appendChild(input); 
    var savebtn = document.createElement("button");  
    savebtn.setAttribute("id", "save-button");
    savebtn.innerHTML = "save";         
    questionDiv.appendChild(savebtn); 
    document.getElementById("save-button").addEventListener("click", function() {
        var highScoreToSave = document.getElementById("highScore").value

        localStorage.setItem(highScoreToSave, correct);
        window.location.replace("./scorepage.html");

    
    });
    
   
}

