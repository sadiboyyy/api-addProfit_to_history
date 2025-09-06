const elButtonExpenseAdd = document.querySelector('#expenseadd')
elButtonExpenseAdd.onclick = onClickButtonTransactionIncomeAdd

const elButtonIncomeAdd = document.querySelector('#incomeadd')
elButtonIncomeAdd.onclick = onClickButtonTransactionExpenseAdd

const elDltCategoryIncome = document.querySelector('.input-dlt-income')
elDltCategoryIncome.onclick = onClickButtonCategoryIncomeRemove

const elDltCategoryExpense = document.querySelector('.input-dlt-expense')
// elDltCategoryExpense.onclick = onClickButtonCategoryExpenseRemove

const elBtnAddCategoryIncome = document.querySelector(
  '#btn-add-category-income'
)
elBtnAddCategoryIncome.onclick = onClickButtonCategoryIncomeAdd

const elBtnAddCategoryExpense = document.querySelector(
  '#btn-add-category-expense'
)
elBtnAddCategoryExpense.onclick = onClickButtonCategoryExpenseAdd
