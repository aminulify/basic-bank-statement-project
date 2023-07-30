// add event listener tp the deposit
document.getElementById('btn-deposit').addEventListener('click', function() {
    const inputDeposit = document.getElementById('input-deposit');
    const newDepositAmountString = inputDeposit.value;

    // get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;

    // convert string to floating value 
    // console.log(typeof(previousDepositTotal));
    const newDepositAmount = parseFloat(newDepositAmountString);
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;


    depositTotalElement.innerText = currentDepositTotal;

    // clear input data 
    inputDeposit.value = '';

    // Balance 
    // Balance 
    const inputBalancePresent = document.getElementById('balance-total');
    const balancePresent = inputBalancePresent.innerText;

    const newBalance = parseFloat(balancePresent);
    const balance = newBalance + newDepositAmount;
    inputBalancePresent.innerText = balance;

    inputBalancePresent.value = '';
})

// withdraw statement
// withdraw statement
document.getElementById('btn-withdraw').addEventListener('click', function() {
    const inputWithdraw = document.getElementById('input-withdraw');
    const newInputWithdraw = inputWithdraw.value;

    // present amount check get input number
    const inputWithdrawpresentAmount = document.getElementById('withdraw-total');
    const withdrawPresentAmount = inputWithdrawpresentAmount.innerText;

    const newWithdrawAmount = parseFloat(newInputWithdraw);
    const presentAmount = parseFloat(withdrawPresentAmount);

    const currentWithdrawAmount = newWithdrawAmount + presentAmount;
    inputWithdrawpresentAmount.innerText = currentWithdrawAmount;

    // clear input data 
    inputWithdraw.value = '';

    // Balance 
    // Balance 
    const inputBalancePresent = document.getElementById('balance-total');
    const balancePresent = inputBalancePresent.innerText;

    const newBalance = parseFloat(balancePresent);
    const balance = newBalance - newWithdrawAmount;
    if (balance > -1) {
        inputBalancePresent.innerText = balance;
    } else {
        alert("Have not minimum balance!!!")
    }
    inputBalancePresent.value = '';
})
