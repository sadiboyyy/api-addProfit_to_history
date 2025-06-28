// const elSelectIncome = document.querySelector('#income')
// elSelectIncome.onchange = onChangeInput;

const elButtonExpenseAdd = document.querySelector('#expenseadd')
elButtonExpenseAdd.onclick = onClickExpenseAddTransaction

const elButtonIncomeAdd = document.querySelector('#incomeadd')
elButtonIncomeAdd.onclick = onClickIncomeAddTransaction

console.log(elButtonIncomeAdd) 
const elBtnAddCategoryIncome = document.querySelector('#btn-add-category-income')
elBtnAddCategoryIncome.onclick = onClickAddCategoryIncome

const elInputTextIncome = document.querySelector('#input-category-income')
elInputTextIncome.oninput = onClickAddCategoryIncome

const elAddBtnCategoryExpense = document.querySelector('#btn-add-category-expense')
elAddBtnCategoryExpense.onclick = onClickAddCategoryExpense

const elInputTextExpense = document.querySelector('#input-category-expense')
elInputTextExpense.oninput= onClickAddCategoryExpense

function renderDivBalance(balance) {
  const elIBalance = document.querySelector('#i-balance')
  elIBalance.textContent = '$' + balance
}

function renderTransactionsHistory(transactions) {
  let elLi
  const elDivTransactionsHistory = document.querySelector('.transaction-history > ul')
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
  if (number > 0) handleAddIncome(number)
  elInputIncomeAdd.value = ''
  elInputIncomeAdd.focus()
  console.log('онклик вызван')
}
function onClickExpenseAddTransaction() {
  const elInputExpenseAdd = document.querySelector('#expenseamount')
  const number = elInputExpenseAdd.value
  console.log(number)

  if (number < 0) handleAddExpense(number)
  elInputExpenseAdd.value = ''
  elInputExpenseAdd.focus()
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
  const elOptionIncome = document.querySelector('#income')
  elOptionIncome.value = transaction.category
  const textOptionIncome = transaction.category

  const elSpan = document.createElement('span')
  elSpan.setAttribute('class', 'badge')
  const elI = document.createElement('i')

  elI.textContent = textOptionIncome + transaction.value + '$'
  const elInputBtnDltIncome = document.createElement('input')
  elInputBtnDltIncome.setAttribute('type', 'button')
  elInputBtnDltIncome.setAttribute('id', 'btn-delete-income')
  elInputBtnDltIncome.setAttribute('value', 'x')
  elInputBtnDltIncome.onclick = onClickDeleteCategoryIncome
  if (textOptionIncome !== 'Выберите категорию') {
    // elInputBtn.setAttribute('value," "')
    elSpan.appendChild(elI)
    elSpan.appendChild(elInputBtnDltIncome)
    console.log(elInputBtnDltIncome)
    return elSpan
  }
}

function generateSpanExpenseList(transaction) {
  const elOptionExpense = document.querySelector('#expense')
  elOptionExpense.value = transaction.category
  const textOptionExpense = transaction.category

  const elSpan = document.createElement('span')
  elSpan.setAttribute('class', 'badge')

  const elI = document.createElement('i')
  elI.textContent = textOptionExpense + transaction.value + '$'
  const elInputBtnDltExpense = document.createElement('input')
  elInputBtnDltExpense.setAttribute('type', 'button')
  elInputBtnDltExpense.setAttribute('id', 'btn-delete-expense')
  elInputBtnDltExpense.value = 'x'

  elInputBtnDltExpense.onclick = onClickDeleteCategoryExpense
  if (textOptionExpense !== 'Выберите категорию') {
    elSpan.appendChild(elI)
    elSpan.appendChild(elInputBtn)
    return elSpan
  }
}

function generateOptionIncome(categoryIncome) {
  const elOption = document.createElement('option')
  elOption.setAttribute('id', 'category-add')
  elOption.value = categoryIncome
  return elOption
}

function generateOptionExpense(categoryExpense) {
  const elOption = document.createElement('option')
  elOption.setAttribute('id', 'category-add')
  elOption.value = categoryExpense
  return elOption
}

function renderSelectExpense(categoriesExpense) {
  let elOptionExpense
  const elSelectExpense = document.querySelector('#expense')
  categoriesExpense.forEach(categoryExpense => {
    if (categoriesExpense.type === 'expense') {
      elOptionExpense = generateOptionExpense(categoryExpense)
      elSelectExpense.appendChild(elOptionExpense)
      
    }
  })

}

function renderSelectIncome(categoriesIncome) {
  let elOptionIncome
  const elSelectIncome = document.querySelector('#income')
  categoriesIncome.forEach(categoryIncome => {
    if (categoriesIncome.type === 'income') {

      elOptionIncome = generateOption(categoryIncome)
      elSelectIncome.appendChild(elOptionIncome)
    }
    })
}

function renderIncomeCategoriesList(transactions) {
  let elSpanIncome
  const elDivIncomeList = document.querySelector('.container-income-list')
  elDivIncomeList.innerHTML = ''
  transactions.forEach(transaction => {
    if (transaction.type === 'income') {
      elSpanIncome = generateSpanIncomeList(transaction)

      elDivIncomeList.appendChild(elSpanIncome)
    }
  })
}
function renderExpenseCategoriesList(transactions) {
  let elSpanExpense
  const elDivExpenseList = document.querySelector('.container-expense-list')
  elDivExpenseList.innerHTML = ''
  transactions.forEach(transaction => {
    if (transaction.type === 'expense') {
      elSpanExpense = generateSpanExpenseList(transaction)
      console.log(elSpanExpense)
      elDivExpenseList.appendChild(elSpanExpense)
    }
  })
}


function onClickDeleteCategoryIncome(e) {
  const elButton = e.target
  // const elSpan = elButton.closest('span')
  // const elI = elSpan.querySelector('i')
  // const text = elI.textContent
  const elDivIncome = elButton.closest('.container-income-list')

  handleRemoveCategoryIncome(elDivIncome)
  console.log(elDivIncome)
}
function onClickDeleteCategoryExpense(e) {
  const elButton = e.target
  const elDivExpense = elButton.closest('.container-expense-list')

  handleRemoveCategoryExpense(elDivExpense)
  console.log(elDivExpense)
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
  const elInputCategoryExpense = document.querySelector('#input-category-expense')
  const textExpense = elInputCategoryExpense.value
  btnIncome.value = textExpense
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
