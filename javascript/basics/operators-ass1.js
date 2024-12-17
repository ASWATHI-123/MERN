// Raju is buying items from a store . Calculate the total cost of the items raju  bought and store it in a variable "totalcost"
// Additionally, Raju has a coupon that gives him a disc of 10% on the total cost. calculate the discounted amt and store it in a variable  called "discountAmount"
// finally to calculate the final amount raju needs to pay after appying the discount and store it in Aa variable called "finalAmount" and print it


const scanner1 = require("readline-sync") ;
let penAmt = scanner1.questionInt("Enter the cost of the pen");

const scanner2 = require("readline-sync");
let bookAmt = scanner2.questionInt("Enter the cost of the book ");



const scanner3 = require("readline-sync");
let colourpenAmt = scanner3.questionInt("Enter the cost of colourpen:");

let totalcost;
totalcost = penAmt + bookAmt + colourpenAmt;

console.log(totalcost);
let discountAmount = 10;
let finalAmount = totalcost - discountAmount;
console.log(finalAmount);



