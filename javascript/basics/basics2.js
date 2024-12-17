// var x;
// x = 10;
// x =20;
// x = 50
// console.log(x);

// var x = 10;
// console.log(x);
// let x ;
// x = 20;
// x = 30;
// x = 50;
// console.log(x);

// const x = 10;

// console.log(x);

// function display(){
//     console.log("hello");
// }
// display()
// function hello(){
//     console.log("My Name is Aswathi")
// }
// hello();

// Repetition can be avoided by using function
// DRY - Don't repeat yourself
// Parameters = Variables is passed as parameters
// Arguments = values is passed as arguments

// function sum(a,b){
//     let res = a + b;
//     console.log(res);
// }
// sum(10,20);

// function sub(a,b){
//     let res = a - b;
//     console.log(res);
// }
// sub(20,30);



// function mul(a , b){
//     let res = a * b;
//     console.log(res);
// }
// mul(10,20);




// function div(a, b){
//     let res = a / b;
//     console.log(res);
// }
// div(10,2);


// let sampleArrow1 = ()=> console.log("hello");
// sampleArrow1();

// let sampleArrow2 = ()=> console.log("My name is Aswathi");
// sampleArrow2();


// let sampleArrow3 = ()=> console.log("My age is 22");
// sampleArrow3();

// let sampleArrow4 = ()=> console.log("My Aim is to get a cooperate job");
// sampleArrow1();

// let sampleArrow5 = ()=> console.log("My sisters name is Adheena");
// sampleArrow5();



// let sampleArrow6 = ()=> console.log("My father's name is shajith");
// sampleArrow6();


// let sampleArrow7 = ()=> console.log("Hi");
// sampleArrow7();


// const scanner1 = require("readline-sync");
// let penAmt = scanner1.questionInt("Enter the cost of pen:");

// const scanner2 = require("readline-sync");
// let bookAmt = scanner2.questionInt("Enter the cost of book:");

// const scanner3 = require("readline-sync");
// let colourpenAmt = scanner3.questionInt("Enter the cost of colourpen:")

// let totalCost;
// totalCost = penAmt + bookAmt + colourpenAmt;
// console.log(totalCost);

// let discountAmount = 10;
// let finalAmount = totalCost - discountAmount;
// console.log(finalAmount);


// const scanner1 = require("readline-sync");
// let borrowing1 = scanner1.questionInt("Enter the borrowed money from first person:");

// const scanner2 = require("readline-sync");
// let borrowing2 = scanner2.questionInt("Enter the borrowed money from second person:");

// const scanner3 = require("readline-sync");
// let borrowing3 = scanner3.questionInt("Enter the borrowed money from third person:");

// let totalBorrowing;
// totalBorrowing = borrowing1 + borrowing2 + borrowing3;
// console.log(totalBorrowing);





// const scanner1 = require("readline-sync");
// let mul = scanner1.questionInt("Enter the multiplier:")
// const scanner2 =require("readline-sync");
// let limit = scanner2.questionInt("Enter the limit:")
// for(let i =1; i<=limit;i++){
//     console.log(i + "*" +mul +"=" +(i*mul));
// }


// const scanner = require("readline-sync");
// let limit = scanner.questionFloat("Enter the limit:");
// let sum = 0;
// for(let i = 1;i<= limit;i= i+2){
//     sum = sum + i;
// }
// console.log(sum);


// let subject1 = 85;
// let subject2 = 90;
// let subject3 = 75;
// if (subject1 > subject2){
//     console.log("Subject 1 mark is greater than subject 2 mark");
// }else{
//     console.log("subject 1 mark is not greater than subject 2 mark");
// }



// let anon = function(){
//     console.log("Hi, My name is Aswathi");
// }
// anon();






// function greet(name) {
//     console.log('Hello, ' + name);
// }

// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }

// processUserInput(greet);
















// function is a block of resusable code designed to perform a specific task . it is executed when it is invoked.. Functions can accept inputs and return outputs 
// Type of function 
// Named function 
function greet(){
    console.log("Hello world")
}
greet();
function hello(){
    console.log("Hii")
}
hello();



// Anonymous function 
const hi = function(){
    console.log("Hello world")
}
hi();

// Arrow function 
const greets = ()=>{
    console.log("hello world")
}
greets();


// Immeditely invoked function expression
// functions that are executed immediately after they are defined 

(function(){
    console.log("This is an Immediately invoked function")
})



// CONSTRUCTOR FUNCTION = USED TO CREATE OBJECTS 
function person(name , age ){
    this.name = name ;
    this.age = age;
}
const person1 = new person1("Aswathi",22);
console.log(person1);



