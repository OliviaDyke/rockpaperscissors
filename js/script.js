// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;


$( document ).ready(function() {
    $("button").click(function() {
        userChoice = $("#input").val();
    	$("#userChoice").text(userChoice);
    	
    	randomNumber = Math.random();
    	console.log(randomNumber);
    	if (randomNumber <= .3333) {
             computerChoice = "rock";
        } else if  (randomNumber <= .6666) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        } 
        console.log(computerChoice);
        $("#computerChoice").text(computerChoice);
    });
    
    if (userChoice === "rock" && computerChoice === "rock") {
        $("#winner").text("Tie");
    } else if (userChoice === "paper" && computerChoice === "rock") {
        $("#winner").text("User wins!");
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        $("#winner").text("Computer wins!");
    } else if (userChoice === "rock" && computerChoice === "paper") {
        $("#winner").text("Computer wins!");
    } else if (userChoice === "paper" && computerChoice === "paper") {
        $("#winner").text("Tie!");
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        $("#winner").text("User wins!");
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        $("#winner").text("User wins!");
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        $("#winner").text("Computer wins!");
    } else if (userChoice === "scissors" && computerChoice === "scissors") {
        $("#winner").text("Tie!");
    } 
    
    
});

