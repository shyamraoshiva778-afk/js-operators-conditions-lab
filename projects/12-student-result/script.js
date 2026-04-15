function calculateResult() {
    const name = document.getElementById('name').value;
    const sub1 = parseFloat(document.getElementById('sub1').value);
    const sub2 = parseFloat(document.getElementById('sub2').value);
    const sub3 = parseFloat(document.getElementById('sub3').value);
    const sub4 = parseFloat(document.getElementById('sub4').value);
    const sub5 = parseFloat(document.getElementById('sub5').value);
    const resultCard = document.getElementById('resultCard');

    if (name === '' || isNaN(sub1) || isNaN(sub2) || isNaN(sub3) || isNaN(sub4) || isNaN(sub5)) {
        alert('Please fill in all fields');
        return;
    }

    if (sub1 < 0 || sub1 > 100 || sub2 < 0 || sub2 > 100 || sub3 < 0 || sub3 > 100 || 
        sub4 < 0 || sub4 > 100 || sub5 < 0 || sub5 > 100) {
        alert('Marks should be between 0 and 100');
        return;
    }

    const total = sub1 + sub2 + sub3 + sub4 + sub5;
    const percentage = (total / 5).toFixed(2);

    let grade, status;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B+';
    } else if (percentage >= 60) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    const passInAll = sub1 >= 35 && sub2 >= 35 && sub3 >= 35 && sub4 >= 35 && sub5 >= 35;
    
    if (passInAll && percentage >= 50) {
        status = 'PASS';
    } else {
        status = 'FAIL';
    }

    document.getElementById('studentName').textContent = name;
    document.getElementById('mark1').textContent = sub1;
    document.getElementById('mark2').textContent = sub2;
    document.getElementById('mark3').textContent = sub3;
    document.getElementById('mark4').textContent = sub4;
    document.getElementById('mark5').textContent = sub5;
    document.getElementById('total').textContent = total;
    document.getElementById('percentage').textContent = percentage + '%';
    document.getElementById('grade').textContent = grade;
    
    const statusEl = document.getElementById('status');
    statusEl.textContent = status;
    statusEl.className = 'status ' + (status === 'PASS' ? 'pass' : 'fail');

    resultCard.classList.add('show');
}

function resetChecker() {
    document.getElementById('name').value = '';
    document.getElementById('sub1').value = '';
    document.getElementById('sub2').value = '';
    document.getElementById('sub3').value = '';
    document.getElementById('sub4').value = '';
    document.getElementById('sub5').value = '';
    document.getElementById('resultCard').classList.remove('show');
}
