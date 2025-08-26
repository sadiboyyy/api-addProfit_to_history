function onClickButtonTransactionIncomeAdd() {
  // body
  const elInputIncomeAdd = document.querySelector('#incomeamount')
  const number = elInputIncomeAdd.value
  if (number > 0) {
    handleAddIncome(number)
    elInputIncomeAdd.value = ''
    elInputIncomeAdd.focus()
    console.log('онклик вызван')
  }
}
function onClickButtonTransactionExpenseAdd() {
  // body
  const elInputExpenseAdd = document.querySelector('#expenseamount')
  const number = elInputExpenseAdd.value
  console.log(number)

  if (number < 0) {
    handleAddExpense(number)
    elInputExpenseAdd.value = ''
    elInputExpenseAdd.focus()
  }
}
function onClickButtonCategoryIncomeAdd() {
  // body
  const elInputCategoryIncome = document.querySelector('#input-category-income')
  const textIncome = elInputCategoryIncome.value
  console.log('dfs')
  if (textIncome !== '') {
    handleAddOptionIncome(textIncome)
    console.log(textIncome)
  }

}
function onClickButtonCategoryIncomeRemove(e) {
  // body
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
  // body
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
function onClickButtonCategoryIncomeRemove(e){
  const elButton = e.target

  const elSpan = elButton.closest('span')
  const elIExpense = elSpan.querySelector('i')
  const textExpense = elIExpense.textContent
  handleRemoveCategoryIncome(textExpense)
}
function onClickButtonCategoryExpenseRemove(e) {
  // body
  const elButton = e.target

  const elSpan = elButton.closest('span')
  const elIExpense = elSpan.querySelector('i')
  const textExpense = elIExpense.textContent
  handleRemoveCategoryExpense(textExpense)
  console.log('кнопка затрат удалена')
}

