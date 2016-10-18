//Tip Amount Challenge in JS

//Prompt For User to Input the Amount of Bill (w/o Gratuity)
var bill_amount = prompt('What is your bill amount?');
console.log('Bill: $' + bill_amount);

//Create tip_amount Method
function tip_amount(bill_amount){
  var tip = Number(bill_amount) * 0.20;
  return tip;
}

//added console and alerts to be able to see info displayed in pop window as well as in the console
console.log('Tip: $' + tip_amount(bill_amount));

//Create total_with_grat Method
function total_with_grat(bill_amount){
  var total_amount = tip_amount(bill_amount) + Number(bill_amount);
  return total_amount;
}
console.log('Total with Gratuity: $' + total_with_grat(bill_amount));
alert('Total with Gratuity: $' + total_with_grat(bill_amount));
