const container = document.querySelector('.container');

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
    this.style.backgroundColor = 'black'}
} 

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}