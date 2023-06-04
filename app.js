function balanceAdd(){
     let balance = +prompt("Enter the amount you want to add to your balance,\nShould be less than 999999999");
     console.log(balance);
     if( typeof(balance) === "number" && balance > 0 && balance <= 999999999){
        currentBugget.innerHTML = `Rs. ${balance}`;
     }
     else{
        currentBugget.innerHTML = "Rs. 0";
        alert("Please enter a valid amount");
        location.reload();
     }
}
let expencesList = [];

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
            <li class="listInlistdez">Amount : <hr>Rs. -${expence.amt}</li>
            <li class="listInlistdez">Date : <hr>${expence.date}</li>
            <li class="listInlistdez">Description : <hr>${expence.desc}</li>
          <ul> 
          <button class="deleteBtn" onclick="deleteExpence(${expencesList.indexOf(expence)})">Delete</button>
          </li>`;
      });
   }
function deleteExpence(index){
   let currentBalance = +currentBugget.innerHTML.slice(4);
   currentBalance += expencesList[index].amt
   currentBugget.innerHTML = `Rs. ${currentBalance}`;
   expencesList.splice(index, 1);
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