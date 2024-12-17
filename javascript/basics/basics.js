// // Javascript is a scripting langyage.
// // Synchronous single threaded loosely typed scripting language.
// // Synchronus - Line by line execution
// // single threaded -  No other stacks
// // Open source language
// // VAR - functional scope ,Hoisting , No block-scope , Re-declaration , Re-assigning
// // LET - Block scope , No hoisting , No Re-declaration , Re-assignment
// // CONST - Block scope , No hoisting , No Re-assignment 

// var x;
// x = 10;
// x = 40;
// console.log(x)

// // var x;
// // x = 10;
// // x= 40;
// // console.log(x)

// // var = reassignment is possible, re declaration is possible 


// let y;
// y = 20;
// console.log(y)

// // In let = NO redeclaration , reassignment




// // let y ;
// // y  = 20;
// // console.log(y)


// const z = 30;
// console.log(z)
// // In const = No redeclaration and no re assignment
// // let and const have block scope but does not have block scope 






// // const z =30;
// // console.log(z)

// // const a =70;
// // console.log(a)

// // const b = 90;
// // console.log(b)


// // let p;
// // p = 11;
// // console.log(p)

// // THE MAIN DIFFERENCE BETWEEN VAR , LET AND CONST 


// // VAR - POSSIBLE = REDECLARATION , RE ASSIGNMENT , HOISTING
// //       NOT POSSIBLE = NO SCOPE


// // LET - POSSIBLE = SCOPE , REASSIGNMENT 
// //       NOT POSSIBLE = REDECLARATION , NO HOISTING 


// // CONST - POSSIBLE = SCOPE
// //         NOT POSSIBLE = NO REDECLARATION , NO REASSIGNMENT ,NO HOISTING 


// // WHAT IS GOOD = LET AND CONST HAVE BLOCK SCOPE
// // LET AND CONST CANNOT BE REDECLARED 
// // LET AND CONST DOES NOT BIND TO THIS 
// //LET AND CONST ARE NOT HOISTED 



// // var s;
// // s = "Aswathi"
// // console.log(s)

// // let h;
// // h = "Hello"
// // console.log(h)

// // var j;
// // var u;
// // j = 20;
// // u = 10
// // var t = j + u
// // console.log(t)


// // var o;
// // var l;
// // o = 20;
// // l = 10;
// // var t = o - l
// // console.log(t)

// // var j;
// // var u;
// // j = 80;
// // u = 10;
// // var t = j / u
// // console.log(t)


// // var j;
// // var u;
// // j = 20
// // u = 10
// // var t = j * u
// // console.log(t)

// // var j;
// // var u;
// // j = 20
// // u = 10
// // var t = j ** u
// // console.log(t)

// // let c = 10;
// // let m = c++;
// // console.log(c)


// // let sub;
// // // let decrement;
// // // sub = 9;
// // // decrement = sub--;
// // // console.log(sub)


// // // // comparison operators
// // // let age = 30;
// // // console.log(age >= 20)

// // // logical operators
// // // let username = 'tom';
// // // let isActive = true;
// // // console.log(username === 'tom' && isActive === true);

// // // let username = 'jerry';
// // // let isActive = true;
// // // console.log(username === 'tom' && isActive === true);





// // write a program to take two numbers as input and print their sum
// let num1 = 5;
// let num2  = 7;
// let sum = num1 + num2 ;
// console.log("The sum is :"+sum);

//To check if a number is even or odd

// let number = 8;
// if(number % 2 === 0){
//     console.log(number + "is even.");
// }else{
//     console.log(number + "is odd.")
// }

// let number1 = 9;
// if(number1 % 2 ===0){
//     console.log(number1 + "is even")
// }else{
//     console.log(number1 + "is odd")
// }

// let number3 = 10;
// if(number3 % 2 === 0){
//     console.log(number3 + "is even")
// }else{
//     console.log(number3 + "is odd")
// }


// let number = 11;
// if(number % 2  === 0){
//     console.log(number + "is even")
// }else{
//     console.log(number + "is odd")
// }

// let number = 12;
// if(number % 2 === 0){
//     console.log(number + "is even")
// }else{
//     console.log(number + "is even")
// }

// let number = 17;
// if(number % 2 === 0){
//     console.log(number + "is even")
// }else{
// //     console.log(number + "is odd")
// }

// let number2 =19;
// if(number2 % 2 === 0){
//     console.log(number + "is even")
// }else{
//     console.log(number + "is even")
// }








// To find the largest number


// let a = 10;
// let b = 20;
// let c = 15;

// let largest = a;
// if(b>largest){
//     largest = b;

// }
// if(c>largest){
//     largest = c;
// }

// console.log("The largest number is " + largest)



// Reverse a string
// write a function to reverse a string 
// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("hello"))

// function  stringreverse(str){
//     return str.split('').reverse().join('')
// }
// console.log(stringreverse("Aswathi"));

// function stringreverse(str){
//     return str.split('').reverse().join('')
// }
// console.log(stringreverse("helleoo"));

// function stringreverse(str){
//     return str.split('').reverse().join("")
// }
// console.log(stringreverse("hello"));

// function stringreverse(str){
//     return str.split('').
// }







// prit numbers from 1 to  10
// for(let i = 1; i<=10;i++){
//     console.log(i)
// }
// for(let i = 2 ; i<=20;i++){
//     console.log(i)
// }

// for(let i = 4 ; i<=30;i++){
//     console.log(i)
// }

// for(let i = 5 ; i<=40;i++){
//     console.log(i)
// }

// for(let i = 6 ; i <= 50;i++){
//     console.log(i)
// }
// for(let i =7 ; i<60;i++){
//     console.log(i)
// }



// check for a palindrome 

function isPalindrome(str){
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));


//To find prime numbers 
function isPrime(num){
    if(num<2) return false;
    for(let i = 2; i <=math.sqrt(num); i++){
        if(num % i === 0) return false
    }
    return true;
}
console.log(isPrime(7))
console.log(isPrime(10))