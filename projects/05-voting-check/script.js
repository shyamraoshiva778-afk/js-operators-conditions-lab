function checkVoting() {
    const age = parseInt(document.getElementById('age').value);
    const output = document.getElementById('output');

    if (isNaN(age) || age <= 0) {
        output.className = 'output error';
        output.textContent = 'Please enter a valid age';
        return;
    }

    const result = age >= 18 ? 'Eligible to Vote' : 'Not Eligible to Vote';
    output.className = age >= 18 ? 'output eligible' : 'output not-eligible';
    output.textContent = result;
}

function resetChecker() {
    document.getElementById('age').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('output').className = 'output';
}
