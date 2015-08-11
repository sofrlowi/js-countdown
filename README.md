# js-countdown
JavaScript countdown timer

*Goal:* A simple JavaScript countdown timer, counting down to an entered date.

*Revisions*:

**countdown.js**: First steps are to get it printing the correct date in the console. Plugged ```countdown.js``` into  ```index.html```.

**countdown-obj.js**: Placed the ```CountDown``` object into a Constructor, and added ```CountDown.remaining()``` method to generate an object with days/hours/minutes/seconds to date, updated on each call. New instances of ```CountDown``` can be created by passing through a future date in "Y, M, D" format.

**countdown-obj-2.js (most recent)**: Static future date set to my 30th birthday on September 30, 2015. Moved the ```CountDown.remaining()``` method into a Prototype to conserve memory with multiple instantiations, and for code tidiness. Plugged ```countdown-obj-2.js``` into ```index.html```, which now renders real-time countdown based on the ```current_countdown``` object.

*Coming Soon:* Add date selection to be passed into new ```CountDown``` instance creation. Clean up code by adding jQuery where applicable. Add CSS to style countdown on ```index.html```.
