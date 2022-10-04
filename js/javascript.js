const containerGrid = document.querySelector('.container-grid');

for (let i = 0; i < 256; i++) {
  let div = document.createElement('div');
  containerGrid.appendChild(div);
};

const gridDiv = document.querySelectorAll('.container-grid div');

gridDiv.forEach((div) => {
  div.addEventListener('mouseenter', () => {
    div.className = 'flex-div'
  })
});