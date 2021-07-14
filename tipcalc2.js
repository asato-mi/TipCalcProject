function calcTip(){

  // grab the input values
  let tipAmount= document.getElementById("tipForm").value;
  let billAmount = document.getElementById("billInput").value;
  let billCard = document.getElementById("bill-card");

  //turn strings into numbers
  let tipAmountNumber = parseFloat(tipAmount);
  let billAmountNumber = parseFloat(billAmount);
  
  //grab elements
  let bill = document.getElementById('bill-p');
  let tip = document.getElementById('tip-p');
  let total = document.getElementById('total-p');

  // calculations
  let totalAmount = (tipAmountNumber * billAmountNumber);
  let totalBill = totalAmount + billAmountNumber;

  //append content
  tip.innerHTML = "$" + (totalAmount).toFixed(2);
  bill.innerHTML =  "$" + billAmountNumber.toFixed(2);
  total.innerHTML = "$" + totalBill.toFixed(2);
  
  // show the bill info 
  billCard.style.display = "block";
  
}