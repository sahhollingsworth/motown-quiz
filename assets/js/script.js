/* DOM variables */
var startBtn = document.getElementById("start");
var timerEL = document.getElementbyID("time");

var questionEl = document.getElementById("question");
var answersEL = document.getElementById("answers");

var initialsEl = document.getElementById("initials");
var submitBtn = document.getElementById("submit");

/* timer variables */
var time = questions.length * 30;
var timeRemain = 0;
var questionIndex = 0;

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


function quizStart() {
    var screenWelcome = document.getElementByID("welcome");
    /* hides the welcome UX */
    screenWelcome.setAttribute("class","hidden");
    /* unhides the question UX */
    questionEl.setAttribute("class", "show");
    /* start timer */
    time
}