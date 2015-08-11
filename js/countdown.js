var eventname = '';
var current = "Today is" + eventname + "!";
var montharray = new Array(
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

//COUNTDOWN FUNCTION
function countdown (yr,m,d,eventname) {

  //Set future date variables
    futureYear = yr;
    futureMonth = m;
    futureDay = d;

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

    if(dday == 0 && dhour == 0 && dmin == 0 && dsec == 1) {
        // document.forms.count.count2.value = current;
        console.log(current)
        return;
    } else {
        // document.forms.count.count2.value =
        console.log("Only " + dday + " days, " + dhour + " hours, " + dmin + " minutes, and " + dsec + " seconds left until " + eventname);
        // setInterval("countdown(futureYear,futureMonth,futureDay)",1000));
  }};

//Enter the count down date using the format year/month/day

countdown(2015,9,30,'my 30th birthday')
