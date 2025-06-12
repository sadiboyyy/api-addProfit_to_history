function handleAddIncome(incomeValue) {
  if (incomeValue !== '') {
    addCategoryIncome(incomeValue)
    addTransaction(incomeValue, 'зарплата', 'подарок') // категорию передать с view
    renderDivBalance(sumTransactions())
    renderTransactions(transactions)
    renderListCategoriesIncome(transactions)
  }
}

function handleAddExpense(expenseValue) {
  if (expenseValue !== '') {
    addCategoryExpense(expenseValue)
    addTransaction(expenseValue, 'Бытовая техника', 'Продукты питания')
    renderDivBalance(sumTransactions())
    renderTransactions(transactions)
    renderContainerExpenseList(transactions)
  }
}
function handleAddInvesting(investingCategory) {
  if (investingCategory !== '') {
    addTransaction(incomeValue, 'зарплата', 'подарок')
    addCategoryExpense(investingCategory, 'инвестиции')
  }
}
function handleAddClothes(clothesCategory) {
  if (clothesCategory !== '') {
    addTransaction(expenseValue, 'Бытовая техника', 'Продукты питания')
    addCategoryExpense(clothesCategory, 'одежда')
  }
}

function handleRemoveCategoryIncome(category) {
  removeCategoryIncome(category, 'зарплата', 'подарок')
  renderListСategoriesIncome(categoriesIncome)
}
function handleRemoveCategoryExpense(category) {
  removeCategoryExpense(category, 'Бытовая техника', 'продукты питания')
  renderListCategoriesIncome(categoriesExpense)
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
