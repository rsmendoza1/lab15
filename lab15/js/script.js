/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

//ANNOYMOUS FUNCTION
var getRandomNumber = function (max) { //ARGUEMENT, SET NUMBER MAX
    "use strict";
    var random;
    //VALUE BETWEEN 0 AND 1
    random = Math.random();
    //VALUE IS INTERGER BETWEEN 0 AND MAX -1
    random = Math.floor(random * max);
    //VALUE IS INTERGER BETWEEN 0 AND MAX
    random = random + 1;
};

var changePlayer = function () {
    "use strict";
    if ($("current").innerHTML === $("player1").value) {
        $("current").innerHTML = $("player2").value;
    } else {
        $("current".innerHTML) = $("player1").value;
    }
    $("die").value = "0";
    $("total").value = "0";
    $("roll").focus();
};

var newGame = function () {
    "use strict";
    $("score1").value = "0";
    $("score2").value = "0";
    
    if ($("player1").value === "" || $("player2").value === "") {
        $("turn").removeAttribute("class");
        window.alert("Please enter two player names");
        } else {
            $("turn").setAttribute("class", "open");
            changePlayer();
        }
};

var rollDice = function () {
    "use strict";
    total = parseInt($("total").value, 10);
    die = getRandomNumber(6);//SETS MAX NUMBER TO 6
    if (die === 1) {
        total = 0;
        changePlayer();
    } else {
        total = total + die;
    }
    $("die").value = die;
    $("total").value = total;
};

var holdTurn = function () {
    "use strict";
    var score, total;
    total = parseInt($("total").value, 10);
    if ($("current").innerHTML === $("player1").value) {
        score = $("score1");
    } else {
        score = $("score2");
    }
    score = parseInt(score, 10) + total;
    if (score >= 100) {
        window.alert($("current").innerHTML + "wins!");
        newGame();
    } else {
        changePlayer();
    }
};

window.addEventListener("load", function () {
    "use strict";
    $("new_game").addEventListener("click", newGame);
    $("roll").addEventListener("click", rollDice);
    $("hold").addEventListener("click", holdTurn);
});