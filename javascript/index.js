const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

// set an intervalId globally for use by multiple functions
let intervalId;

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let beautifulAlreadyFormattedTime = chronometer.split(); // why do I have to re-split this :'(
  minDecElement.textContent = beautifulAlreadyFormattedTime[0];
  minUniElement.textContent = beautifulAlreadyFormattedTime[1];
}

function printSeconds() {
  let beautifulAlreadyFormattedTime = chronometer.split(); 
  secDecElement.textContent = beautifulAlreadyFormattedTime[3];
  secUniElement.textContent = beautifulAlreadyFormattedTime[4];
} 

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function eraseClock() {
  minDecElement.textContent = "0";
  minUniElement.textContent = "0";
  secDecElement.textContent = "0";
  secUniElement.textContent = "0";
}

function printSplit() {
  let newSplitTime = document.createElement('li');
  let splitPrintLocation = document.querySelector("#splits");
  newSplitTime.textContent = chronometer.split();
  splitPrintLocation.appendChild(newSplitTime);
 
}

function clearSplits() {
  let splitPrintLocation = document.querySelector("#splits");
  splitPrintLocation.innerHTML = "";
}

function setStopBtn() {
  btnLeftElement.classList.replace('stop', 'start');
  btnLeftElement.textContent = 'START';
  btnRightElement.classList.replace('split', 'reset');
  btnRightElement.textContent = 'RESET';

  chronometer.stop();
  clearInterval(intervalId);
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  btnRightElement.textContent = 'SPLIT';
  btnLeftElement.classList.replace('start', 'stop');

  btnRightElement.classList.replace('reset', 'split');
  btnLeftElement.textContent = 'STOP';
  intervalId = setInterval(printTime,4);
  chronometer.start();
}

function setResetBtn() {
  clearSplits();
  eraseClock();
  chronometer.reset();
}

// Start/Stop Button

btnLeftElement.addEventListener('click', () => {

  if (btnLeftElement.classList.contains('start')) {
    setStartBtn();

  } else if (btnLeftElement.classList.contains('stop')) {
      setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnRightElement.classList.contains('split')) {
    setSplitBtn();
  } else if (btnRightElement.classList.contains('reset')) {
    setResetBtn();
  }
});

