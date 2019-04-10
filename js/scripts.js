
//Back end ----
//var roll = Math.floor( (Math.random() * 6)+1)
function roll() {
  return Math.floor( (Math.random() * 6)+1)
};
$(document).ready(function() {

  $("button#roll").click(function() {
    $("#result").append(roll())
  });
  $("button#hold").click(function() {
    console.log("hold button clicked");
  });
});
