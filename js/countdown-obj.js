//---COUNTDOWN CONSTRUCTOR---//
function CountDown(yr,m,d,eventname) {
    this.yr = yr;
    this.m = m;
    this.d = d;
    this.eventname = eventname; 

    //--REMAINING Function--//
    this.remaining = function ()

      var current = "Today is " + eventname + "!";
      var montharray = new Array(
        "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");


    //Create new Date object "today"
      var today = new Date();

      var todayy = today.getFullYear();
      var todaym = today.getMonth();
      var todayd = today.getDate();
      var todayh = today.getHours();
      var todaymin = today.getMinutes();
      var todaysec = today.getSeconds();
      todaystring = montharray[todaym] + " " + todayd + ", " + todayy + " " + todayh + ":" + todaymin + ":" + todaysec;
      futurestring = montharray[m - 1]+ " " + d + ", " + yr;

    //Parses difference in time between future and today's date
      msInDay = 60*60*1000*24;
      msInHour = 60*60*1000;
      msInMin = 60*1000;
      dd = Date.parse(futurestring) - Date.parse(todaystring); //returns milliseconds
      dday = Math.floor(dd / msInDay);
      dhour = Math.floor((dd % msInDay) / msInHour * 1);
      dmin = Math.floor(((dd % msInDay) % msInHour)/msInMin * 1);
      dsec = Math.floor((((dd % msInDay) % msInHour) % msInMin) / 1000 * 1);

        if(dday <= 0 && dhour <= 0 && dmin <= 0 && dsec <= 1) {
            // document.forms.count.count2.value = current;
            console.log(current)
            return;
        } else {
            return {
              seconds: dsec,
              minutes: dmin,
              hours: dhour,
              days: dday
            }
        };
    }
  }
