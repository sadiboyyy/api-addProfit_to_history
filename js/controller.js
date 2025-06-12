

function handleAddIncome(incomeValue) {
  if (incomeValue !== '') {
    addCategoryIncome(incomeValue)
    addTransactionIncome(incomeValue, 'зарплата' , 'подарок') // категорию передать с view
    renderDivBalance(sumTransactions())
    renderTransactions(transactions)
    renderContainerIncomeList(transactions)

  }
}

function handleAddExpense(expenseValue) {

  if (expenseValue !== "") {
    addCategoryExpense(expenseValue)
    addTransactionExpense(expenseValue, 'Бытовая техника','Продукты питания');
    renderDivBalance(sumTransactions());
    renderTransactions(transactions);
    renderContainerExpenseList(transactions)
   
  }
}
function handleAddInvesting(investingCategory) {
  if (investingCategory !== '') {
    addTransactionIncome(incomeValue, 'зарплата', 'подарок')
    addCategoryExpense(investingCategory , 'инвестиции')
    
  }
}
function handleAddClothes(clothesCategory) {
  if (clothesCategory !== '') {
    
    addTransactionExpense(expenseValue, 'Бытовая техника', 'Продукты питания')
    addCategoryExpense(clothesCategory, 'одежда')
 }
}
function handleRemoveCategoryIncome(incomeValue) {
  if (incomeValue !== '') {
    removeCategoryIncome(incomeValue, 'зарплата', 'подарок')
    renderContainerIncomeListСategories(categoriesIncome)
  }
}
function handleRemoveCategoryExpense(expenseValue) {
  if (expenseValue !== '') {
    removeCategoryExpense(expenseValue, 'Бытовая техника', 'продукты питания')
    renderContainerIncomeList(categoriesExpense)
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
