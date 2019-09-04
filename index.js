const grid = document.querySelector('.grid');
const reset = document.querySelector('#reset');
const black = document.querySelector('#black');
const random = document.querySelector('#random');
const size = document.querySelector('#size');

let numOfSquares = 16;
let colorChoice = 'black';
let randomRGB = `rgb(${randomColor()})`;
console.log(randomRGB);

function randomColor() {
    let color = '';
    for (let i = 0; i < 3; i++) {
        if (color === '') {
            color += Math.round((Math.random() * 255) + 1)
        } else {
            color += `, ${Math.round((Math.random() * 255) + 1)}`
        }  
    }
    return color;
}

function gridBox(num = numOfSquares, color = colorChoice) {
    const size = `${100 / num}%`;
    
    for (let i = 0; i < num * num; i++) {
        const box = document.createElement('div');
        box.classList.add('grid__box');
        grid.appendChild(box);
        box.style.width = size;
        box.style.height = size;
        box.style.opacity = '.2';
    }
    
    
    const gridSquare = document.querySelectorAll('.grid__box');

    gridSquare.forEach(square => square.addEventListener('mouseover', (() => { 
        const opacity = square.style.opacity;
        square.style.opacity = opacity * 1.5;
        square.style.backgroundColor = color;


    
    })));
    
}

gridBox();

reset.addEventListener('click', (() => {
   while(grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
    gridBox(numOfSquares, colorChoice);
}));

black.addEventListener('click', (() => {
    
    while(grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
    
    colorChoice = 'black';
    
    gridBox(numOfSquares, 'black');
        
}));

random.addEventListener('click', (() => {
    
    while(grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
    
    randomRGB = `rgb(${randomColor()})`;
    colorChoice = randomRGB;
    
    gridBox(numOfSquares, randomRGB);
    
}));

size.addEventListener('click', (() => {
   const sizeBox = prompt('How many squares per side for the grid? ')

   while(grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
    
   numOfSquares = sizeBox;
    
   gridBox(numOfSquares, colorChoice);
}));

