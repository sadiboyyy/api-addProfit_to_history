function handleAddIncome(incomeValue,category) {
  if (incomeValue !== '') {
    addCategoryIncome(incomeValue)
    addTransaction('income', incomeValue, category) // категорию передать с view
    renderDivBalance(sumTransactions())
    renderTransactions(transactions)
    renderContainerIncomeList(transactions)
  }
  console.log('функция  handleadleincome вызвана')
}

function handleAddExpense(expenseValue,category) {
  if (expenseValue !== '') {
    addCategoryExpense(category)
    addTransaction('expense', expenseValue,category)
    renderDivBalance(sumTransactions())
    renderTransactions(transactions)
    renderContainerExpenseList(transactions)
    
  }
  console.log('функция  handleaddexpense вызвана')
}
function handleAddOptionIncome(incomeValue) {
  if (incomeValue !== '') {
    addCategoryIncome(incomeValue)
    renderSelectIncome(categoriesIncome)
  }
}
function handleAddOptionExpense(expenseValue) {
  if (expenseValue !== '') {
    addCategoryExpense(expenseValue)
    renderSelectExpense(categoriesExpense)
  }
}




function handleRemoveCategoryIncome(categoryIncome) {
  removeCategoryIncome(categoryIncome)
  renderContainerIncomeListСategories(categoriesIncome)
}
function handleRemoveCategoryExpense(categoryExpense) {
  removeCategoryExpense(categoryExpense)
  renderContainerIncomeList(categoriesExpense)
}

// function handleAddTransactionIncome(transaction) {
//   if (transaction !== "") {
//     addTransactionOutcome(transaction)
//     let sum = sumTransactions()
//     renderDivBalance(sum)
//     renderDivContainerOutcomeList(transactions)
//     renderTransactions(transactions)

//   }
// }

// function handleAddTransactionOutcome(transaction) {

//   if (transaction !== '') {
//     addTransactionOutcome(transaction);

//   }
// }
