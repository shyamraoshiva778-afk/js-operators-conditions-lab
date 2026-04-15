function checkEvenOdd() {
    const number = parseInt(document.getElementById('number').value);
    const output = document.getElementById('output');

    if (isNaN(number)) {
        output.className = 'output error';
        output.textContent = 'Please enter a valid number';
        return;
    }

    if (number % 2 === 0) {
        output.className = 'output even';
        output.textContent = `${number} is Even`;
    } else {
        output.className = 'output odd';
        output.textContent = `${number} is Odd`;
    }
}

function resetChecker() {
    document.getElementById('number').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('output').className = 'output';
}
