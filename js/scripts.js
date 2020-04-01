// Business Logic Here: 

var leapYear = function(year) {
  return false;
}

// User Interface Logic Here: 
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
  var year = parseInt($("input#year").val());
  var result = leapYear(year);
  $("#result").text(result);
  });
});