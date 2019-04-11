
//Back end ----

//Game  ---
var Game = {

let playerOne = new Player("Maryana", 0, 0),
let playerTwo = new Player("Zema", 0, 0),
//playerOneTurn: true
//playerTwoTurn: false
};

Game.prototype.result = function result (roll) {
  if (playerOne.roll > 1){
    points.push(playerOne.roll)
  }else{
    console.log("turn over!")
  }
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
    this.total += diceRollResult;
    console.log(diceRollResult);
  }else{
    console.log("turn over!")
  }
};
Player.prototype.result = function result(rollPlayer) {
  if (rollPlayer == 1) {
    console.log("turn over!");
  }else {
    points.push(rollPlayer);
  }
};

Player.prototype.totalPoints = function getSum(total, num) {
return total + num;
};









//Front End---
$(document).ready(function() {

  $("button#roll").click(function() {
    $("#result").append(roll())
  });
  $("button#hold").click(function() {
    console.log("hold button clicked");
  });
});
