function onClickButtonTransactionIncomeAdd() {
  const elInputIncomeAdd = document.querySelector('#incomeamount')
  const number = +elInputIncomeAdd.value
  if (number > 0) {
    renderInputAddTransactionIncome(number)
    handleAddTransactionIncome(transactions)
    elInputIncomeAdd.value = ''
    elInputIncomeAdd.focus()
 
  }
}
function onClickButtonTransactionExpenseAdd() {
  const elInputExpenseAdd = document.querySelector('#expenseamount')
  const number = +elInputExpenseAdd.value
  console.log(number)

  if (number < 0) {
    renderInputAddTransactionExpense(number)
    handleAddTransactionExpense(transactions)
    elInputExpenseAdd.value = ''
    elInputExpenseAdd.focus()
  }
}

function onClickButtonCategoryIncomeAdd() {
  const elInputCategoryIncome = document.querySelector('#input-category-income')
  const textIncome = elInputCategoryIncome.value
  const firstIncome = elInputCategoryIncome.index(0)
  firstIncome.selected 
  
  console.log('dfs')
  if (textIncome !== '') {
    
    handleAddOptionIncome(textIncome)
   
    console.log(textIncome)
  }
}
function onClickButtonCategoryIncomeRemove(e) {
  const elButton = e.target

  const elSpan = elButton.closest('span')
  const elI = elSpan.querySelector('i')
  const text = elI.textContent
  if (elButton) {
    elSpan.classList.add('input-dlt-income-2')
  } else {
    elSpan.classList.remove('input-dlt-income')
  }
  handleRemoveCategoryIncome(text)
  console.log('кнопка удалена')
}
function onClickButtonCategoryExpenseAdd() {
  const elInputCategoryExpense = document.querySelector(
    '#input-category-expense'
  )
  const textExpense = elInputCategoryExpense.value

  console.log('dfs')
  if (textExpense !== '') {
    handleAddOptionExpense(textExpense)
    console.log(textExpense)
  }
}
function onClickButtonCategoryIncomeRemove(e) {
  const elButton = e.target

  const elSpan = elButton.closest('span')
  const elIExpense = elSpan.querySelector('i')
  const textExpense = elIExpense.textContent
  handleRemoveCategoryIncome(textExpense)
}
function onClickButtonCategoryExpenseRemove(e) {
  const elButton = e.target

  const elSpan = elButton.closest('span')
  const elIExpense = elSpan.querySelector('i')
  const textExpense = elIExpense.textContent
  handleRemoveCategoryExpense(textExpense)
  console.log('кнопка затрат удалена')
}
