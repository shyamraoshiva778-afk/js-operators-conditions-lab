function checkGrade() {
    const marks = parseFloat(document.getElementById('marks').value);
    const output = document.getElementById('output');

    if (isNaN(marks) || marks < 0 || marks > 100) {
        output.className = 'output error';
        output.textContent = 'Please enter valid marks (0-100)';
        return;
    }

    let grade;
    if (marks >= 90) {
        grade = 'A+ (Excellent)';
    } else if (marks >= 80) {
        grade = 'A (Very Good)';
    } else if (marks >= 70) {
        grade = 'B+ (Good)';
    } else if (marks >= 60) {
        grade = 'B (Average)';
    } else if (marks >= 50) {
        grade = 'C (Pass)';
    } else {
        grade = 'F (Fail)';
    }

    output.className = 'output success';
    output.textContent = grade;
}

function resetChecker() {
    document.getElementById('marks').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('output').className = 'output';
}
