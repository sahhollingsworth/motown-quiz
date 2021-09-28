/* DOM variables */
var welcomeEL = document.getElementById("welcome");
var startBtn = document.getElementById("start");
var timerEL = document.getElementById("time");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var initialsEl = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var toastEl = document.getElementById("toast");
var leaderboardBtn = document.getElementById("leaderboard-ref");
var leaderboardEL = document.getElementById("leaderboard");

/* Questions array with all questions, answer options, and correct answer*/
var questionSet = [
    {
        title: "FIRST QUESTION TITLE",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1",
    },
    {
        title: "SECOND QUESTION TITLE",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 3",
    },
    {
        title: "THIRD QUESTION TITLE",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 3",
    },
    {
        title: "FOURTH QUESTION TITLE",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 4",
    },
    {
        title: "FIFTH QUESTION TITLE",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1",
    }
]

/* timer variables */
var time = questionSet.length * 20;
var timeRemain;

/* indicates 1st object in the questions array is the first question shown to user */
var questionIndex = 0;

/* Add listener for start button */
startBtn.addEventListener("click", quizStart);

function quizStart() {
    /* hides the welcome UI */
    welcomeEL.setAttribute("class","hidden");
    /* unhides the question UI */
    questionEl.setAttribute("class","show");
    /* Starts timer. Calls the time remaining function every 1 second */
    timeRemain = setInterval(function(){
        timeRemaining(); 
    }, 1000);
    /* Display initial time */
    timerEL.textContent = time;
    showQuestion();
}

/* Function that decrements time and updates UI - unless there is no time remaining, at which point end quiz is show */
function timeRemaining(){
    /* continuous subtraction from time and update UI */
    time--;
    timerEL.textContent = time;
    /* check that there is still time, otherwise, end quiz. This works but the UI is FUBAR */
    // if (time > 0 && time <= 20){
    //     var timer = document.getElementById("timer");
    //     timer.setAttribute("class","time-low");
    //     timerEL.setAttribute("class","time-low");
    // }
    if (time <= 0){
        console.log("time ran out");
        /* quizEnd(); later that defines what happens when quiz ends*/
    }
}

/* Function to find and result*/
function showQuestion(){
    /* get a question from the questionSet array */
    var question = questionSet[questionIndex];
    // update title with active question object
    questionEl.children[0].textContent = question.title;
    /* evaluates if sometimes */
    while (answersEl.hasChildNodes()) {
        answersEl.removeChild(answersEl.lastChild);
    }
    /* Iterate over answer objects in each question's array */
    for (var i = 0; i < question.options.length; i++) {
        /* create button for each option object */
        var answerBtn = document.createElement("BUTTON");
        answerBtn.textContent = question.options[i];
        /* return answer buttons in UI */
        answersEl.appendChild(answerBtn);
    }
    answersEl.children[0].addEventListener("click", function(){
        answerClick(answersEl.children[0]);
        console.log("you hit an answer good job");
    });
    answersEl.children[0].addEventListener("click", function(){
        answerClick(answersEl.children[1]);
    });
    answersEl.children[0].addEventListener("click", function(){
        answerClick(answersEl.children[2]);
    });
    answersEl.children[0].addEventListener("click", function(){
        answerClick(answersEl.children[3]);
    });
}

function     
    /* if the answer option the user clicks on matches in type and value to the answer in the questionSet array, flash the user a Correct toast */
    if(answerClick.textContent === questionSet[question].answer){
        toastEl.textContent = "Correct!";
    /* if the answer option the user clicks on doesn't match in type and value to the answer in the questionSet array, flash the user a Wrong toast and  */
    } else {
        /* subraction assingment to remove 2 seconds from time remaining if the answer is wrong */
        time -= 2;
        toastEl.textContent = "Wrong :/";
    }

/* Leaderboard UI */
/* Listen for click on the leaderboard-ref link to unhide Leaderboard section */
// leaderboardBtn.addEventListener("click", );