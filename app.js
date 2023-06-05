/* alert("Welcome to the Budget App\nAdd balance to start"); */
let expencesList = [];
let incomeList = [];
function balanceAdd(){
   let currentBalance = +currentBugget.innerHTML.slice(4);
   if (currentBalance === 0){
   
     let balance = +prompt("Enter the amount you want to add to your balance,\nShould be less than 999999999");
     console.log(balance);
     if( typeof(balance) === "number" && balance > 0 && balance <= 999999999){
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


function addExpences(){
    let sele = document.getElementById("selector1").value;
    let amt = +document.getElementById("Amount").value;
    let date = document.getElementById("date").value;
    let desc = document.getElementById("description").value;
    if (amt <= 0 || date === "" || desc === ""|| isNaN(amt)){
         alert("Please enter a valid amount");

    }
    else{
      let expence = { sele, amt, date, desc };
      let val = calculate(amt);
      if (val === true){
         expencesList.push(expence);
         overViewCalDebit();
         showExpences();
          }
      }
      
}
function showExpences(){
      let expences = document.getElementById("listExpences");
      expences.innerHTML = "";
      expencesList.forEach((expence) => {
         expences.innerHTML += 
         `<li class="expencesView">
          ${expencesList.indexOf(expence) + 1}.
          <ul class="listInList">
            <li class="listInlistdez">Catagory : <hr> ${expence.sele}</li>
            <li class="listInlistdez">Amount : <hr>Rs. - ${expence.amt}</li>
            <li class="listInlistdez">Date : <hr>${expence.date}</li>
            <li class="listInlistdez">Description : <hr>${expence.desc}</li>
          </ul> 
          <div class="viewExpButtons">
            <button class="balanceButton" onclick="deleteExpence(${expencesList.indexOf(expence)})">Delete</button>
            <button class="balanceButton" onclick="updateExpence(${expencesList.indexOf(expence)})">Update</button>
         </div>
          </li>`;
      });
   }
function deleteExpence(index){
   let currentBalance = +currentBugget.innerHTML.slice(4);
   currentBalance += expencesList[index].amt
   currentBugget.innerHTML = `Rs. ${currentBalance}`;
   expencesList.splice(index, 1);
   overViewCalDebit();
   showExpences();
   
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
   for (let i = 0; i < expencesList.length; i++){
      sum += expencesList[i].amt;
   }
   totalDebit.innerHTML = `Rs. -${sum}`;
   
}
function updateExpence(index){
   let sele = expencesList[index];
   
}