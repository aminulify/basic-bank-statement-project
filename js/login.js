document.getElementById('btn-login-submit').addEventListener('click', function() {
    const email = 'mdfahad@gmail.com';
    const pass = '1234567';
    // email check 
    const inputEmail = document.getElementById('input-email');
    const emailCheck = inputEmail.value;

    // password check 
    const inputPass = document.getElementById('input-pass');
    const passCheck = inputPass.value;
    // console.log(emailCheck, passCheck);

    if (email.toLowerCase() == emailCheck.toLowerCase() && pass === passCheck) {
        window.open('bank.html', '_blank');
    } else {
        alert('Invalid User');
    }
})