
/*----- constants -----*/ 
//N/A

/*----- app's state (variables) -----*/ 
var hit, miss, time;

/*----- cached element references -----*/ 
var hitMsg = document.querySelector('.hit');
var missMsg = document.querySelector('.miss');
var timeMsg = document.querySelector('.time');
var hole = document.querySelectorAll('.hole')


// /*----- event listeners -----*/ 
hole.forEach(function(element) {
    element.addEventListener('click',handleMove);
  });


document.querySelector('button').addEventListener('click',initialize)
/*----- functions -----*/
initialize()

function generateMole() {

}

function moleTiming() {

}

function timer() {
    console.log('Timer Works')
}

function handleMove() {
  console.log('click works')  
}

function render() {
  hitMsg.textContent= `hit: ${hit}`;
  missMsg.textContent = `miss: ${miss}`;
  timeMsg.textContent = `time: ${time}`;
}

function initialize() {
    hit = 0;
    miss = 0;
    time = 60;
    timer()
    render()
    console.log('init works')
}
