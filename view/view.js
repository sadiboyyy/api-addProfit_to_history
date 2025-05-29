// const elSelectIncome = document.querySelector('#income')
// elSelectIncome.onchange = onChangeInput;

const elButtonOutcome = document.querySelector('#expenseadd')
elButtonOutcome.onclick = onClickOutcome
const elButtonIncome = document.querySelector('#incomeadd')
elButtonIncome.onclick = onClickIncome

function renderDivBalance(balance) {
  const elIBalance = document.querySelector('#i-balance')
  elIBalance.textContent = '$' + balance
}

function renderTransactions(transactions) {
  let elLi
  const elDivTransactions = document.querySelector('.transaction-history > ul')
  elDivTransactions.innerHTML = ''
  transactions.forEach(t => {
    if (t.type === 'income') elLi = generateTransactionIncome(t)
    if (t.type === 'expence') elLi = generateTransactionOutcome(t)
    elDivTransactions.appendChild(elLi)
  })
}

function onClickIncome() {
  const elInputIncomeAdd = document.querySelector('#incomeamount')
  const number = elInputIncomeAdd.value
  console.log('кнопка инкома нажата')
  console.log(number)
  if (number > 0) handleAddIncome(number)
  elInputIncomeAdd.value = ''
  elInputIncomeAdd.focus()
}
function onClickOutcome() {
  const elInputOutcomeAdd = document.querySelector('#expenseamount')
  const number = elInputOutcomeAdd.value
  console.log('кнопка оуткома нажата')
  console.log(number)
  if (number < 0) {
    handleAddOutcome(number)
    handleAddTransactionOutcome(number)
  }
}

function generateTransactionIncome(transaction) {
  const elLiIncome = document.createElement('li')
  elLiIncome.setAttribute('class', 'income')
  elLiIncome.textContent = '$' + transaction.value
  return elLiIncome
}
function generateTransactionOutcome(transaction) {
  const elLiOutcome = document.createElement('li')
  elLiOutcome.setAttribute('class', 'outcome')
  elLiOutcome.textContent = '$' + transaction.value
  return elLiOutcome
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
