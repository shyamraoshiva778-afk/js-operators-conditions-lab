function calculateDiscount() {
    const amount = parseFloat(document.getElementById('amount').value);
    const output = document.getElementById('output');

    if (isNaN(amount) || amount <= 0) {
        output.className = 'output error';
        output.innerHTML = 'Please enter a valid amount';
        return;
    }

    let discountRate = 0;
    if (amount >= 1000) {
        discountRate = 20;
    } else if (amount >= 500) {
        discountRate = 15;
    } else if (amount >= 200) {
        discountRate = 10;
    } else if (amount >= 100) {
        discountRate = 5;
    }

    const discountAmount = (amount * discountRate) / 100;
    const finalAmount = amount - discountAmount;

    output.className = 'output success';
    if (discountRate > 0) {
        output.innerHTML = `Final Amount: $${finalAmount.toFixed(2)}<span class="discount-amount">You saved $${discountAmount.toFixed(2)} (${discountRate}% off)</span>`;
    } else {
        output.innerHTML = `Final Amount: $${finalAmount.toFixed(2)}<span class="discount-amount">No discount applied</span>`;
    }
}

function resetChecker() {
    document.getElementById('amount').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('output').className = 'output';
}
