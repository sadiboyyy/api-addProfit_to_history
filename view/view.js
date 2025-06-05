// const elSelectIncome = document.querySelector('#income')
// elSelectIncome.onchange = onChangeInput;


const elButtonOutcome = document.querySelector("#expenseadd");
elButtonOutcome.onclick = onClickExpense;
const elButtonIncome = document.querySelector("#incomeadd");
elButtonIncome.onclick = onClickIncome;

function renderDivBalance(balance) {
  const elIBalance = document.querySelector("#i-balance");
  elIBalance.textContent = "$" + balance;
}

function renderTransactions(transactions) {
  let elLi;
  const elDivTransactions = document.querySelector(".transaction-history > ul");
  elDivTransactions.innerHTML = "";
  transactions.forEach((t) => {
    if (t.type === "income") elLi = generateTransactionIncome(t);
    if (t.type === "expense") elLi = generateTransactionExpense(t);
    elDivTransactions.appendChild(elLi);
  });
}

function onClickIncome() {

  
  const elInputIncomeAdd = document.querySelector("#incomeamount");
  const number = elInputIncomeAdd.value;
  console.log(number);
  if (number > 0) handleAddIncome(number);
  elInputIncomeAdd.value = "";
  elInputIncomeAdd.focus();
}
function onClickExpense() {

  const elInputExpenseAdd = document.querySelector("#expenseamount");
  const number = elInputExpenseAdd.value;
  console.log(number);

  if (number < 0) handleAddExpense(number);
    elInputExpenseAdd.value = '';
    elInputExpenseAdd.focus();
   
  
}

function generateTransactionIncome(transaction) {
  
  const elLiIncome = document.createElement("li");
  elLiIncome.setAttribute("class", "income");
  elLiIncome.textContent = "$" + transaction.value;
  return elLiIncome;
}
function generateTransactionExpense(transaction) {
  const elLiExpense = document.createElement("li");
  elLiExpense.setAttribute("class", "expense");
  elLiExpense.textContent = "$" + transaction.value;
  return elLiExpense;
}

function generateIncomeList(transactionIncome) {
  const elOptionExpense = document.querySelector("#income");
  const textOption = elOptionExpense.value;
  
const elSpan = document.createElement('span')
elSpan.setAttribute('class', 'badge-income')
const elI = document.createElement('i')
elI.textContent = textOption + transactionIncome.value + '$'
const elInputBtn = document.createElement('input')
elInputBtn.setAttribute('type', 'button')
  if (elOptionExpense.value !== 'Выберите категорию') {
   
      // elInputBtn.setAttribute('value," "')
      elSpan.appendChild(elI)
      elSpan.appendChild(elInputBtn) 
      return elSpan
  
}
    
  
}

function generateExpenseList(objectExpense,transaction) {
  const elOptionExpense = document.querySelector("#expense");
  elOptionExpense.value = objectExpense.category
  const textOptionExpense = objectExpense.category

  const elSpan = document.createElement("span");
  elSpan.setAttribute("class", "badge-expense;");

  const elI = document.createElement("i");
  elI.textContent = textOptionExpense  + objectExpense.value +"$";
    const elInputBtn = document.createElement("input");
    elInputBtn.setAttribute("type", "button");
    // elInputBtn.setAttribute('value,');
    elSpan.appendChild(elI);
    elSpan.appendChild(elInputBtn);
    return elSpan;
    
  
}

function renderContainerIncomeList(transactions) {
 let elSpanIncome 
  const elDivIncomeList = document.querySelector('.container-income-list')
  elDivIncomeList.innerHTML = "";
  transactions.forEach((transactionIncome) => {
    if (transactionIncome.type === "income") elSpanIncome = generateIncomeList(transactionIncome);
    elDivIncomeList.appendChild(elSpanIncome)

   
  });
}
function renderContainerExpenseList(transactions) {
  let elSpanExpense;
  const elDivExpenseList = document.querySelector(".container-expense-list");
  elDivExpenseList.innerHTML = "";
  transactions.forEach((objectExpense) => {
    if (objectExpense.type === "expense") elSpanExpense = generateExpenseList(objectExpense);
    elDivExpenseList.appendChild(elSpanExpense);
  });
}



// function renderDivContainerIncomeList(categories) {
//   const elDivContainerList = document.querySelector('.container-income-list')
//   elDivContainerList.innerHTML = ''
//   categories.forEach(category => {
//     const elSpanIncome = generateSpanIncome(category)
//     elDivContainerList.appendChild(elSpanIncome)
//   })
// }
// function renderDivContainerOutcomeList(categories) {
//   const elDivContainerOutcomeList = document.querySelector(
//     '.container-outcome-list'
//   )
//   elDivContainerOutcomeList.innerHTML = ''
//   categories.forEach(category => {
//     const elSpanOutcome = generateSpanOutcome(category)
//     elDivContainerOutcomeList.appendChild(elSpanOutcome)
//   })
// }

// function generateSpanIncome(transaction) {
//   const selectIncome = document.querySelector('#income')
//   const elSpanIncome = document.createElement('span')
//   elSpanIncome.setAttribute('class', 'badge')
//   const elI = document.createElement('i')
//   const textProfit = selectIncome.value
//   elI.textContent = textProfit + transaction + '$'
//   elSpanIncome.appendChild(elI)
//   return elSpanIncome
// }
// function generateSpanOutcome(transaction) {
//   const selectOutcome = document.querySelector('#expense')
//   const elSpanOutcome = document.createElement('span')
//   elSpanOutcome.setAttribute('class', 'badge')
//   const elI = document.createElement('i')
//   const textLose = selectOutcome.value
//   elI.textContent = textLose + transaction + '$'
//   elSpanOutcome.appendChild(elI)
//   return elSpanOutcome
// }

// function onChangeInput() {
//   const selectIncome = document.querySelector("#income");
//   const elIBadge = document.querySelector('.badge > i')
//   const category = selectIncome.value
//  elIBadge.textContent = category
//   }
