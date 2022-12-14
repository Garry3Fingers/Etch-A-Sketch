
// Create the grid block and start the draw function

const gridContainer = document.querySelector('.grid-container');

const formContainer = document.querySelector('.form-container form');

const submitBtn = document.querySelector('button[type="submit"]');

const h2Start = document.createElement('h2');

formContainer.addEventListener('submit', createGrid);

gridContainer.addEventListener('click', draw);

function createGrid(e) { 

  h2Start.textContent = 'Click on the field to start drawing';

  formContainer.appendChild(h2Start);
  
  const [horizontal, vertical, numberSquares] = getGridSize();

  gridContainer.style.height = `${vertical * 10}px`;

  gridContainer.style.width = `${horizontal * 10}px`;

  for (let i = 0; i < numberSquares; i++) {

    let div = document.createElement('div');

    gridContainer.appendChild(div);

  };
  
  e.preventDefault();

};


function getGridSize() {

  const horizontalSquares = +document.getElementById('horizontally').value;

  const verticalSquares = +document.getElementById('vertically').value;

  let gridOfSquare = horizontalSquares * verticalSquares;

  const gridSizeValues = [horizontalSquares, verticalSquares, gridOfSquare];

  return gridSizeValues;

};


// The draw block

function draw() { 

  gridContainer.removeEventListener('click', draw);

  submitBtn.setAttribute('disabled', '');

  const radioInput = document.querySelector('input[name="mode"]:checked').value;

  switch (true) { 

    case (radioInput === 'black'): 
      
      drawBlackSquare();

      break;    
    
    case (radioInput === 'random'):

      drawRandomColorSquare();
      
      break;
    
    case (radioInput === 'shade'):

      drawShadingSquare();

      break;
    
  };

};


const randomNumber = (number) => Math.floor(Math.random() * (number + 1));

const sumNumber = (number) => number + 0.1;


function drawShadingSquare() { 

  const gridDiv = document.querySelectorAll('.grid-container div');
  
  gridDiv.forEach((div) => {

    let opacity = +div.style.opacity;

    div.addEventListener('mouseenter', () => {

      let newOpacity = sumNumber(opacity);

      if (opacity === 1) {

        newOpacity = '1';

      };

      div.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;

      opacity = newOpacity;

    });

  });

};


function drawRandomColorSquare() { 

  const gridDiv = document.querySelectorAll('.grid-container div');

  gridDiv.forEach((div) => {

    div.addEventListener('mouseenter', () => {

      div.style.backgroundColor = `rgb(${randomNumber(255)}, \
      ${randomNumber(255)}, ${randomNumber(255)})`;

    });

  });

};


function drawBlackSquare() { 

  const gridDiv = document.querySelectorAll('.grid-container div');

  gridDiv.forEach((div) => {

    div.addEventListener('mouseenter', () => {

      div.className = 'grid-div';

    });

  });

};


// The reset block

formContainer.addEventListener('reset', clearGrid);

function clearGrid() {

  gridContainer.addEventListener('click', draw);

  submitBtn.removeAttribute('disabled', '');

  if (gridContainer.firstChild) {

    gridContainer.replaceChildren();

  };

  gridContainer.style.height = '';

  gridContainer.style.width = '';

  h2Start.textContent = '';

};

// JS styles event for buttons

const eventBtn = document.querySelectorAll('button');

eventBtn.forEach((btn) => {

  btn.addEventListener('mousedown', (e) => {

    e.target.style.border = '5px solid #6a33cf';

  });

});

eventBtn.forEach((btn) => {

  btn.addEventListener('mouseup', (e) => {

    e.target.style.border = '2px solid #6a33cf';

  });
  
});