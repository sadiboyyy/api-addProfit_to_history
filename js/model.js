// const numbers = []
const categoriesProfit = []
const categoriesLose = []

const transactions = []



function sumTransactions() {
  let sum = 0
  let i = 0

  while (

    i < transactions.length

  ) {
    sum = sum + transactions[i]
    

    
    i++
  }
  return sum
  
}



// console.log(numbers[0])

function addTransactionIncome(transaction) {
  transactions.push(+transaction)
  console.log('добавлен доход')
  
}


function addTransactionOutcome(transaction) {
  
  transactions.push(+transaction)
   console.log('добавлен расход')
  
}

function addCategoriesProfit(categoryProfit) {
  categoriesProfit.push(categoryProfit)
}

function addCategoriesLose(categoryLose) {
  categoriesLose.push(categoryLose)
}
  

  
  

transactions 

// addTransactionIncome(5)

// addTransactionOutcome(4)
// addTransactionOutcome(5)
// sumTransactions()
// addTransactionOutcome(7)

let sum = sumTransactions()//После того как візову функцию сум у меня появиться сумма транзакций
sum

transactions
console.log(sum)
// addIncomeHistory(-4)



