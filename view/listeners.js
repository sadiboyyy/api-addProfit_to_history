const elButtonIncome = document.querySelector('#incomeadd')
elButtonIncome.onclick = onClickIncome

const elButtonOutcome = document.querySelector('#expenseadd')
elButtonOutcome.onclick = onClickIncome

function onClickIncome() {
  if (number !== '') {
    addIncomeHistory(number)
    
  }
}