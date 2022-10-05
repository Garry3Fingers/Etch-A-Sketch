const gridContainer = document.querySelector('.grid-container');

// for (let i = 0; i < 256; i++) {
//   let div = document.createElement('div');
//   gridContainer.appendChild(div);
// };



const formContainer = document.querySelector('.form-container form');

function getGridSize() {
  
  const horizontalSquares = +document.getElementById('horizontally').value;

  const verticalSquares = +document.getElementById('vertically').value;

  let gridOfSquare = horizontalSquares * verticalSquares;

  const gridSizeValues = [horizontalSquares, verticalSquares, gridOfSquare];

  return gridSizeValues;

};

formContainer.addEventListener('submit', createGrid);

function createGrid(e) { 
  
  const [horizontal, vertical, numberSquares] = getGridSize();

  gridContainer.style.height = `${vertical * 25}px`;

  gridContainer.style.width = `${horizontal * 25}px`;

  for (let i = 0; i < numberSquares; i++) {
    let div = document.createElement('div');
    gridContainer.appendChild(div);
  };
  
  e.preventDefault();

};

const gridDiv = document.querySelectorAll('.grid-container div');

gridDiv.forEach((div) => {
  div.addEventListener('mouseenter', () => {
    div.className = 'grid-div';
  })
});