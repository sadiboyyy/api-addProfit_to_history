function handleAddIncome(incomeValue) {
  if (incomeValue !== '') {
    addTransactionIncome(incomeValue, 'зарплата') // категорию передать с view
    renderDivBalance(sumTransactions())
    renderTransactions(transactions)
  }
}

function handleAddOutcome(transaction) {
  if (transaction !== '') {
    addTransactionOutcome(transaction)
    let sum = sumTransactions()
    renderDivBalance(sum)
    renderDivContainerOutcomeList(transactions)
    renderTransactions(transactions)
    // addCategoriesLose(categoriesLose);
  }
}

function handleAddTransactionOutcome(transaction) {
  if (transaction !== '') {
    // addCategoriesOutcome(transaction);
    addTransactionOutcome(transaction)
    // renderDivContainerOutcomeList(transactions)
  }
}
