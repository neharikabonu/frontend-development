function payment(amount, callback) {
  console.log(`${amount} has been initialized`);
  console.log("Payment is received");
  console.log();
  callback();
}

function zomatoOrderPlaced() {
  console.log("Zomato started preparing your food");
  console.log();
}

function blinkitOrderPlaced() {
  console.log("BlinkIt started packing your order");
  console.log();
}

payment(500, zomatoOrderPlaced);
payment(3000, blinkitOrderPlaced);