const container = document.querySelector('.container');

for(let i=0; i<16; i++){
  const row = document.createElement('div');
  container.appendChild(row);
  for(let i=0; i<16; i++){
    const square = document.createElement('span');
    square.className = 'square';
    row.appendChild(square);
    square.innerHTML = 's';
  } 
}


const squares = document.querySelectorAll('.square');
squares.forEach(selectSquare => selectSquare.addEventListener('mousedown', (e) => {
  selectSquare.style.backgroundColor = "black";  
}));