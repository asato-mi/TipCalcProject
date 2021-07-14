console.log("Script is loaded")

// challenge 1: gratuity - slide 9

/*let billAmount = Math.random() * 100;
function gratuity(bill) {
    return billAmount * 0.2;
}
function totalWithGrat(billAmount) {
    return billAmount + gratuity();
}
console.log("Bill amount: " + billAmount);
console.log("Your total with gratuity is: " + totalWithGrat(billAmount)); */

let billAmount = 100.58;

function gratuity(){
    return billAmount * 0.2;  
  }

function totalWithGrat(amount){
  return gratuity() + amount;
}

console.log(
  `your total, including gratutity is:
	$${totalWithGrat(billAmount).toFixed(2)}`
);

document.querySelector('#tip-form').onchange = function(){

    var bill = Number(document.getElementById('billTotal').value);
    var tip = document.getElementById('tipInput').value;
    document.getElementById('tipOutput').innerHTML = `${tip}%`;
    var tipValue = bill * (tip/100)
    var finalBill = bill + tipValue
  console.log(finalBill)
  var tipAmount = document.querySelector('#tipAmount')
  var totalBillWithTip = document.querySelector('#totalBillWithTip')
  
  tipAmount.value = tipValue.toFixed(2);
   totalBillWithTip.value =finalBill.toFixed(2);
  
   //Show Results
  
    document.getElementById('results').style.display='block'
  }

