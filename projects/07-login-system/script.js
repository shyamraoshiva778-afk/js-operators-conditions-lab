function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const output = document.getElementById('output');

    if (username === '' || password === '') {
        output.className = 'output error';
        output.textContent = 'Please enter username and password';
        return;
    }

    if (username === 'admin' && password === '1234') {
        output.className = 'output success';
        output.textContent = 'Login Successful!';
    } else {
        output.className = 'output error';
        output.textContent = 'Invalid username or password';
    }
}

function resetChecker() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('output').className = 'output';
}
