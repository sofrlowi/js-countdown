//Set window interval refresh
var countdown_refresh = function () {
 if(!current_countdown.remaining()) {
   clearInterval(countdownLoader);
   // print to page "current" msg
 } else {
  document.getElementById('days').innerHTML = current_countdown.remaining().days;
  document.getElementById('hours').innerHTML = current_countdown.remaining().hours;
  document.getElementById('minutes').innerHTML = current_countdown.remaining().minutes;
  document.getElementById('seconds').innerHTML = current_countdown.remaining().seconds;
  
 } //end if/else
}; //end function

var countdownLoader = window.setInterval(countdown_refresh,1000);