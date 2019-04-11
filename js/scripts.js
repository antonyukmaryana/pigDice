
//Back end ----

//Game  ---

playerOne = new Player("Maryana", 0, 0);
playerTwo = new Player("Zema", 0, 0);

var Game = {
playerOne, playerTwo
//playerOneTurn: true
//playerTwoTurn: false
};
//Player constructor ---

function Player(firstName, current, total) {
  this.firstName = firstName;
  this.current = current;
  this.total = total;
};

//Player Prototypes
Player.prototype.roll = function(roll){
  const diceRollResult = Math.floor( (Math.random() * 6)+1);
  if (diceRollResult > 1){
    this.current += diceRollResult;
    return diceRollResult;
  }else{
    this.current = 0;
    console.log("turn over")
  }
};
Player.prototype.result = function result(rollPlayer) {
  if (rollPlayer == 1) {
    console.log("turn over!");
  }else {
    points.push(rollPlayer);
  }
};
//Front End---
$(document).ready(function() {
$("button#roll").click(function() {
   playerOne.roll()
  $("#result").append(playerOne.roll())
  });

  $("button#hold").click(function() {
    console.log("hold button clicked");
  });
});
