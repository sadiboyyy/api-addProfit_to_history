function renderInputAddCategoryIncome() {
 

 
  const elDivIncomeCategotyIncome = document.querySelector(
    '#input-category-income'
  )
  elDivIncomeCategotyIncome.value = ''
   
  
}
function renderInputAddCategoryExpense() {

  const elDivIncomeCategoryExpense = document.querySelector(
    '#input-category-expense'
  )
  elDivIncomeCategoryExpense.value = ''
 

  
  
}
function renderInputAddTransactionIncome() {
  
  const elIncomeAmount = document.querySelector(
    '#incomeamount'
  )
  elIncomeAmount.value = ''

 
}
function renderInputAddTransactionExpense() {

  const elExpenseAmount = document.querySelector(
    '#expenseamount'
  )
  elExpenseAmount.value = ''


}
function renderH4SumTransactions(sumTransactions) {
  // body
  const elIBalance = document.querySelector('#i-balance')
  elIBalance.textContent = '$' + sumTransactions

}
function renderListTransactions(transactions) {
  // body
  let elLi
  const elDivTransactionsHistory = document.querySelector(
    '.transaction-history > ul'
  )
  elDivTransactionsHistory.innerHTML = ''
  transactions.forEach(t => {
    if (t.type === 'income') elLi = generateItemTransaction(t)
    if (t.type === 'expense') elLi = generateItemTransaction(t)
    console.log(elLi)
    elDivTransactionsHistory.appendChild(elLi)
  })
  
}
function renderListCategoriesIncome() {
  // body
  
  const elCategoriesIncomeList = document.querySelector(
    '.badge-income'
  )
  elCategoriesIncomeList.value = ''

}
function renderListCategoriesExpense() {
  // body
 
  const elCategoriesExpenseList = document.querySelector(
    '.badge-expense'
  )
  elCategoriesExpenseList.value = ''
 
}
function renderSelectCategoriesIncome(categoriesIncome) {
  // body
  let elOptionIncome
  const elSelectIncome = document.querySelector('#income')
  elSelectIncome.innerHTML = ''
  categoriesIncome.forEach(categoryIncome => {
    elOptionIncome = generateOptionTitle(categoryIncome)
    elSelectIncome.appendChild(elOptionIncome)
  })
}
function renderSelectCategoriesExpense(categoriesExpense) {
  // body
  let elOptionExpense
  const elSelectExpense = document.querySelector('#expense')
  elSelectExpense.innerHTML = ''
  categoriesExpense.forEach(categoryExpense => {
    elOptionExpense = generateOptionTitle(categoryExpense)
    elSelectExpense.appendChild(elOptionExpense)
  })
}
