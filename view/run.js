const elButtonExpenseAdd = document.querySelector('#expenseadd')
const elButtonIncomeAdd = document.querySelector('#incomeadd')
const elButtonAddCategoryIncome = document.querySelector(
  '#btn-add-category-income'
)
const elButtonAddCategoryExpense = document.querySelector(
  '#btn-add-category-expense'
)
elButtonExpenseAdd.onclick = onClickButtonTransactionIncomeAdd
elButtonIncomeAdd.onclick = onClickButtonTransactionExpenseAdd
elButtonAddCategoryIncome.onclick = onClickButtonCategoryIncomeAdd
elButtonAddCategoryExpense.onclick = onClickButtonCategoryExpenseAdd
window.onload = onLoadApp

// const elDltCategoryIncome = document.querySelector('.input-dlt-income')
// elDltCategoryIncome.onclick = onClickButtonCategoryIncomeRemove
// const elDltCategoryExpense = document.querySelector('.input-dlt-expense')
// elDltCategoryExpense.onclick = onClickButtonCategoryExpenseRemove
