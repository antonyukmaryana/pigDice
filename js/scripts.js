
//Back end ----
//var roll = Math.floor( (Math.random() * 6)+1)

var points = [];
var sum = 0



function result(roll) {
  if (roll == 1) {
    console.log("turn over!");
  }else {
    points.push(roll);
  }
};
function Player (name){
  this.name = inputname

var player1= new Player

Player.prototype.roll = function(roll){
  return Math.floor( (Math.random() * 6)+1)
  };

//function total() {
  //function getSum(total, num) {
  //return total + num;
  //console.log(points.reduce(getSum));
}
};

$(document).ready(function() {

  $("button#roll").click(function() {
    $("#result").append(roll())
  });
  $("button#hold").click(function() {
    console.log("hold button clicked");
  });
});
