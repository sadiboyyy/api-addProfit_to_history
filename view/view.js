// const elSelectIncome = document.querySelector('#income')
// elSelectIncome.onchange = onChangeInput;

const elButtonOutcome = document.querySelector("#expenseadd");
elButtonOutcome.onclick = onClickOutcome;
const elButtonIncome = document.querySelector("#incomeadd");
elButtonIncome.onclick = onClickIncome;

function renderDivBalance(balance) {
  const elIBalance = document.querySelector("#i-balance");
  elIBalance.textContent = "$" + balance;
}

function generateTransactionIncome(transaction) {
  const elLiIncome = document.createElement("li");
  elLiIncome.setAttribute("class", "income");
  elLiIncome.textContent = "$" + transaction;
  return elLiIncome;
}
function generateTransactionOutcome(transaction) {
  const elLiOutcome = document.createElement("li");
  elLiOutcome.setAttribute("class", "outcome");
  elLiOutcome.textContent = "$" + transaction;
  return elLiOutcome;
}

function renderTransactions(transactions) {
  const elDivTransactionHistory = document.querySelector(
    ".transaction-history > ul"
  );
  elDivTransactionHistory.innerHTML = "";
  transactions.forEach((transaction) => {
    const elLiIncomeProfit = generateTransactionIncome(transaction);
    const elLiOutcomeLoss = generateTransactionOutcome(transaction);

    if (transaction > 0) {
      elDivTransactionHistory.appendChild(elLiIncomeProfit);
    } else {
      elDivTransactionHistory.appendChild(elLiOutcomeLoss);
    }
  });
}
function generateSpanIncome(transaction) {
  const selectIncome = document.querySelector("#income");
  const elSpanIncome = document.createElement("span");
  elSpanIncome.setAttribute("class", "badge");
  const elI = document.createElement("i");
  const textProfit = selectIncome.value;
  elI.textContent = textProfit + transaction + "$";

  elSpanIncome.appendChild(elI);

  return elSpanIncome;
}
function generateSpanOutcome(transaction) {
  const selectOutcome = document.querySelector("#expense");
  const elSpanOutcome = document.createElement("span");
  elSpanOutcome.setAttribute("class", "badge");
  const elI = document.createElement("i");
  const textLose = selectOutcome.value;
  elI.textContent = textLose + transaction + "$";

  elSpanOutcome.appendChild(elI);

  return elSpanOutcome;
}
function renderDivContainerIncomeList(transaction) {
  const elDivContainerList = document.querySelector(".container-income-list");
  elDivContainerList.innerHTML = "";
  transactions.forEach((transaction) => {
    const elSpanIncome = generateSpanIncome(transaction);
    elDivContainerList.appendChild(elSpanIncome);
  });
}
function renderDivContainerOutcomeList(transactions) {
  const elDivContainerOutcomeList = document.querySelector(
    ".container-outcome-list"
  );
  elDivContainerOutcomeList.innerHTML = "";
  transactions.forEach((transaction) => {
    const elSpanOutcome = generateSpanOutcome(transaction);
    elDivContainerOutcomeList.appendChild(elSpanOutcome);
  });
}
// function onChangeInput() {
//   const selectIncome = document.querySelector("#income");
//   const elIBadge = document.querySelector('.badge > i')
//   const category = selectIncome.value
//  elIBadge.textContent = category

//   }

function onClickIncome() {
  const incomeAdd = document.querySelector("#incomeamount");
  const number = incomeAdd.value;
  if (number > 0) {
    console.log(number);
    handleAddIncome(number);
    handleAddTransactionIncome(transactions);

    console.log("кнопка инкома нажата");
  }
}

function onClickOutcome() {
  const outcomeAdd = document.querySelector("#expenseamount");

  const number = outcomeAdd.value;
  if (number < 0) {
    console.log(number);
    
    handleAddOutcome(number);
    
    handleAddTransactionOutcome(transactions);
    // renderTransactions(transactions);
    console.log("кнопка оуткома нажата");
  }
}
