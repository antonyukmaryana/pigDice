
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
//Front End---
$(document).ready(function() {
$("button#roll").click(function() {
   playerOne.roll()
  $("#result").append(playerOne.current+", ")
  });

  $("button#hold").click(function() {
    playerOne.hold()
   $("#total").append(playerOne.total)
  });
});
