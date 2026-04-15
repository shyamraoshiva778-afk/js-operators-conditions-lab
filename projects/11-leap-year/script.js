function checkLeapYear() {
    const year = parseInt(document.getElementById('year').value);
    const output = document.getElementById('output');

    if (isNaN(year) || year <= 0) {
        output.className = 'output error';
        output.textContent = 'Please enter a valid year';
        return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (isLeap) {
        output.className = 'output leap';
        output.textContent = `${year} is a Leap Year`;
    } else {
        output.className = 'output not-leap';
        output.textContent = `${year} is Not a Leap Year`;
    }
}

function resetChecker() {
    document.getElementById('year').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('output').className = 'output';
}
