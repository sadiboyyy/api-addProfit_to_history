function handleAddIncome(incomeValue, category) {
  if (incomeValue !== '') {
    addCategoryIncome(category)
    addTransaction('income', incomeValue, category) // категорию передать с view
    renderDivBalance(sumTransactions())
    renderTransactionsHistory(transactions)
    renderIncomeCategoriesList(transactions)
  }
  console.log('функция  handleadleincome вызвана')
}

function handleAddExpense(expenseValue, category) {
  if (expenseValue !== '') {
    addCategoryExpense(category)
    addTransaction('expense', expenseValue, category)
    renderDivBalance(sumTransactions())
    renderTransactionsHistory(transactions)
    renderExpenseCategoriesList(transactions)
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
  renderIncomeCategoriesList(categoriesIncome)
}
function handleRemoveCategoryExpense(categoryExpense) {
  removeCategoryExpense(categoryExpense)
  renderExpenseCategoriesList(categoriesExpense)
}

function handleAddTransactionIncome(transaction) {
  if (transaction !== "") {
    addTransaction(transaction)
    let sum = sumTransactions()
    renderDivBalance(sum)
    renderDivContainerOutcomeList(transactions)
    renderTransactions(transactions)

  }
}

function handleAddTransactionOutcome(transaction) {

  if (transaction !== '') {
    addTransaction(transaction);

  }
}
