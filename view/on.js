function onClickButtonTransactionIncomeAdd() {
  const elInputIncomeAdd = document.querySelector('#incomeamount')
  const number = +elInputIncomeAdd.value

  console.log(number)
  if (number > 0) {
    
    handleAddTransactionIncome(number)
 
    elInputIncomeAdd.value = ''
    elInputIncomeAdd.focus()
   
  }
}

function onClickButtonTransactionExpenseAdd() {
  const elInputExpenseAdd = document.querySelector('#expenseamount')
  const elInputSelectExpense = document.querySelector('#expense')
  const number = +elInputExpenseAdd.value
  console.log(number)
 
  if (number < 0) {
   
    handleAddTransactionExpense(number)
   
    
    elInputExpenseAdd.value = ''
    elInputExpenseAdd.focus()
  }
}


function onClickButtonCategoryIncomeAdd() {
  const elInputCategoryIncome = document.querySelector('#input-category-income')
  const textIncome = elInputCategoryIncome.value
  handleAddOptionIncome(textIncome)
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
  const elIncome = elSpan.querySelector('i')
  const textIncome = elIncome.textContent
  handleRemoveCategoryIncome(textIncome)
  console.log('кнопка заработка удалена')
}
function onClickButtonCategoryExpenseRemove(e) {
  const elButton = e.target

  const elSpan = elButton.closest('span')
  const elIExpense = elSpan.querySelector('i')
  const textExpense = elIExpense.textContent
  handleRemoveCategoryExpense(textExpense)
  console.log('кнопка затрат удалена')
}

function onLoadApp() {
  handleLoadApp()
}
