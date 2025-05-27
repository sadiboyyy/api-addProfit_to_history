// function handleAddTransaction(transaction) {
//   if (transaction !== '') {

//     addTransactionOutcome(transaction)
//     addTransactionIncome(transaction)
//       renderDivBalance(transactions)

//   }
// }


function handleAddIncome(transaction) {
  if (transaction !== "") {
    addTransactionIncome(transaction);
    let sum = sumTransactions();
    renderDivBalance(sum);
    renderDivContainerIncomeList(transactions);
    renderTransactions(transactions);
    addCategoriesProfit(categoriesProfit);

  }
}

function handleAddOutcome(transaction) {
  if (transaction !== "") {
    addTransactionOutcome(transaction);
    let sum = sumTransactions()
    renderDivBalance(sum);
    renderDivContainerOutcomeList(transactions);
    renderTransactions(transactions);
    addCategoriesLose(categoriesLose);
    


  }
}

