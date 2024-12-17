//  function definition
//  function display(){
//      console.log("display function");
//  }
//  display();

//  function sum(a,b){ // parameters , here variables are passing as parameters
//     let res = a + b;
//    console.log(res);
 
//  }
//  sum(10,40) // invoke or call the function. values are passing , they are called as Arguments 


//  ES6 - Arrow function.
// this keyword is not supported in Arrow function 
//  let sampleArrow = ()=> console.log("Hi , GoodMorning");
//  sampleArrow();

//  Anonymous function.
//   let anon = function(){
//      console.log("Hi,My name is Aswathi")
//  }
//  anon()

//   Function statemets -  Normal function definition and it is support hoisting
//   Function Expression - variable  assigning to a function and does not support hoistion


//   There are different types of function. 
//   Function's without Argument.
//   Function's without Return value.
//   Function's with argument and without return value.
//   Functions's with Argument and with return value.
//   Function's without Argument and with return value.





// callback function
// function sum(a,b,callback){
//    let res = a + b;
//    callback(res);
// }
// function display(data){
//    console.log("Result is ",+data);
// }
// sum(20,40,display);

// function subtract(x,y,call){
//    let result = x - y;
//    call(result);
// }
// function displays(output){
//    console.log("Result is" + output);
   
// }
// subtract(50,20,displays)

// Functions that passes as argument as function is known as callback functions
// First class citizen = function's in javascript
// function div(a,b,callback){
//    let value = a / b;
//    callback(value);
// }
// function display(data){
//    console.log("Result is ",+ data);
// }
// div(30,10,display)

// API - web API's
// setTimeout
// setInterval
// localstorage


// setTimeout(function(){
//    console.log("setTimeout in to 3000 millisecond,that is to 3 second");
// },3000);


// setTimeout(function(){
//    console.log("setTimeout in to 5000 millisecond, that is to 5 secnd");
// })
setTimeout(function(){
    console.log(hello);
})


// Hoisting
// function definition and variable declaration ,  they will move top of their scope
// Scope - visibility of a function  and variables is known as scope


// console.log(x);
// var x = 10;  // gives an output of undefined

// var x = 10; // Global storage
// function getValue(){
//    var y = 20;
//    var res = x + y;
// }
// getValue()
// console.log(res); // gives an error that is ReferenceError : res is not defined 
 // Global storage
//  var x = 10;
// function getValue(){
   
//    var y = 20;
//    var res = x + y;
//    console.log(res);
// }
// getValue()



// js engine - it is a already defined program to run the javascript
// callstack - code execution
// In call stack there will be  a call execution context
// In call execution context there are 2 phases they are memory allocation phase and code execution phase

// data types

// let x = 10;
// console.log(typeof(x));

// let y = "Aswathi";
// console.log(typeof(y));

// let z = 10.9;
// console.log(typeof(z));


// let maxNum = Number.MAX_SAFE_INTEGER;
// console.log(maxNum);

// let minNUm = Number.MIN_SAFE_INTEGER;
// console.log(minNUm);


// So the datatypes includes // strings, number, bigInt.
// bigInt and number operation does not possible.
// The operation between BigInt and BigInt is possible.







//  Function recursion
// function findFactorial(n){
//     if(n == 0){
//         return 1
//     }
//     return n * findFactorial(n-1);

// }
// let res = findFactorial(4)
// console.log(res);


// Nested Function
// let x = 10;
// function sum(a,b){
//     let res = a + b;
//     function display(){
//         console.log(res);
//     }
//     display();
// }
// sum(10,400);

// var = undefined , global scope - global scope , hoistiog is possible
// let and const = temporal dead zone - No hoisting is possible


// console.log(x);
// var x = 10;
// console.log(y);
// let y = 20;


//  promise
// promise is an object taht eventally fulfill or reject on an asynchronous task with its resulting value.

// let age = 25;
// let promise = new Promise((reject,resolve)=>{
//     if(age > 20){
//         resolve("Task successfully completed! ")
//     }else{
//         reject("Task failed!")
//     }
// })
// let age =25;
// let promise = new Promise((reject,resolve)=>{
//     if(age>20){
//         resolve("Task successfully completed")
//     }else{
//         reject("task failed")
//     }
// })
// // consumer functions = then and catch
// promise.then((res) => console.log("then ---->" + res)).catch((err)=> console.log("catch ---->"+err))
// console.log(promise);
// promise APIs







 











 