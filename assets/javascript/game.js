
// Here we are using jQuery's .HTML method to instantly select and change the contents of our empty-div.
//$("#row5").html("<p>row 5!</p>");


var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);

// ask if it is ok to have button with same random number ?????
var randomNumber0 = Math.floor(Math.random() * (13 - 1) + 1);
var randomNumber1 = Math.floor(Math.random() * (13 - 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (13 - 1) + 1);
var randomNumber3 = Math.floor(Math.random() * (13 - 1) + 1);

var jewel0 = Number(0);
var jewel1 = Number(0);
var jewel2 = Number(0);
var jewel3 = Number(0);
var total = Number(0);


var wins = Number(0);
var losses = Number(0);

$(document).ready(function () {

    $("#targetNumberDiv").html("<h3>" + targetNumber + "</h3>");

    $("#jewel0Div").on("click", function () {
        jewel0 = Number(jewel0) + Number(randomNumber0);
        // alert(randomNumber0);  
        showSummarry();
    });

    $("#jewel1Div").on("click", function () {
        jewel1 = Number(jewel1) + Number(randomNumber1);
        // alert(randomNumber1);
        showSummarry();
    });

    $("#jewel2Div").on("click", function () {
        jewel2 = Number(jewel2) + Number(randomNumber2);
        //  alert(randomNumber2);
        showSummarry();
    });

    $("#jewel3Div").on("click", function () {
        jewel3 = Number(jewel3) + Number(randomNumber3);
        //   alert(randomNumber3);
        showSummarry();
    });

    function showSummarry() {
        total = jewel0 + jewel1 + jewel2 + jewel3
        if (total == targetNumber) {
            $("#totalScoreDiv").html("<h3>score= " + total + "</h3>");
            alert("You win total score is: " + total);
            wins = wins + 1;
            $("#winsDiv").html("<h5>Wins: " + wins + "</h5>");
            resetGame();
        }
        else if (total > targetNumber) {
            $("#totalScoreDiv").html("<h3>score= " + total + "</h3>");
            alert("You lose total score is: " + total);
            losses = losses + 1;
            $("#lossDiv").html("<h5> Losses: " + losses + "</h5>");
            resetGame();
        }
        //else ramble on
        else {
            $("#totalScoreDiv").html("<h3>score= " + total + "</h3>");
        }


        function resetGame() { //reset values and UI
            targetNumber = Math.floor(Math.random() * (120 - 19) + 19);

            // ask if it is ok to have button with same random number ?????
            randomNumber0 = Math.floor(Math.random() * (13 - 1) + 1);
            randomNumber1 = Math.floor(Math.random() * (13 - 1) + 1);
            randomNumber2 = Math.floor(Math.random() * (13 - 1) + 1);
            randomNumber3 = Math.floor(Math.random() * (13 - 1) + 1);

            jewel0 = Number(0);
            jewel1 = Number(0);
            jewel2 = Number(0);
            jewel3 = Number(0);
            total = Number(0);
            $("#targetNumberDiv").html("<h3>" + targetNumber + "</h3>");
            $("#totalScoreDiv").html("<h3>score= " + total + "</h3>");
        }
    }

});

