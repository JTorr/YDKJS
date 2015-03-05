const TAX_RATE = 0.08;
const ACCESSORY_PRICE = 9.99;
var phonePrice = 49;
var bankBalance;
var totalPrice = phonePrice * ( 1 + TAX_RATE );

for (bankBalance = 999; bankBalance >= 0; bankBalance = bankBalance - totalPrice) {
  console.log( "Current bank balance is " + "$" + bankBalance.toFixed( 2 ) );
  if (bankBalance >= ACCESSORY_PRICE) {
    bankBalance = bankBalance - ACCESSORY_PRICE;
    console.log("Accessory purchased. New balance is " + "$" + bankBalance.toFixed(2) );
  }
  else {
    console.log("Accessory not purchased. Balance is " + "$" + bankBalance.toFixed(2));
}
}

