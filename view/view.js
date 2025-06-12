// const elSelectIncome = document.querySelector('#income')
// elSelectIncome.onchange = onChangeInput;


const elButtonOutcome = document.querySelector("#expenseadd");
elButtonOutcome.onclick = onClickExpense;
const elButtonIncome = document.querySelector("#incomeadd");
elButtonIncome.onclick = onClickIncome;

function renderDivBalance(balance) {
  const elIBalance = document.querySelector("#i-balance");
  elIBalance.textContent = "$" + balance;
}

function renderTransactions(transactions) {
  let elLi;
  const elDivTransactions = document.querySelector(".transaction-history > ul");
  elDivTransactions.innerHTML = "";
  transactions.forEach((t) => {
    if (t.type === "income") elLi = generateTransactionIncome(t);
    if (t.type === "expense") elLi = generateTransactionExpense(t);
    elDivTransactions.appendChild(elLi);
  });
}

function onClickIncome() {

  
  const elInputIncomeAdd = document.querySelector("#incomeamount");
  const number = elInputIncomeAdd.value;
  console.log(number);
  if (number > 0) handleAddIncome(number);
  elInputIncomeAdd.value = "";
  elInputIncomeAdd.focus();
}
function onClickExpense() {

  const elInputExpenseAdd = document.querySelector("#expenseamount");
  const number = elInputExpenseAdd.value;
  console.log(number);

  if (number < 0) handleAddExpense(number);
    elInputExpenseAdd.value = '';
    elInputExpenseAdd.focus();
   
  
}

function generateTransactionIncome(transaction) {
  
  const elLiIncome = document.createElement("li");
  elLiIncome.setAttribute("class", "income");
  elLiIncome.textContent = "$" + transaction.value;
  return elLiIncome;
}
function generateTransactionExpense(transaction) {
  const elLiExpense = document.createElement("li");
  elLiExpense.setAttribute("class", "expense");
  elLiExpense.textContent = "$" + transaction.value;
  return elLiExpense;
}

function generateIncomeList(transactionIncome) {
  const elOptionIncome = document.querySelector("#income");
  elOptionIncome.value = transactionIncome.category
  const textOptionIncome = transactionIncome.category
  
const elSpan = document.createElement('span')
elSpan.setAttribute('class', 'badge-income')
  const elI = document.createElement('i')
  
elI.textContent = textOptionIncome + transactionIncome.value + '$'
const elInputBtn = document.createElement('input')
  elInputBtn.setAttribute('type', 'button')
  elInputBtn.setAttribute('id', 'btn-delete-income')
  elInputBtn.setAttribute('value', 'x')
  elInputBtn.onclick = onClickDeleteCategoryIncome
  if (textOptionIncome !== 'Выберите категорию') {
    
    // elInputBtn.setAttribute('value," "')
    elSpan.appendChild(elI)
    elSpan.appendChild(elInputBtn) 
    console.log(elInputBtn)
    return elSpan
    
  }
  
  
}

function generateExpenseList(objectExpense) {
  const elOptionExpense = document.querySelector("#expense");
  elOptionExpense.value = objectExpense.category
  const textOptionExpense = objectExpense.category

  const elSpan = document.createElement("span");
  elSpan.setAttribute("class", "badge-expense");

  const elI = document.createElement("i");
  elI.textContent = textOptionExpense  + objectExpense.value +"$";
    const elInputBtn = document.createElement("input");
  elInputBtn.setAttribute("type", "button");
  elInputBtn.setAttribute('id','btn-delete-expense')
  elInputBtn.value = 'x'

  elInputBtn.onclick = onClickDeleteCategoryExpense
  if (textOptionExpense !== 'Выберите категорию') {
    
    elSpan.appendChild(elI);
  elSpan.appendChild(elInputBtn);
    return elSpan;
  }
    
  
}

function generateOptionInvesting(investingCategory) {
  const elOptionInvesting = document.createElement('option')
  elOptionInvesting.setAttribute('id','category-investing')
  elOptionInvesting.value = investingCategory
  return elOptionInvesting

}
function generateOptionClothes(clothesCategory) {
  const elOptionClothes = document.createElement('option')
  elOptionClothes.setAttribute('id','category-clothes')
  elOptionClothes.value = clothesCategory
  return elOptionClothes
}

function renderSelectInvesting(categoriesIncome) {
  let elOptionIncome
  const elSelectIncome = document.querySelector('#income')
  categoriesIncome.forEach((investingCategory) => {
    if (investingCategory = 'инвестиции') {
      elOptionIncome = generateOptionInvesting(investingCategory)
      elSelectIncome.appendChild(elOptionIncome)
    }
  })
}
function renderSelectClothes(categoriesExpense) {
  let elOptionExpense
  const elSelectExpense = document.querySelector('#expense')
  categoriesExpense.forEach((clothesCategory) => {
    if ((clothesCategory = 'одежда')) {
      elOptionExpense = generateOptionInvesting(investingCategory)
      elSelectExpense.appendChild(elOptionExpense)
    }
  })
}

function renderContainerIncomeList(transactions) {
 let elSpanIncome 
  const elDivIncomeList = document.querySelector('.container-income-list')
  elDivIncomeList.innerHTML = "";
  transactions.forEach((transactionIncome) => {
    if (transactionIncome.type === "income") {
      elSpanIncome = generateIncomeList(transactionIncome);
    
      elDivIncomeList.appendChild(elSpanIncome);
    } 
   
  });
}
function renderContainerExpenseList(transactions) {
  let elSpanExpense;
  const elDivExpenseList = document.querySelector(".container-expense-list");
  elDivExpenseList.innerHTML = "";
  transactions.forEach((objectExpense) => {
    if (objectExpense.type === "expense") {
      elSpanExpense = generateExpenseList(objectExpense);
      console.log(elSpanExpense);
      elDivExpenseList.appendChild(elSpanExpense); 
    } 
  });
}

function renderContainerIncomeListСategories(categoriesIncome) {
  let elSpanIncome
  const elDivIncomeList = document.querySelector('.container-income-list')
  elDivIncomeList.innerHTML = ''
  categoriesIncome.forEach(transactionIncome => {
    if (transactionIncome.type === 'income') {
      elSpanIncome = generateIncomeList(transactionIncome)

      elDivIncomeList.appendChild(elSpanIncome)
    }
  })
}


function onClickDeleteCategoryIncome(e) {
  const elButton = e.target
  // const elSpan = elButton.closest('span')
  // const elI = elSpan.querySelector('i')
  // const text = elI.textContent
  const elDivIncome = elButton.closest('.container-income-list')


  
  handleRemoveCategoryIncome(elDivIncome)
  console.log(elDivIncome)

  
}
function onClickDeleteCategoryExpense(e) {
  const elButton = e.target
  const elDivExpense = elButton.closest('.container-expense-list')

  handleRemoveCategoryExpense(elDivExpense)
  console.log(elDivExpense)
}
///Новый рендер только уже с другим масивом


// function renderDivContainerIncomeList(categories) {
//   const elDivContainerList = document.querySelector('.container-income-list')
//   elDivContainerList.innerHTML = ''
//   categories.forEach(category => {
//     const elSpanIncome = generateSpanIncome(category)
//     elDivContainerList.appendChild(elSpanIncome)
//   })
// }
// function renderDivContainerOutcomeList(categories) {
//   const elDivContainerOutcomeList = document.querySelector(
//     '.container-outcome-list'
//   )
//   elDivContainerOutcomeList.innerHTML = ''
//   categories.forEach(category => {
//     const elSpanOutcome = generateSpanOutcome(category)
//     elDivContainerOutcomeList.appendChild(elSpanOutcome)
//   })
// }

// function generateSpanIncome(transaction) {
//   const selectIncome = document.querySelector('#income')
//   const elSpanIncome = document.createElement('span')
//   elSpanIncome.setAttribute('class', 'badge')
//   const elI = document.createElement('i')
//   const textProfit = selectIncome.value
//   elI.textContent = textProfit + transaction + '$'
//   elSpanIncome.appendChild(elI)
//   return elSpanIncome
// }
// function generateSpanOutcome(transaction) {
//   const selectOutcome = document.querySelector('#expense')
//   const elSpanOutcome = document.createElement('span')
//   elSpanOutcome.setAttribute('class', 'badge')
//   const elI = document.createElement('i')
//   const textLose = selectOutcome.value
//   elI.textContent = textLose + transaction + '$'
//   elSpanOutcome.appendChild(elI)
//   return elSpanOutcome
// }

// function onChangeInput() {
//   const selectIncome = document.querySelector("#income");
//   const elIBadge = document.querySelector('.badge > i')
//   const category = selectIncome.value
//  elIBadge.textContent = category
//   }
