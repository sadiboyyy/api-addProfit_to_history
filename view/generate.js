function generateItemTransaction(transaction) {
  // body
  
  const elLi = document.createElement('li')
  if (transaction.value > 0) {
    elLi.setAttribute('class', 'income')
    
  }
  if (transaction.value < 0) {
    elLi.setAttribute('class','expense')
    
  }
  if (transaction.value = 0) {
    elLi.setAttribute('class','zero')
  }
    
  elLi.textContent = '$' + transaction.value
  return elLi
}
function generateBadgeCategoryIncome(categoryIncome) {
  // body
  const elDivCategoryIncome = document.createElement('div')
  elDivCategoryIncome.setAttribute('class', 'category-income')

  const elSpan = document.createElement('span')
  elSpan.setAttribute('class', 'badge')
  const elI = document.createElement('i')

  elI.textContent = categoryIncome+ '$'
  const elInputBtnDltIncome = document.createElement('input')
  elInputBtnDltIncome.setAttribute('type', 'button')

  elInputBtnDltIncome.setAttribute('value', '❎')
  // elInputBtnDltIncome = onClickButtonCategoryIncomeRemove
  elDivCategoryIncome.appendChild(elSpan)
  elSpan.appendChild(elI)
  elSpan.appendChild(elInputBtnDltIncome)
  return elDivCategoryIncome
}
function generateBadgeCategoryExpense(categoryExpense) {
  // body
  const elDivCategoryExpense = document.createElement('div')
  elDivCategoryExpense.setAttribute('class', 'category-expense')

  const elSpan = document.createElement('span')
  elSpan.setAttribute('class', 'badge')

  const elI = document.createElement('i')
  elI.textContent = categoryExpense + '$'

  const elInputBtnDltExpense = document.createElement('input')
  elInputBtnDltExpense.setAttribute('type', 'button')
  elInputBtnDltExpense.setAttribute('value', '❌')

  elInputBtnDltExpense.onclick = onClickButtonCategoryExpenseRemove

  elDivCategoryExpense.appendChild(elSpan)
  elSpan.appendChild(elI)
  elSpan.appendChild(elInputBtnDltExpense)
  return elDivCategoryExpense
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
