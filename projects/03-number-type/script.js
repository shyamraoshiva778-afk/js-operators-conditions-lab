function checkNumberType() {
    const number = parseFloat(document.getElementById('number').value);
    const output = document.getElementById('output');

    if (isNaN(number)) {
        output.className = 'output error';
        output.textContent = 'Please enter a valid number';
        return;
    }

    if (number === 0) {
        output.className = 'output success';
        output.textContent = 'Zero';
    } else if (number > 0) {
        if (number % 1 === 0) {
            output.className = 'output success';
            output.textContent = 'Positive Integer';
        } else {
            output.className = 'output success';
            output.textContent = 'Positive Decimal';
        }
    } else {
        if (number % 1 === 0) {
            output.className = 'output success';
            output.textContent = 'Negative Integer';
        } else {
            output.className = 'output success';
            output.textContent = 'Negative Decimal';
        }
    }
}

function resetChecker() {
    document.getElementById('number').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('output').className = 'output';
}
