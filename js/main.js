
/*----- constants -----*/ 
var assets = {
    moleImg:'assets/mole.png',
};
/*----- app's state (variables) -----*/ 
var hit, miss, time,gameLive;

/*----- cached element references -----*/ 
var hitMsg = document.querySelector('.hit');
var missMsg = document.querySelector('.miss');
var timeMsg = document.querySelector('.time');
var hole = document.querySelectorAll('.hole')
var button = document.querySelectorAll('button')

// /*----- event listeners -----*/ 
hole.forEach(function(element) {
    element.addEventListener('click',handleMove);
  });
document.querySelector('button').addEventListener('click',render)

/*----- functions -----*/
initialize()

function generateRandNum(min,max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function generateMole() {
    var rndNum = generateRandNum(0,6);
    setInterval(function() {
       hole[rndNum].style.backgroundColor = 'red';
    },1000);
    console.log("Generating moles..",rndNum);
}
function handleMove() {
    console.log('click works',this)
}
function timer() {
  var startInt = setInterval(function() {
    console.log(time)
    generateMole()
    time --
    timeMsg.textContent = ` time: ${time}`;
    if (time === 0) {
        console.log('Times up!')
        clearInterval(startInt)
    }
  },time);
}
function render() {
    gameLive = true;
    timer();
  // if time > 0 update scoreboard
    // generateMole()
}
function initialize() {
    hit = 0;
    miss = 0;
    // time * 1000 => seconds to milliseconds
    time = 60;
    gameLive = false;
    hitMsg.textContent= `hit: ${hit}`;
    missMsg.textContent = `miss: ${miss}`;
    timeMsg.textContent = `time: ${time}`;
    console.log('init works')
}
