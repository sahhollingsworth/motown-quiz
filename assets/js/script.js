/* DOM variables */
var welcomeEL = document.getElementByID("welcome");
var startBtn = document.getElementById("start");
var timerEL = document.getElementById("time");
var questionEl = document.getElementById("question");
var answersEL = document.getElementById("answers");
var initialsEl = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var leaderboardBtn = document.getElementById("leaderboard-ref");
var leaderboardEL = document.getElementByID("leaderboard");

/* Questions array with all questions, answer options, and correct answer*/
var questions = [
    {
        title: "FIRST QUESTION",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1",
    },
    {
        title: "SECOND QUESTION",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 3",
    },
    {
        title: "THIRD QUESTION",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 3",
    },
    {
        title: "FOURTH QUESTION",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 4",
    },
    {
        title: "FIFTH QUESTION",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1",
    }
]

/* timer variables */
var time = questions.length * 30;
var timeRemain;

/* indicates 1st object in the questions array is the first question shown to user */
var questionIndex = 0;

function quizStart() {
    /* hides the welcome UI */
    welcomeEL.setAttribute("class","hidden");
    /* unhides the question UI */
    questionEl.setAttribute("class", "show");
    /* Starts timer. Calls the time remaining function every 1 second */
    timeRemain = setInterval(function(){
        timeRemaining(); 
    }, 1000);
    /* Display initial time */
    timerEL.textContent = time;
    console.log("start works, now add questions");
    /*console for testing. swap in a function showQuestion(); later that defines for to render a question from the array */
}

function timeRemaining(){
    /* continuous subtraction from time and update UI */
    time--;
    timerEL.textContent = time;
    /* check that there is still time, otherwise, end quiz */
    if(time <= 0){
        console.log("time ran out");
        /* console for testing. swap in a function quizComplete(); later that defines what happens when quiz ends*/
    }
}

/* Listen for click on the leaderboard-ref link to unhide Leaderboard section */
leaderboardBtn.addEventListener("click", showLeaderboard());

/* Leaderboard UI */
function showLeaderboard() {
    /* hides the welcome UI */
    welcomeEL.setAttribute("class","hidden");
    /* hides the question UI */
    questionEl.setAttribute("class", "hidden");
    /* show the leaderboard UI */
    leaderboardEL.setAttribute("class", "show");
    // logic to actually parse high scores from local storage and display all in an OL. if no high scores, "display No Highscores yet"
}

/* Go Back button takes user back to Welcome UI */
var goBack = document.getElementById("goto-quiz");
goBack.addEventListener("click",  function(){
    fromTheTop();
})
    
function fromTheTop () {
    /* hides the welcome UI */
    welcomeEL.setAttribute("class","show");
    /* hides the question UI */
    questionEl.setAttribute("class", "hidden");
    /* hides the leaderboard UI */
    leaderboardEL.setAttribute("class", "hidden");
    /* address timer and questions index if mid quiz */
}

/* Listen for click on the leaderboard-ref link to unhide Leaderboard section */
leaderboardBtn.addEventListener("click", );