const container = document.querySelector('.container');

let chosenPenColor = 'black';


for(let i=0; i<64; i++){
  const row = document.createElement('div');
  row.setAttribute('id', 'row');
  container.appendChild(row);
  for(let i=0; i<64; i++){
    const square = document.createElement('span');
    square.className = 'square';
    row.appendChild(square);
    square.innerHTML = '';
  } 
}


const squares = document.querySelectorAll('.square');
squares.forEach(selectSquare => selectSquare.addEventListener('mouseenter', drawing));

function drawing() {
  if (mouseDown) {
    this.style.backgroundColor = chosenPenColor}
} 

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

const cleanBtn = document.querySelector('#canvas');
cleanBtn.addEventListener('click', ()=> {
  squares.forEach(selectSquare => selectSquare.style.backgroundColor = 'white');
})

const penColor = document.querySelectorAll('.penColor');
penColor.forEach(pen => pen.addEventListener('click', ()=>{
  chosenPenColor = pen.id;
}))

const bgColor = document.querySelectorAll('.bgColor');
bgColor.forEach(bg => bg.addEventListener('click', ()=>{
  squares.forEach( 
    selectSquare => selectSquare.style.backgroundColor = bg.id
    )}))