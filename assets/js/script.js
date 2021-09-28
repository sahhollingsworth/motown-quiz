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

/* Listener for quiz START button */
startBtn.onclick = quizStart;

function quizStart() {
    /* hide the welcome UI */
    welcomeEL.setAttribute("class","hidden");
    
    /* unhide the question UI */
    questionEl.setAttribute("class","");
    
    /* Starts timer. Calls the time remaining function every 1 second */
    timeRemain = setInterval(function(){
        timeRemaining(); 
    }, 1000);
    
    /* Display initial time */
    timerEL.textContent = time;
    renderQuestion();
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
        quizEnd();
    }
}

/* Function to locate and render in UI a question object and all corresponding answer option objects from the questionSet array */
function renderQuestion(){
    /* get a question from the questionSet array */
    var question = questionSet[questionIndex];
    
    /* update title with active question object */
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
    /* Each answer option object has an event listener*/
    answersEl.children[0].addEventListener("click", function(event){
        optionClick(answersEl.children[0]);
    });
    answersEl.children[1].addEventListener("click", function(event){
        optionClick(answersEl.children[1]);
    });
    answersEl.children[2].addEventListener("click", function(event){
        optionClick(answersEl.children[2]);
    });
    answersEl.children[3].addEventListener("click", function(event){
        optionClick(answersEl.children[3]);
    });

    function optionClick(option){
        /* if the answer option the user clicks on matches in type and value to the answer in the questionSet array, flash the user a Correct toast */
        if(option.textContent == questionSet[questionIndex].answer){
            toastEl.textContent = "Correct!";
        
        /* if the answer option the user clicks on doesn't match in type and value to the answer in the questionSet array, flash the user a Wrong toast and  */
        } else {
            
            /* subraction assingment to remove 2 seconds from time remaining if the answer is wrong */
            time -= 10;
            toastEl.textContent = "Wrong :/";
        }

        /*iterate to next question */
        questionIndex++;

        /* Evaluate if all questions in the array have been used yet */
        if (questionIndex === questionSet.length) {
            quizEnd();
        } else {
            renderQuestion();
        }
    }
}

/* Render end page with score and initials entry form */
function quizEnd(){
    /* stop timer */
    clearInterval(timeRemain);
    timerEL.textContent = time;
    
    /* Return quiz score */
    var score = document.getElementById("score");
    score.textContent = time;
    
    /* hide the question UI */
    questionEl.setAttribute("class","hidden");
    
    /* unhide the end UI */
    var endEL = document.getElementById("end");
    endEL.setAttribute("class", "");
}

/* Listener for initials SUBMIT button */
submitBtn.onclick = saveScore;

/* Listener for key release - to evaluate if enter was used instead of clicking initials SUBMIT button */
initialsEl.onkeyup = checkKey;

/* Evaluate if the key pressed was the enter key for form submission */
function checkKey(event) {
    /* if the released key was the enter key, then act as form submission of initials value */
    if (event.keyCode === 13){
        saveScore();
    }
}


function saveScore(){
    /* standardize value provided in initials field */
    var initials = initialsEl.value.toUpperCase();
    console.log(initials);
    initials.trim();
    console.log(initials);
    
    /* validation to prevent blank form entry */
    if (initials === ""){
        alert("Please provide initials");
        saveScore;
    } else {
        var highscores;

        /* Get any highscores present in local storage */
        if (JSON.parse(localStorage.getItem("highscores")) != null) {
            highscores = JSON.parse(window.localStorage.getItem("highscores"));
        
        /* if no high scores in local storage, create an empty array */
        } else {
            highscores = []
        }
        /* create an object for current completion */
        var newScore = {
            initials: initials,
            score: time,
        };

        /* Add object created for current completion to the end of the highscores array */
        highscores.push(newScore);
        
        /* Save Hish Scores array to local storage as string */
        localStorage.setItem("highscores",JSON.stringify(highscores));

        location.href = "leaderboards.html";
    }
}

// leaderboardBtn.addEventListener("click", );
