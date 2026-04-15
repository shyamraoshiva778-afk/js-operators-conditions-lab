function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const output = document.getElementById('output');

    if (isNaN(num1) || isNaN(num2)) {
        output.className = 'output error';
        output.textContent = 'Please enter valid numbers';
        return;
    }

    let result;

    if (operator === '/' && num2 === 0) {
        output.className = 'output error';
        output.textContent = 'Cannot divide by zero!';
        return;
    }

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }

    output.className = 'output success';
    output.textContent = `Result: ${result}`;
}

function resetCalculator() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operator').value = '+';
    document.getElementById('output').textContent = '';
    document.getElementById('output').className = 'output';
}
