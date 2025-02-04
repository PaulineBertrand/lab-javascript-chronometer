class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback !== undefined){
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  
  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    if (String(value).length === 1) {
      return '0' + String(value);
    } else if (String(value).length === 0) {
      return '00';
    } else {
      return String(value);
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}