// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name');
const buttonClick = document.getElementById('button');

buttonClick.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
});
console.log(nameInput);
