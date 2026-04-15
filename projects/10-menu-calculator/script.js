function calculateTotal() {
    const item = document.getElementById('item').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const output = document.getElementById('output');

    if (item === '' || isNaN(quantity) || quantity <= 0) {
        output.className = 'output error';
        output.textContent = 'Please select item and enter quantity';
        return;
    }

    let price;
    switch (item) {
        case '1':
            price = 10;
            break;
        case '2':
            price = 5;
            break;
        case '3':
            price = 8;
            break;
        case '4':
            price = 4;
            break;
        case '5':
            price = 2;
            break;
        default:
            price = 0;
    }

    const total = price * quantity;
    output.className = 'output success';
    output.textContent = `Total: $${total}`;
}

function resetChecker() {
    document.getElementById('item').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('output').className = 'output';
}
