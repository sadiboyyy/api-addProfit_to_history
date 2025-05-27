// const numbers = []
const categoriesProfit = []
const categoriesLose = []
const transactions = [
  // {
  //   value: 42,
  //   category: 'доход',
  // },
  // {
  //   value: 33,
  //   category: 'подарок',
  // },
]

function sumTransactions() {
  let sum = 0
  let i = 0
  while (i < transactions.length) {
    sum = sum + transactions[i].value
    i++
  }
  return sum
}

// profit or income
function addTransactionIncome(transaction, category) {
  const object = {
    value: +transaction,
    category: category,
    type: 'profit',
  }
  transactions.push(object)
  console.log('добавлен доход')
}

// lose or outcome or expense
function addTransactionOutcome(transaction) {
  transactions.push(+transaction)
  console.log('добавлен расход')
}

function addCategoriesProfit(categoryProfit) {
  categoriesProfit.push(categoryProfit)
}

function addCategoriesLose(categoryLose) {
  categoriesLose.push(categoryLose)
}

transactions

addTransactionIncome(5, 'зарплата')
transactions

console.log(sumTransactions())
