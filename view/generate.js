function generateItemTransactionIncome(transaction) {
  // body


  console.log(transaction.value)

  const elLi = document.createElement('li')
  if (transaction.value > 0) {
    elLi.setAttribute('class', 'income')
  }

  if (transaction.value === 0) {
    elLi.setAttribute('class', 'zero')
  }

  elLi.textContent = '$' + transaction.value



  return elLi
}
function generateItemTransactionExpense(transaction) {
  // body

  const elLi = document.createElement('li')

  if (transaction.value < 0) {
    elLi.setAttribute('class', 'expense')
  }
  if ((transaction.value = 0)) {
    elLi.setAttribute('class', 'zero')
  }

  elLi.textContent = '$' + transaction.value
  return elLi
}
function generateBadgeCategoryIncome(categoryIncome) {
  // body

  const elSpan = document.createElement('span')
  elSpan.setAttribute('class', 'badge-income')
  const elI = document.createElement('i')

  elI.textContent = categoryIncome
  const elInputBtnDltIncome = document.createElement('input')
  elInputBtnDltIncome.setAttribute('type', 'button')

  elInputBtnDltIncome.setAttribute('value', '❎')
  elInputBtnDltIncome.setAttribute('class', 'input-dlt-income')
  elInputBtnDltIncome.onclick = onClickButtonCategoryIncomeRemove

  elSpan.appendChild(elI)
  elSpan.appendChild(elInputBtnDltIncome)
  return elSpan
}
function generateBadgeCategoryExpense(categoryExpense) {
  // body

  const elSpan = document.createElement('span')
  elSpan.setAttribute('class', 'badge-expense')

  const elI = document.createElement('i')
  elI.textContent = categoryExpense

  const elInputBtnDltExpense = document.createElement('input')
  elInputBtnDltExpense.setAttribute('type', 'button')
  elInputBtnDltExpense.setAttribute('value', '❌')

  elInputBtnDltExpense.onclick = onClickButtonCategoryExpenseRemove

  elSpan.appendChild(elI)
  elSpan.appendChild(elInputBtnDltExpense)
  return elSpan
}
function generateOptionCategory(category) {
  const elOption = document.createElement('option')
  elOption.textContent = category
  elOption.value = category
  return elOption
}
function generateOptionTitle(category) {
  // body
  const elOptionTitle = document.createElement('option')
  elOptionTitle.textContent = category
  elOptionTitle.value = category
  return elOptionTitle
}
