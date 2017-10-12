alert("Rock, paper, scissors. You v. me, right now. Click on your choice!");

$(function() {

	var userScore = 0
	var	comScore = 0

	function setText(txt) {
	    $("#userScore").text(userScore);
	    $("#comScore").text(comScore);
	    $("#result").text(txt);
  }
  
	function makeComputerChoice() {
      var comThrow = "";
      var r = Math.random();
      if (r < .33) {
        comThrow = "Rock";
      } else if (r < .66) {
        comThrow = "Paper";
      } else {
        comThrow = "Scissors";   
      }
      return comThrow;
  }

	function makeUserChoice(userThrow) {
      var comThrow = makeComputerChoice();
      var outcome = "";
    if (userThrow == comThrow) {
        outcome = "Tie, choose again.";
    } else if (userThrow == "Rock") {
        if (comThrow == "Scissors") {
            outcome = "Your point."; userScore = userScore+1;
        } else {
            outcome = "My point."; comScore = comScore+1;
        }
    } else if (userThrow == "Paper") {
        if (comThrow == "Rock") {
            outcome = "Your point."; userScore = userScore+1;
        } else {
            outcome = "My point."; comScore = comScore+1;
        }
    } else if (userThrow == "Scissors") {
        if (comThrow == "Paper") {
            outcome = "Your point."; userScore = userScore+1;
        } else {
            outcome = "My point."; comScore = comScore+1;
        }
    }
  setText(userThrow+" v. "+comThrow+". "+outcome); 
}
  
$('#rock').click(function() {
          makeUserChoice("Rock");
      });
      $('#paper').click(function() {
          makeUserChoice("Paper");
      });
      $('#scissors').click(function() {
          makeUserChoice("Scissors");
      });
});