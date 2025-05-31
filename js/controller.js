function handleAddIncome(transaction) {
  if (transaction !== "") {
    addTransactionIncome(transaction);
    let sum = sumTransactions();
    renderDivBalance(sum);
    renderDivContainerIncomeList(transactions);
    renderTransactions(transactions);
    // addCategoriesProfit(categoriesProfit);
  }
}

function handleAddOutcome(transaction) {
  if (transaction !== "") {
    addTransactionOutcome(transaction);
    let sum = sumTransactions();
    renderDivBalance(sum);
    renderDivContainerOutcomeList(transactions);
    renderTransactions(transactions);
    // addCategoriesLose(categoriesLose);
  }
}

function handleAddTransactionIncome(transaction) {
  if (transaction !== "") {
    // addCategoriesIncome(transaction)
    addTransactionIncome(transactions);
  }
}

function handleAddTransactionOutcome(transaction) {
  if (transaction !== "") {
    // addCategoriesOutcome(transaction);
    addTransactionOutcome(transactions);
    // renderDivContainerOutcomeList(transactions)
  }
}
