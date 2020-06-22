/*
Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
The user can specify an unlimited number of alarms using command line arguments
*/

const timer = process.argv.slice(2);
  if (timer !== []) {
    timer.sort(function(a, b){return a - b});
    for (let time of timer) {
      if (isNaN(time) === false && time >= 0) {  
        setTimeout(() => {
          process.stdout.write('\x07');
        }, time * 1000);
      }
    }
  }
