window.onload = function inicialColor() {
  const blackColor = document.querySelector('.color');
  blackColor.classList.add('selected');
};

const palette = document.querySelector('#color-palette');
const pixelBoardArray = document.getElementsByClassName('pixel');
const pixelBoard = document.getElementById('pixel-board');

palette.addEventListener('click', (event) => {
  for (let index = 0; index < palette.children.length; index += 1) {
    palette.children[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
});
// ajudado por Hugo Daniel

function paint() {
  for (let index = 0; index < pixelBoardArray.length; index += 1) {
    pixelBoardArray[index].onclick = function (e) {
      const selectedColor = document.querySelector('.selected');
      const BGColorSelected = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
      e.target.style.backgroundColor = BGColorSelected;
    };
  }
}
paint();

const bigSection = document.createElement('section');
bigSection.className = 'bigsession';
document.body.appendChild(bigSection);
bigSection.appendChild(palette);

const newSection = document.createElement('section');
newSection.id = 'new-section';
bigSection.appendChild(newSection);

bigSection.appendChild(pixelBoard);

const botaoLimpar = document.createElement('button');
botaoLimpar.id = 'clear-board';
botaoLimpar.innerHTML = 'Limpar';
newSection.appendChild(botaoLimpar);

botaoLimpar.onclick = function clean() {
  for (let index = 0; index < pixelBoardArray.length; index += 1) {
    pixelBoardArray[index].style.backgroundColor = 'white';
  }
};

const newBoardSize = document.createElement('input');
newBoardSize.id = 'board-size';
newBoardSize.type = 'number';
newBoardSize.min = 1;
newBoardSize.placeholder = 'defina o tamanho do quadro';
newSection.appendChild(newBoardSize);

const buttonNewBoard = document.createElement('button');
buttonNewBoard.id = 'generate-board';
buttonNewBoard.innerHTML = 'VQV';
newSection.appendChild(buttonNewBoard);

function subMakeBoard() {
  while (pixelBoard.firstElementChild) {
    pixelBoard.removeChild(pixelBoard.firstElementChild);
  }
  for (let i = 0; i < newBoardSize.value; i += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'line';
    pixelBoard.appendChild(newLine);
    for (let i = 0; i < newBoardSize.value; i += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newLine.appendChild(newPixel);
    }
  }
  paint();
}

function makeBoard() {
  if (newBoardSize.value === '') {
    window.alert('Board inválido!');
  } else if (newBoardSize.value < 5) {
    newBoardSize.value = 5;
    subMakeBoard();
  } else if (newBoardSize.value > 50) {
    newBoardSize.value = 50;
    subMakeBoard();
  } else {
    subMakeBoard();
  }
}

buttonNewBoard.addEventListener('click', makeBoard);

function randomColors() {
  const randomColor = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
  return randomColor;
}

const paletteColors = document.getElementsByClassName('color');
for (let i = 1; i < paletteColors.length; i += 1) {
  paletteColors[i].style.backgroundColor = randomColors();
}

// https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
