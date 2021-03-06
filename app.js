// import functions
import { getStrength, getSpeed, getIntelligence, getEmpathy, getLuck } from './get-images.js';

// reference needed DOM elements
let strengthValue = document.getElementById('strength');
let speedValue = document.getElementById('speed');
let intelligenceValue = document.getElementById('intelligence');
let empathyValue = document.getElementById('empathy');
let luckValue = document.getElementById('luck');

let strengthImage = document.getElementById('strength-image');
let speedImage = document.getElementById('speed-image');
let intelligenceImage = document.getElementById('intelligence-image');
let empathyImage = document.getElementById('empathy-image');
let luckImage = document.getElementById('luck-image');

let inputs = Array.from(document.getElementsByTagName('input'));
let allottedSoFarValue;
let allottedSoFarDiv = document.getElementById('allotted-so-far');
let errorMessage = document.getElementById('error-message');

let submitValues = document.getElementById('submit-values');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', () => {
        allottedSoFarValue = (parseInt(strengthValue.value) || 0)
                          + (parseInt(speedValue.value) || 0)
                          + (parseInt(intelligenceValue.value) || 0)
                          + (parseInt(empathyValue.value) || 0)
                          + (parseInt(luckValue.value) || 0);
        allottedSoFarDiv.textContent = `You have allotted ${allottedSoFarValue} points so far`;
    });
}

submitValues.addEventListener('click', () => {
    if (allottedSoFarValue < 50) {
        errorMessage.textContent = `Uh oh! You haven't allotted all your points yet!`;
    } else if (allottedSoFarValue > 50) {
        errorMessage.textContent = `Oh no! You've allotted too many points! Time to make some tough decisions.`;
    } else {
        strengthImage.src = getStrength(strengthValue.value);
        speedImage.src = getSpeed(speedValue.value);
        intelligenceImage.src = getIntelligence(intelligenceValue.value);
        empathyImage.src = getEmpathy(empathyValue.value);
        luckImage.src = getLuck(luckValue.value);
        errorMessage.textContent = '';
    }
});

  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
