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
      showExpences();
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
            <li class="listInlistdez">Catagory: ${expence.sele}</li>
            <li class="listInlistdez">Amount: Rs. ${expence.amt}</li>
            <li class="listInlistdez">Date: ${expence.date}</li>
            <li class="listInlistdez">Description: ${expence.desc}</li>
          <ul> 
          </li>`;
      });
   }
function calculate(){
    
}