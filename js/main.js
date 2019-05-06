
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
    var currentHole = hole[rndNum]
    currentHole.style.backgroundColor = 'red';
    var removeMole = setInterval(function(){
        if(currentHole.style.backgroundColor = 'red'){
            currentHole.style.backgroundColor = '#55380B';
            clearInterval(removeMole)
        }
    },700);
    console.log("Generating moles..", 'mole position ' + rndNum);
}
function handleMove() {
    if(this.style.backgroundColor != 'red'){
        console.log("miss: ", miss, "hit: ", hit)
        missMsg.textContent = ` miss: ${miss++}`
    }
    if(this.style.backgroundColor === 'red'){
        hitMsg.textContent = ` hit: ${hit++}`
        console.log("miss: ", miss, "hit: ", hit)
    }

    console.log('click works',this.style.backgroundColor)

}
function timer() {
  var startInt = setInterval(function() {
    console.log(time)
    generateMole()
    time --
    timeMsg.textContent = ` time: ${time}`;
    if (time === 0) {
        console.log('Times up!')
        initialize()
        clearInterval(startInt)
    }
  },1000);
}
function resetBoard() {
    time = 60
}
function render() {
    if(!gameLive) {
    gameLive = true;
    timer();
    }
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
