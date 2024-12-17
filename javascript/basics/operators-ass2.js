// Raju borrowed some money from a friends 3 times. The amounts he borrowed should get from the user dynamically and store it in the  variables. 
// calculate the total amount john borrowed and store it in a avriable called "totalBorrowing".
//  Additionally, john repaid 3 times as a part of the borrowing. The amounts he repaid should get from the user dynamically
// Calculate the total amount john repaid and store it in a variable called "totalRepayment".
// Finally, calculate the remaining amount john needs to repay and store it in a variable called "remainingAmount"

const scanner1 = require("readline-sync");
let borrowing1 = scanner1.questionInt("Enter the borrowed money from first person:");

const scanner2 = require("readline-sync");
let borrowing2 = scanner2.questionInt("Enter the borrowed money  from the second person:");

const scanner3 = require("readline-sync");
let borrowing3 = scanner3.questionInt("Enter the borrowed money from third person:");

let totalBorrowing;
totalBorrowing = borrowing1 + borrowing2 + borrowing3;
console.log(totalBorrowing);

const repay1 = require("readline-sync");
let repayment1 = repay1.questionInt("Enter the repay amt one:");

const repay2 = require("readline-sync");
let repayment2 = repay2.questionInt("Enter the repay amt two:");

const repay3 = require("readline-sync");
let repayment3 = repay3.questionInt("Enter the repay amt three:");

let totalRepayment;
totalRepayment = repayment1 + repayment2 + repayment3;
console.log(totalRepayment); 

let remainingAmount;
remainingAmount = totalBorrowing - totalRepayment;
console.log(remainingAmount);


