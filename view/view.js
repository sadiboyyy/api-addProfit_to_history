function generateIBalance(number) {
  const elIBalance = document.querySelector('#i-balance')
  elIBalance.textContent = '$' + number

  return elIBalance
}

function renderDivBalance(numbers) {

  numbers.forEach(number => {
    const elDivBalance = document.querySelector('.balance')
    const elINumberBalace = generateIBalance(number)
    elDivBalance.appendChild(elINumberBalace)
  })

}

function renderOutcomeLi(numbers) {
  const elLiOutcome = document.querySelector('.outcome')
  elLiOutcome.textContent = numbers
}

function renderIncomeLi(numbers) {
  const elLiIncome = document.querySelector('.income')
  elLiIncome.textContent = numbers
}

function addIncomeHistory(history) {
  if (history === '') return
  if (history > 0) {
    renderIncomeLi(history)
    console.log('ghb')
  }
  if (history < 0) {
    renderOutcomeLi(history)
    console.log('df')

  }
}