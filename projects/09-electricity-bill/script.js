function calculateBill() {
    const units = parseFloat(document.getElementById('units').value);
    const output = document.getElementById('output');

    if (isNaN(units) || units < 0) {
        output.className = 'output error';
        output.textContent = 'Please enter valid units';
        return;
    }

    let bill = 0;

    if (units <= 100) {
        bill = units * 0.50;
    } else if (units <= 200) {
        bill = 100 * 0.50 + (units - 100) * 0.75;
    } else if (units <= 300) {
        bill = 100 * 0.50 + 100 * 0.75 + (units - 200) * 1.00;
    } else {
        bill = 100 * 0.50 + 100 * 0.75 + 100 * 1.00 + (units - 300) * 1.50;
    }

    output.className = 'output success';
    output.textContent = `Bill Amount: $${bill.toFixed(2)}`;
}

function resetChecker() {
    document.getElementById('units').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('output').className = 'output';
}
