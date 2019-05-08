
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
var winMsg = document.getElementById('final-score')

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
    currentHole.className += ' active'
    var img = document.createElement('img');
    img.src = assets['moleImg']
    img.style.height = '130%';
    img.style.width = '150%';
    currentHole.style.backgroundColor ='transparent'
    currentHole.appendChild(img);

    var removeMole = setInterval(function(){
        if(currentHole.classList.contains('active')){
            currentHole.removeChild(img);
            currentHole.style.backgroundColor = '#55380B'
            currentHole.classList.remove('active')
            clearInterval(removeMole)
        }
    },800);
    console.log("Generating moles..", 'mole position ' + rndNum);
}
function handleMove() {
    if(!this.classList.contains('active') && gameLive === true){
        console.log("miss: ", miss, "hit: ", hit)
        missMsg.textContent = ` miss: ${miss++}`
    }
    if(this.classList.contains('active') && gameLive === true){
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
        // alert()
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
    console.log('init works')
}
