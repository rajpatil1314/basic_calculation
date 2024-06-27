var basePrice = 100;
var discount = "10%";
var discount1 = parseInt(discount) / 100;
var final = basePrice - (basePrice * discount1);
console.log(final);