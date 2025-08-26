function handleAddIncome(incomeValue, category) {
  if (incomeValue !== '') {
    addCategoryIncome(category)
    addTransaction('income', incomeValue, category)
    // категорию передать с view
    renderH4SumTransactions(sumTransactions())
    renderSelectCategoriesIncome(categoriesIncome)
    renderListTransactions(transactions)
    renderInputAddCategoryIncome(category)
    renderListCategoriesIncome(transactions)
  }
  console.log('функция  handleadleincome вызвана')
}

function handleAddExpense(expenseValue, category) {
  if (expenseValue !== '') {
    addCategoryExpense(category)
    addTransaction('expense', expenseValue, category)
    renderH4SumTransactions(sumTransactions())
    renderSelectCategoriesExpense(categoriesExpense)
    renderListTransactions(transactions)
    renderInputAddCategoryExpense(category)
    renderListCategoriesExpense(transactions)
  }
  console.log('функция  handleaddexpense вызвана')
}
function handleAddOptionIncome(incomeValue) {
  if (incomeValue !== '') {
    addCategoryIncome(incomeValue)
    renderSelectCategoriesIncome(categoriesIncome)
  }
}
function handleAddOptionExpense(expenseValue) {
  if (expenseValue !== '') {
    addCategoryExpense(expenseValue)
    renderSelectCategoriesExpense(categoriesExpense)
  }
}

function handleRemoveCategoryIncome(categoryIncome) {
  if (categoryIncome !== '') {
    renderListCategoriesIncome(transactions)
  
}
}
function handleRemoveCategoryExpense(categoryExpense) {
  if (categoryExpense !== '') {
    renderListCategoriesExpense(transactions)
  }
}

function handleAddTransactionIncome(transaction) {
  if (transaction !== "") {
    addTransaction(transaction)
    let sum = sumTransactions()
    renderH4SumTransactions(sum)
    renderInputAddTransactionIncome(transactions)
    renderListTransactions(transactions)

  }
}

function handleAddTransactionOutcome(transaction) {

  if (transaction !== '') {
    addTransaction(transaction);
    let sum = sumTransactions()
    renderH4SumTransactions(sum)
    renderInputAddTransactionExpense(transactions)
    renderListTransactions(transactions)

  }
}
