
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
    return this.current +" "+diceRollResult;
  }else{
    this.current = 0;
  }
};

Player.prototype.hold = function (hold){
 const diceRollResult = Math.floor( (Math.random() * 6)+1);
 if (diceRollResult === 1){
   this.total += 0;
 }else{
   this.total+=this.current;
   this.current = 0;
 }
}
//Taking Turns ---
var playerOneTurn = true;

function switchPlayer() {
  if (playerOneTurn) {
    let roll = playerOne.roll();
    let hold = playerOne.hold();
  } else if (!playerOneTurn){
    let roll = playerTwo.roll();
    let hold = playerTwo.hold();
  }
}

//Front End---
$(document).ready(function() {
$("button#roll").click(function() {
   return roll;
  $("#result").append(roll)
  });

  $("button#hold").click(function() {
    Player.hold()
   $("#total").append(playerOne.total)
  });
});
