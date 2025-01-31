let mainTitle = document.querySelector('#title');
let curValue = 0;

let buttonIncrement = document.querySelector('#increment');
let buttonReset = document.querySelector('#reset');
let buttonDecrement = document.querySelector('#decrement');
let stepValueInput = document.querySelector('#stepValue');

buttonIncrement.addEventListener('click', () => {
    let stepValue = parseInt(stepValueInput.value, 10);
    if (isNaN(stepValue)) stepValue = 1;
    curValue += stepValue;
    mainTitle.textContent = curValue;
});

buttonReset.addEventListener('click', () => {
    curValue = 0;
    mainTitle.textContent = curValue;
});

buttonDecrement.addEventListener('click', () => {
    let stepValue = parseInt(stepValueInput.value, 10);
    if (isNaN(stepValue)) stepValue = 1;
    curValue -= stepValue;
    mainTitle.textContent = curValue;
});