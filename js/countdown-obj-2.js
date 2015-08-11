//---COUNTDOWN CONSTRUCTOR---//
function CountDown(future_date,eventname) {
    // set future date in milliseconds
    this.future_date = Date.parse(future_date);
    this.eventname = eventname;
};

//--REMAINING PROTOTYPE--//
    CountDown.prototype.remaining = function () {
      var current = "Today is " + this.eventname + "!";

    //Create new Date object "today"
      var today = Date.now();

    //Parses difference in time between future and today's date
      var msInDay = 60*60*1000*24;
      var msInHour = 60*60*1000;
      var msInMin = 60*1000;
      
      var diff = this.future_date - today;
      var dday = Math.floor(diff / msInDay);
      var dhour = Math.floor((diff % msInDay) / msInHour * 1);
      var dmin = Math.floor(((diff % msInDay) % msInHour)/msInMin * 1);
      var dsec = Math.floor((((diff % msInDay) % msInHour) % msInMin) / 1000 * 1);

        if(dday <= 0 && dhour <= 0 && dmin <= 0 && dsec <= 1) {
            console.log(current)
            return false;
            
        } else {
            return {
              seconds: dsec,
              minutes: dmin,
              hours: dhour,
              days: dday
            }
        };
    }
    
 var current_countdown = new CountDown("September 30, 2015", "my 30th birthday!");