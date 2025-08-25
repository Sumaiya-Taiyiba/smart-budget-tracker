let balance = 0;
let income = 0;
let expense = 0;

function addTransaction() {
    const item = document.getElementById('item').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if(item === "" || isNaN(amount)) {
        alert("Please enter valid item and amount");
        return;
    }

    const transactionList = document.getElementById('transaction-list');
    const li = document.createElement('li');
    li.textContent = `${item} - $${amount}`;

    if(type === "income") {
        income += amount;
        balance += amount;
        li.style.color = "green";
    } else {
        expense += amount;
        balance -= amount;
        li.style.color = "red";
    }

    transactionList.appendChild(li);
    updateDisplay();

    document.getElementById('item').value = "";
    document.getElementById('amount').value = "";
}

function updateDisplay() {
    document.getElementById('balance').textContent = balance.toFixed(2);
    document.getElementById('income').textContent = income.toFixed(2);
    document.getElementById('expense').textContent = expense.toFixed(2);
}
