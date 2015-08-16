// 1) **Create a new object called CountDown that we can create multiple instances**
//
// Like this:
//
//     var counter1 = new CountDown('august 1 2015')
//     var counter2 = new CountDown('october 13 2015')
//
// 2) **For that object create a method called `remaining` that returns a JavaScript object**
//
// It should be structured like this:
//
//     {
//       seconds: 59, // 0-59
//       minutes: 59, // 0-59
//       hours: 23, // 0-23
//       days: 99 // ∞
//     }
//
// The idea is that the method would called like this:
//
//     counter1.remaining();
//     counter2.remaining();

function CountDown(future_date) {
	// set the future date in ms
	this.future_date = Date.parse(future_date);	
	this.set_date = function(future_date) {
		this.future_date = Date.parse(future_date);
	}
	
	this.remaining = function () {			    // calculate the time in ms between future and now 
		var remaining_seconds = (this.future_date - Date.now()) / 1000;	   
		var remaining = {
			seconds: Math.floor(remaining_seconds),
			minutes: Math.floor(remaining_seconds/60),
			hours: Math.floor(remaining_seconds/60/60),
		    days: Math.floor(remaining_seconds/60/60/24),
		}
		
		remaining.hours = remaining.hours - (remaining.days*24);
		remaining.minutes = remaining.minutes - (remaining.hours*60) - (remaining.days*24*60);
		remaining.seconds = remaining.seconds - (remaining.minutes*60) - (remaining.hours*60*60) - (remaining.days*24*60*60);
		
		return remaining;
	}	
}
