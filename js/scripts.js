$(document).ready(function() {

  $("button#roll").click(function() {
    $("#result").append(Math.floor( (Math.random() * 6)+1 ));
  });
  $("button#hold").click(function() {
    console.log("hold button clicked");
  });
});
