// const elSelectIncome = document.querySelector('#income')
// elSelectIncome.onchange = onChangeInput;

const elButtonExpenseAdd = document.querySelector('#expenseadd')
elButtonExpenseAdd.onclick = onClickExpenseAddTransaction

const elButtonIncomeAdd = document.querySelector('#incomeadd')
elButtonIncomeAdd.onclick = onClickIncomeAddTransaction

console.log(elButtonIncomeAdd)
const elBtnAddCategoryIncome = document.querySelector(
  '#btn-add-category-income'
)
elBtnAddCategoryIncome.onclick = onClickAddCategoryIncome

// const elInputTextIncome = document.querySelector('#input-category-income')
// elInputTextIncome.oninput = onClickAddCategoryIncome

const elAddBtnCategoryExpenseIncome = document.querySelector(
  '#btn-add-category-expense'
)
elAddBtnCategoryExpense.onclick = onClickAddCategoryExpense

const elDltCategoryIncome = document.querySelector('.input-dlt-income')
elDltCategoryIncome.onclick = onClickDeleteCategoryIncome

const elDltCategoryExpense = document.querySelector('.input-dlt-expense')
elDltCategoryExpense.onclick = onClickDeleteCategoryExpense
// const elInputTextExpense = document.querySelector('#input-category-expense')
// elInputTextExpense.oninput= onClickAddCategoryExpense

function renderDivBalance(balance) {
  const elIBalance = document.querySelector('#i-balance')
  elIBalance.textContent = '$' + balance
}

function renderTransactionsHistory(transactions) {
  let elLi
  const elDivTransactionsHistory = document.querySelector(
    '.transaction-history > ul'
  )
  elDivTransactionsHistory.innerHTML = ''
  transactions.forEach(t => {
    if (t.type === 'income') elLi = generateTransactionIncome(t)
    if (t.type === 'expense') elLi = generateTransactionExpense(t)
    console.log(elLi)
    elDivTransactionsHistory.appendChild(elLi)
  })
}

function onClickIncomeAddTransaction() {
  const elInputIncomeAdd = document.querySelector('#incomeamount')
  const number = elInputIncomeAdd.value
  if (number > 0) {
    handleAddIncome(number)
    elInputIncomeAdd.value = ''
    elInputIncomeAdd.focus()
    console.log('онклик вызван')
  }
}
function onClickExpenseAddTransaction() {
  const elInputExpenseAdd = document.querySelector('#expenseamount')
  const number = elInputExpenseAdd.value
  console.log(number)

  if (number < 0) {
    handleAddExpense(number)
    elInputExpenseAdd.value = ''
    elInputExpenseAdd.focus()
  }
}

function generateTransactionIncome(transaction) {
  const elLiIncome = document.createElement('li')
  elLiIncome.setAttribute('class', 'income')
  elLiIncome.textContent = '$' + transaction.value
  return elLiIncome
}
function generateTransactionExpense(transaction) {
  const elLiExpense = document.createElement('li')
  elLiExpense.setAttribute('class', 'expense')
  elLiExpense.textContent = '$' + transaction.value
  return elLiExpense
}

function generateSpanIncomeList(transaction) {
  const elDivCategoryIncome = document.createElement('div')
  elDivCategoryIncome.setAttribute('class', 'category-income')

  const elSpan = document.createElement('span')
  elSpan.setAttribute('class', 'badge')
  const elI = document.createElement('i')

  elI.textContent = transaction.category + '$'
  const elInputBtnDltIncome = document.createElement('input')
  elInputBtnDltIncome.setAttribute('type', 'button')

  // elInputBtn.setAttribute('value," "')
  elDivCategoryIncome.appendChild(elSpan)
  elSpan.appendChild(elI)
  elSpan.appendChild(elInputBtnDltIncome)
  return elDivCategoryIncome
}

function generateSpanExpenseList(categoryExpense) {
  const elDivCategoryExpense = document.createElement('div')
  elDivCategoryExpense.setAttribute('class', 'category-expense')

  const elSpan = document.createElement('span')
  elSpan.setAttribute('class', 'badge')

  const elI = document.createElement('i')
  elI.textContent = categoryExpense + '$'

  const elInputBtnDltExpense = document.createElement('input')
  elInputBtnDltExpense.setAttribute('type', 'button')
  elInputBtnDltExpense.setAttribute('value', 'x')

  elInputBtnDltExpense.onclick = onClickDeleteCategoryExpense

  elDivCategoryExpense.appendChild(elSpan)
  elSpan.appendChild(elI)
  elSpan.appendChild(elInputBtnDltExpense)
  return elDivCategoryExpense
}

function generateOptionIncome(categoryIncome) {
  const elOption = document.createElement('option')
  elOption.textContent = categoryIncome
  elOption.value = categoryIncome

  return elOption
}

function generateOptionExpense(categoryExpense) {
  const elOption = document.createElement('option')
  elOption.textContent = categoryExpense
  elOption.value = categoryExpense
  return elOption
}

function renderSelectExpense(transactions) {
  let elOptionExpense
  const elSelectExpense = document.querySelector('#expense')
  elSelectExpense.innerHTML = ''
  transactions.forEach(categoryExpense => {
    elOptionExpense = generateOptionExpense(categoryExpense)
    elSelectExpense.appendChild(elOptionExpense)
  })
}

function renderSelectIncome(transactions) {
  let elOptionIncome
  const elSelectIncome = document.querySelector('#income')
  elSelectIncome.innerHTML = ''
  transactions.forEach(categoryIncome => {
    elOptionIncome = generateOptionIncome(categoryIncome)
    elSelectIncome.appendChild(elOptionIncome)
  })
}

function renderIncomeCategoriesList(transactions) {
  let elSpanIncome
  const elDivIncomeList = document.querySelector(
    '.container-income-categories-list'
  )
  elDivIncomeList.innerHTML = ''
  transactions.forEach(transaction => {
    elSpanIncome = generateSpanIncomeList(transaction)

    elDivIncomeList.appendChild(elSpanIncome)
  })
}
function renderExpenseCategoriesList(transactions) {
  let elSpanExpense
  const elDivExpenseList = document.querySelector(
    '.container-expense-categories-list'
  )
  elDivExpenseList.innerHTML = ''
  transactions.forEach(categoryExpense => {
    elSpanExpense = generateSpanExpenseList(categoryExpense)

    elDivExpenseList.appendChild(elSpanExpense)
  })
}

function onClickDeleteCategoryIncome(e) {
  const elButton = e.target

  const elSpan = elButton.closest('span')
  const elI = elSpan.querySelector('i')
  const text = elSpan.textContent
  if (elButton) {
    elSpan.classList.add('input-dlt-income-2')
  } else {
    elSpan.classList.remove('input-dlt-income')
  }
  handleRemoveCategoryIncome(text)
  console.log('кнопка удалена')
}

function onClickDeleteCategoryExpense(e) {
  const elButton = e.target

  const elSpan = elButton.closest('span')
  const elIExpense = elSpan.querySelector('i')
  const textExpense = elSpan.textContent
  handleRemoveCategoryExpense(textExpense)
  console.log('кнопка затрат удалена')
}
function onClickAddCategoryIncome() {
  const elInputCategoryIncome = document.querySelector('#input-category-income')
  const textIncome = elInputCategoryIncome.value
  console.log('dfs')
  if (textIncome !== '') {
    handleAddOptionIncome(textIncome)
    console.log(textIncome)
  }
}
function onClickAddCategoryExpense() {
  const elInputCategoryExpense = document.querySelector(
    '#input-category-expense'
  )
  const textExpense = elInputCategoryExpense.value

  console.log('dfs')
  if (textExpense !== '') {
    handleAddOptionExpense(textExpense)
    console.log(textExpense)
  }
}

// function onInputIncome() {
//   const categoryIncome = document.querySelector('#category-income')

// //  const textIncomeCategory =btnIncome.value
// console.log(textIncome)

// }
///Новый рендер только уже с другим масивом

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
