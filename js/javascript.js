const gridContainer = document.querySelector('.grid-container');

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

  draw();

};

function draw() { 
  
//  const gridDiv = document.querySelectorAll('.grid-container div');

  const test = document.getElementById('test').children;

  const divChildren = [...test];

  divChildren.forEach((div) => {
    
    div.style.backgroundColor = `rgba(0, 0, 0, 0)`;
  
  });

  divChildren.forEach((div) => { 
    
    let opacity = +div.style.opacity;
    
    div.addEventListener('mouseover', () => {
      
      let newOpacity = sumNumber(opacity);
      
      if (opacity === 1) {
        
        newOpacity = '1';
      
      };
      
      div.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
      
      opacity = newOpacity;
      
    });
    
    
  });
  

  //  gridDiv.forEach((div) => {
  //    div.addEventListener('mouseenter', () => {
  //      //div.className = 'grid-div';
  //      //div.style.backgroundColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
      
  //      let a = 0.1
  //      div.style.backgroundColor = `rgba(0, 0, 0, ${a})`;
       
       
  //      //a = sum(a);
  //    });

  //  });
  
};

formContainer.addEventListener('reset', clearGrid);

function clearGrid() {
  
  if (gridContainer.firstChild) {
    
    gridContainer.replaceChildren();

  };

  gridContainer.style.height = '400px';

  gridContainer.style.width = '400px';

};

const randomNumber = (number) => Math.floor(Math.random() * (number + 1));

const sumNumber = (number) => number + 0.1;