
/*----- constants -----*/ 
var assets = {
    moleImg:'assets/mole.png'
};
/*----- app's state (variables) -----*/ 
var hit, miss, time,gameLive;

/*----- cached element references -----*/ 
var hitMsg = document.querySelector('.hit');
var missMsg = document.querySelector('.miss');
var timeMsg = document.querySelector('.time');
var hole = document.querySelectorAll('.hole');
var button = document.querySelectorAll('button');
var winMsg = document.getElementById('final-score');
var holeSection = document.getElementById('holes-section');

// /*----- event listeners -----*/ 
hole.forEach(function(element) {
    element.addEventListener('click',handleMove);
  });
document.querySelector('button').addEventListener('click',render)
holeSection.addEventListener('click', missClick);

/*----- functions -----*/
initialize()

function missClick() {
    if(gameLive === true) {
        miss++;
        missMsg.textContent =  `miss: ${miss}`
    }
}

function generateRandNum(min,max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function generateMole() {
    var rndNum = generateRandNum(0,6);
    var currentHole = hole[rndNum]
    currentHole.className += ' active'
    var img = document.createElement('img');
    img.src = assets['moleImg']
    img.style.height = '130%';
    img.style.width = '130%';
    
    currentHole.style.backgroundColor ='transparent'
    currentHole.appendChild(img);

    var removeMole = setInterval(function(){
        if(currentHole.classList.contains('active')){
            currentHole.removeChild(img);
            currentHole.style.backgroundColor = '#55380B';
            currentHole.classList.remove('active');
            clearInterval(removeMole);
        }
    },700);
}
function handleMove() {

    if(!this.classList.contains('active') && gameLive === true){
        missClick()
        miss--
    }
    if(this.classList.contains('active') && gameLive === true){
        var self = this;
        miss -=1
        hitMsg.textContent = ` hit: ${hit++}`
        self.className += ' moleHit';
        var interval = setInterval(function(){
            self.classList.remove('moleHit')
            clearInterval(interval);
        }, 300);
    }
}
function timer() {
  var startInt = setInterval(function() {
    generateMole()
    time --
    timeMsg.textContent = ` time: ${time}`;
    if (time === 0) {
        winMsg.textContent = `Total Hits ${hit} || Total Misses ${miss}`;
        initialize()
        clearInterval(startInt)
    }
  },1000);
}
function render() {
    if(!gameLive) {
    gameLive = true;
    winMsg.textContent = ""
    timer();
    }
}
function initialize() {
    hit = 0;
    miss = 0;
    time = 60;
    gameLive = false;
    hitMsg.textContent= `hit: ${hit}`;
    missMsg.textContent = `miss: ${miss}`;
    timeMsg.textContent = `time: ${time}`;
}
