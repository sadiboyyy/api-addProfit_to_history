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

function addTransaction(type, value, category) {
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
function removeCategoryIncome(value) {
  const indexIncome = categoriesIncome.includes(value)
   categoriesIncome.splice(indexIncome, 1)
   console.log(indexIncome)
}
function removeCategoryExpense() {
  const indexExpense = categoriesExpense.indexOf(0)
   categoriesExpense.splice(indexExpense,1)
}

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
