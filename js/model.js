// const categoriesIncome = [];
// const categoriesExpense = [];
const transactions = [
  // {
  //   value: 42,
  //   category: 'подарок',
  //   type: 'income'
  // },
  // {
  //   value: 33,
  //   category: 'продукты питания',
  //   type: 'expense'
  // },
]
const categoriesIncome = []

const categoriesExpense = []

function sumTransactions() {
  let sum = 0
  let i = 0
  while (i < transactions.length) {
    sum = sum + transactions[i].value
    i++
  }
  return sum
}

function addTransactionIncome(incomeValue, category) {
  const transactionIncome = {
    value: +incomeValue,
    category: category,
    type: 'income',
  }
  transactions.push(transactionIncome)
  console.log('добавлен доход')
}

function addTransactionExpense(transaction, categoryExpense) {
  const objectExpense = {
    value: +transaction,
    category: categoryExpense,
    type: 'expense',
  }
  transactions.push(objectExpense)
  console.log('добавлен расход')
}

function addCategoryIncome(category) {
  categoriesIncome.push(category)
}
function addCategoryExpense(category) {
  categoriesExpense.push(category)
}
function removeCategoryIncome(category) {
  const idx = categoriesIncome.indexOf(category)
  idx
  if (idx > -1) categoriesIncome.splice(idx, 1)
}

categoriesIncome

addCategoryIncome('инвестиции')
categoriesIncome

addCategoryIncome('акции')
categoriesIncome

addCategoryIncome('зарплата')
categoriesIncome

addCategoryIncome('зарплата')
categoriesIncome

removeCategoryIncome('зарплата')
categoriesIncome

// function addCategoriesIncome(categoryProfit) {
//   categoriesProfit.push(categoryProfit);
// }

// function addCategoriesExpense(categoryLose) {
//   categoriesLose.push(categoryLose);
// }

// addTransactionIncome(5, 'подарок')

// addTransactionExpense(-4, 'продукты питания')

// transactions

// console.log(sumTransactions())
