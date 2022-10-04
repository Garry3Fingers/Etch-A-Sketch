const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
  let div = document.createElement('div');
  gridContainer.appendChild(div);
};

const gridDiv = document.querySelectorAll('.grid-container div');

gridDiv.forEach((div) => {
  div.addEventListener('mouseenter', () => {
    div.className = 'grid-div';
  })
});

const formContainer = document.querySelector('.form-container form');

formContainer.addEventListener('submit', getGridSize);

function getGridSize(e) {
  
  const horizontally = +document.getElementById('horizontally').value;

  const vertically = +document.getElementById('vertically').value;

  let gridSize = horizontally * vertically;

  const gridSizeValues = [horizontally, vertically, gridSize];

  e.preventDefault();

  return gridSizeValues;

};

// formContainer.addEventListener('submit', createGrid);

// function createGrid() { 
  
  

// };