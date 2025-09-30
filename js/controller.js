function handleAddIncome(incomeValue, category) {
  if (incomeValue !== '') {
    addCategoryIncome(category)
    addTransaction('income', incomeValue, category)
    // категорию передать с view
    renderH4SumTransactions(sumTransactions())
    renderSelectCategoriesIncome(categoriesIncome)
    renderListTransactions(transactions)
    renderInputAddCategoryIncome(categoriesIncome)
    renderListCategoriesIncome(categoriesIncome)
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
    renderInputAddCategoryExpense(categoriesExpense)
    renderListCategoriesExpense(categoriesExpense)
  }
  console.log('функция  handleaddexpense вызвана')
}
function handleAddOptionIncome(incomeValue) {
  if (incomeValue !== '') {
    addCategoryIncome(incomeValue)
    renderSelectCategoriesIncome(categoriesIncome)
    renderListCategoriesIncome(categoriesIncome)
  }
}
function handleAddOptionExpense(expenseValue) {
  if (expenseValue !== '') {
    addCategoryExpense(expenseValue)
    renderSelectCategoriesExpense(categoriesExpense)
    renderListCategoriesExpense(categoriesExpense)
  }
  console.log(expenseValue)
}

function handleRemoveCategoryIncome(categoryIncome) {
  if (categoryIncome !== '') {
    removeCategoryIncome(categoryIncome)
    renderListCategoriesIncome(categoriesIncome)
  }
}
function handleRemoveCategoryExpense(categoryExpense) {
  if (categoryExpense !== '') {
    removeCategoryExpense(categoryExpense)
    renderListCategoriesExpense(categoriesExpense)
  }
}

function handleAddTransactionIncome(incomeValue,category) {
  if (incomeValue !== '') {

    addTransaction('', incomeValue,category)
    renderH4SumTransactions(sumTransactions())
    renderInputAddTransactionIncome()
    renderListTransactions(transactions)
  }
}

function handleAddTransactionExpense(expenseValue,category) {
  if (expenseValue!== '') {
    addTransaction('', expenseValue,category)
    let sum = sumTransactions()
    renderH4SumTransactions(sum)
    renderInputAddTransactionExpense()
    renderListTransactions(transactions)
  }
  
}


function handleLoadApp() {
  renderListCategoriesIncome(categoriesIncome)
  renderListCategoriesExpense(categoriesExpense)
  renderSelectCategoriesIncome(categoriesIncome)
  renderSelectCategoriesExpense(categoriesExpense)
  renderListTransactions(transactions)
  renderH4SumTransactions(sumTransactions())
}
