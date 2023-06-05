alert("Welcome to the Budget App\nAdd balance to start.\nIf you want to reset the app, refresh the page");
let ExpensesList = [];
let incomeList = [];
function balanceAdd(){
   let currentBalance = +currentBugget.innerHTML.slice(4);
   if (currentBalance === 0){
   
     let balance = +prompt("Enter the amount you want to add to your balance,\nShould be less than 1 billion");
     console.log(balance);
     if( typeof(balance) === "number" && balance > 0 && balance <= 1000000000){
        currentBugget.innerHTML = `Rs. ${balance}`;
        incomeList.push(balance);
     }
     else{
        currentBugget.innerHTML = "Rs. 0";
        alert("Please enter a valid amount");
        location.reload();
     }}
   else if (currentBalance > 0){
      let dec = prompt("You already have a balance\nWant to add more? [y/n]");
      if (dec === "y"){
         let balance = +prompt("Enter the amount you want to add to your balance,\nShould be less than 999999999");
         if( typeof(balance) === "number" && balance > 0 && balance <= 999999999){
            currentBugget.innerHTML = `Rs. ${currentBalance+balance}`;
            incomeList.push(balance);
         }
         else{
            alert("Please enter a valid amount");
            
         }
      }
      else if (dec === "n"){
         alert("Okay");
      }
   }  
   overViewCal();
}


function addExpenses(){
    let sele = document.getElementById("selector1").value;
    let amt = +document.getElementById("Amount").value;
    let date = document.getElementById("date").value;
    let desc = document.getElementById("description").value;
    if (amt <= 0 || date === "" || desc === ""|| isNaN(amt)){
         alert("Please enter a valid amount");

    }
    else{
      let Expense = { sele, amt, date, desc };
      let val = calculate(amt);
      if (val === true){
         ExpensesList.push(Expense);
         ExpenseAndUpdate.innerHTML = "Add Expense";
         overViewCalDebit();
         showExpenses();
         Amount.value = " ";
         date.value = "dd/mm/yyyy";  
         description.value = " ";
         document.getElementById("selector1").value = "Select";
          }
      }
      
}
function showExpenses(){
      let Expenses = document.getElementById("listExpenses");
      Expenses.innerHTML = "";
      ExpensesList.forEach((Expense) => {
         Expenses.innerHTML += 
         `<li class="ExpensesView">
          ${ExpensesList.indexOf(Expense) + 1}.
          <ul class="listInList">
            <li class="listInlistdez">Catagory : <hr> ${Expense.sele}</li>
            <li class="listInlistdez">Amount : <hr>Rs. - ${Expense.amt}</li>
            <li class="listInlistdez">Date : <hr>${Expense.date}</li>
            <li class="listInlistdez">Description : <hr>${Expense.desc}</li>
          </ul> 
          <div class="viewExpButtons">
            <button class="balanceButton" onclick="deleteExpense(${ExpensesList.indexOf(Expense)})">Delete</button>
            <button class="balanceButton" onclick="updateExpense(${ExpensesList.indexOf(Expense)})">Update</button>
         </div>
          </li>`;
      });
   }
function deleteExpense(index){
   let currentBalance = +currentBugget.innerHTML.slice(4);
   currentBalance += ExpensesList[index].amt
   currentBugget.innerHTML = `Rs. ${currentBalance}`;
   ExpensesList.splice(index, 1);
   overViewCalDebit();
   showExpenses();
   
}   

function calculate(amounts){
    let currentBalance = +currentBugget.innerHTML.slice(4);
      currentBalance -= amounts;

    if (currentBalance < 0){
         alert("Insufficient funds");
         return false;
      }
      else {
         currentBugget.innerHTML = `Rs. ${currentBalance}`;
         return true;
      }
}
function overViewCal(){
   let sum = 0;
      for (let i = 0; i < incomeList.length; i++){
         sum += incomeList[i];
      }
      totalCredit.innerHTML = `Rs. ${sum}`;
}
function overViewCalDebit(){
   let sum = 0;
   for (let i = 0; i < ExpensesList.length; i++){
      sum += ExpensesList[i].amt;
   }
   totalDebit.innerHTML = `Rs. - ${sum}`;
   
}
function updateExpense(index){
   let sele = ExpensesList[index];
   ExpenseAndUpdate.innerHTML = "Update Expense";
   Amount.value = sele.amt;
   date.value = sele.date;
   description.value = sele.desc;
   document.getElementById("selector1").value = sele.sele;
   deleteExpense(index);
   overViewCalDebit();
   showExpenses();
   
}

function commaFormat(number) {
   const strNumber = String(number);
   const parts = [];
   let groupSize = 3;
 
   if (strNumber.length > 6 && strNumber.length <= 9) {
     groupSize = 2;
   } else if (strNumber.length > 9) {
     groupSize = 3;
   }
 
   for (let i = strNumber.length - groupSize, j = 0; i >= 0; i -= groupSize, j++) {
     const digits = strNumber.slice(Math.max(i - groupSize + 1, 0), i + 1);
     parts.unshift(digits);
   }
 
   return parts.join(",");
 }