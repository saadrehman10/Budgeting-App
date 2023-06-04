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
      expencesList.push(expence);
      console.log(expence);
      console.log(expencesList);
   }
}
function showExpences(){
      let expences = document.getElementById("expences");
      expences.innerHTML = "";
      expencesList.forEach((expence) => {
         expences.innerHTML += `<tr>
         <td>${expence.sele}</td>
         <td>${expence.amt}</td>
         <td>${expence.date}</td>
         <td>${expence.desc}</td>
         </tr>`;
      });
   }
   