var clearBtn = document.getElementById("clear");
var highscoresList = document.getElementById("highscores-list");

/* Run the function to show list of high scores as soon as the page loads */
renderHighscores();

function renderHighscores (){
    /* retrieve the highscores array from local storage */
    var highscores = JSON.parse(localStorage.getItem("highscores"));

    /* If highscores has elements, compares the 'score' value of each element to and sort the elements from highest 'score' to lowest 'score' */
    if (highscores != null) {
        highscores.sort(function(a,b) {
        return parseInt(b.score) - parseInt(a.score);
        });
        /* Iterate through each element of the highscores array to create a list item for each object (score + initials) */
        for (var i = 0; i < highscores.length; i++) {
            var highscoreItem = document.createElement("li");
            highscoreItem.textContent = highscores[i].score +  " - " + highscores[i].initials;
            document.getElementById("highscores-list").appendChild(highscoreItem);
        }
    }
}

/* Clear Highscores button starts the function to clear highscores saved in local storage */
clearBtn.onclick = clearSavedScores;

/* Clears highscores saved in local storage by saveScore function in quiz.js */
function clearSavedScores(){
    /*Removes the highscores array of score+initials*/
    localStorage.removeItem("highscores");
    /* reloads document, which forces the renderHighscores script to rerun to return the now null text output */
    location.reload();
}
