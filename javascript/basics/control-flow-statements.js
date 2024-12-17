// let age = 25
// if(age < 20){
//     console.log("Access granted!");
// }else{
//     console.log("Access denied!");
// }

// for loop:

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }


// for(let i = 1; i < 5; i++){
//     for(let j = 1; j < 5; j++){
//         console.log("i->>>" + i + "j->>>" + j);
//     }
// }

// while loop
// let i =1;
// while(i<5){
//     console.log(i);
//     i++
// }

// do while loop
// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i < 5);



// // pattern printing
// for (let i = 1; i <= 5; i++) { 
//     let str = '';
//    for (let j = 1; j <= i; j++){
//         str += i +"";
//    }
//    console.log(str)
   
    
// }

//  multiplying
const scanner = require("readline-sync");
const scanner1 = require("readline-sync");
 let mul = scanner.questionInt("Enter the multiplier:");
 let limit = scanner1.questionInt("Enter the limit:")
 for(let i = 1; i <= limit; i++) {
    console.log(i+"*"+mul+"="+(i*mul));
 }

//  dividing
// const scanner = require("readline-sync");
//  let div = scanner.questionInt("Enter the divider: ")
//  for(let i = 1; i<=10;i++){
//      console.log(i+"/"+div+"="+(i/div));
//  }

//  adding
// const =  scanner = require("readline-sync");
//  let add = scanner.questionInt("Enter the adder:")
//  for(let i = 1; i<=30;i++){
//      console.log(i+"+"+add+"="+(i+add));
//  }




