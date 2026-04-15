function findLargest() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const output = document.getElementById('output');

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        output.className = 'output error';
        output.textContent = 'Please enter all three numbers';
        return;
    }

    let largest;
    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }

    output.className = 'output success';
    output.textContent = `Largest: ${largest}`;
}

function resetChecker() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('output').className = 'output';
}
