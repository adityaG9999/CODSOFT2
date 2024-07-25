// script.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
    animateDisplay();
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
    animateDisplay();
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
    animateDisplay();
}

function animateDisplay() {
    const display = document.getElementById('display');
    display.classList.add('active');
    setTimeout(() => {
        display.classList.remove('active');
    }, 200);
}
