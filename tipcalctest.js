console.log("script is loaded??");


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

// The difference between declaring a function this way (Function Assignment) and the other syntax we’ve been using (Function Declaration) is that the latter (Function Declaration) hoists both the declaration and definition. For example: