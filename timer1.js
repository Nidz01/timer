const timer = process.argv.slice(2);
  if (timer !== []) {
    for (let time of timer) {
      if (isNaN(time) === false && time >= 0) {
        timer.sort(function(a, b){return a - b});
        setTimeout(() => {
          process.stdout.write('\x07');
        }, time * 1000);
      }
    }
  }