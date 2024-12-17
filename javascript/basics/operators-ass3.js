// John wants to bu some fruits from the market. He wants to buy a ceratain number of each type of fruit . The prices of the fruits are apple 2 per kg, banana 1.5 kg and orange 3 per kg
// Ask john how many kilograms of each fruit he want to buy and calculate the total cost of his purchase.
let appleAmt = 2;
let bananaAmt = 1.5;
let orangeAmt = 3;

const apple = require("readline-sync");
let applekg = apple.questionInt("Enter the kilogram of apple to buy:");

const banana = require("readline-sync");
let bananakg = banana.questionInt("Enter the kilogram of banana to buy:");

const orange = require("readline-sync");
let orangekg = orange.questionInt("Enter the kilogram of orange to buy:");

let appleTotal;
appleTotal = appleAmt * applekg;
console.log(appleTotal);

let bananaTotal;
bananaTotal = bananaAmt * bananakg;
console.log(bananaTotal);

let orangeTotal;
orangeTotal = orangeAmt * orangekg;
console.log(orangeTotal);

let totalCost;
totalCost = appleTotal + bananaTotal + orangeTotal;
console.log(totalCost);


