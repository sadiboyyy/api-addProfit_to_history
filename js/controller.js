

function handleAddIncome(incomeValue) {
  if (incomeValue !== '') {
    addTransactionIncome(incomeValue, 'зарплата' , 'подарок') // категорию передать с view
    renderDivBalance(sumTransactions())
    renderTransactions(transactions)
    renderContainerIncomeList(transactions)

  }
}

function handleAddExpense(expenseValue) {

  if (expenseValue !== "") {
    addTransactionExpense(expenseValue, 'Бытовая техника','Продукты питания');
    renderDivBalance(sumTransactions());
    renderTransactions(transactions);
    renderContainerExpenseList(transactions)
   
  }
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
