
// const categoriesProfit = [];
// const categoriesLose = [];
const transactions = [
  // {
  //   value: 42,
  //   category: 'доход',
  // },
  // {
  //   value: 33,
  //   category: 'подарок',
  // },
];

function sumTransactions() {
  let sum = 0;
  let i = 0;
  while (i < transactions.length) {
    sum = sum + transactions[i].value;
    i++;
  }
  return sum;
}

// profit or income
function addTransactionIncome(transaction, categoryIncome) {
  const objectIncome = {
    value: +transaction,
    category: categoryIncome,
    type: "profit",
  };

  transactions.push(objectIncome);
  console.log("добавлен доход");
}

// lose or outcome or expense
function addTransactionOutcome(transaction, categoryOutcome) {
  const objectOutcome = {
    value: +transaction,
    category: categoryOutcome,
    type: "expense",
  };
  transactions.push(objectOutcome);
  console.log("добавлен расход");
}

// function addCategoriesIncome(categoryProfit) {
//   categoriesProfit.push(categoryProfit);
// }

// function addCategoriesOutcome(categoryLose) {
//   categoriesLose.push(categoryLose);
// }

transactions;

// addTransactionIncome(5, "подарок");
// transactions;


// console.log(sumTransactions());
// addTransactionOutcome(4, 'продукты питания')
// transactions

