const categoriesIncome = ['биржа']
const categoriesExpense = []
const transactions = [
  // {
  //   value: 42,
  //   category: 'подарок',
  //   type: 'income'
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
  categoriesIncome.push(category)
}
function addCategoryExpense(category) {
  categoriesExpense.push(category)
}
function removeCategoryIncome(category) {
  const idx = categoriesIncome.indexOf(category)
  if (idx > -1) categoriesIncome.splice(idx, 1)
}
function removeCategoryExpense(category) {
  const idx = categoriesExpense.indexOf(category)
  if (idx > -1) categoriesExpense.splice(idx, 1)
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
