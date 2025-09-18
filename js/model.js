const categoriesIncome = ['биржа!', 'инвестиции', 'недвижимость', 'акции']
const categoriesExpense = ['продукты питания', 'комуналка', 'проезд']
const transactions = [
  {
    value: 42,
    category: 'подарок',
    type: 'income',
  },
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
addTransaction('income', 45, 'недвижимость')
console.log(sumTransactions())
transactions

function addTransaction(type, value, category) {
  console.log(type,value,category)
  if (type === 'income') {
    if (!categoriesIncome.includes(category)) {
      return console.log('нет такой категории доходов!!')
    }
  }
  if (type === 'expense') {
    if (!categoriesExpense.includes(category)) {
      return console.log('нет такой категории расходов!!')
    }
  }
  const transaction = {
    value: +value,
    category: category,
    type: type,
  }

  transactions.push(transaction)
  console.log('добавлена транзакция')
}

function addCategoryIncome(category) {
  categoriesIncome.unshift(category)
}
function addCategoryExpense(category) {
  categoriesExpense.unshift(category)
}

function removeCategoryIncome(categoryIncome) {
  const indexIncome = categoriesIncome.indexOf(categoryIncome)
  if (indexIncome > -1) {
    categoriesIncome.splice(indexIncome,1)
    console.log(indexIncome)
    
  }
}

categoriesIncome

function removeCategoryExpense(categoryExpense) {
  const indexExpense = categoriesExpense.indexOf(categoryExpense)
  if (indexExpense > -1) {
    categoriesExpense.splice(indexExpense,1)
    console.log(indexExpense)
    
  }
}


categoriesExpense

// addCategoryIncome('инвестиции')
// addCategoryIncome('подарок')
// categoriesIncome
// addCategoryExpense('одежда')
// addCategoryExpense('продукты питания')
// categoriesExpense
// removeCategoryExpense('продукты питания')
// categoriesExpense

// addTransaction('income', 50000, 'подарок')
// addTransaction('expense', -4000, 'продукты питания')

transactions

console.log(sumTransactions())
