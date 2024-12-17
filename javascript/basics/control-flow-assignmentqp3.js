// John has scored the following marks in three subjects:
// a.subject1 :85
// b.subject2 :90
// c.subject3 :75
// d.Check the john's subject1 mark is greater than subject2 mark

// lt subject1 = 85;
// let subject2 = 90;
// let subject3 = 75;

// if (subject1 > subject2) {
//     console.log("Subject 1 mark is greater than Subject 2 mark.");
// } else {
//     console.log("Subject 1 mark is not greater than Subject 2 mark.");
// }

// let subject1 = 85;
// let subject2 = 90;
// let subject3 = 75;
// if (subject1 > subject2){
//     console.log("Subject 1 mark is greater tha subject 2 mark.");
// }else{
//     console.log("Subject 1 mark is not greater than subject 2 mark. ")
// }


// let sub1 = 85;
// let sub2 = 90;
// let sub3 = 75;
// if (sub1 > sub2){
//     console.log("subject 1 maak is greater than subject 2 mark.")
// }else{
//     console.log("subject 1 mark is not greater than subject 2 mark.")
// }














// print numbers from 1 to 10
for(let i = 1;i<=10;i++){
    console.log(i)
}
// print numbers from 10 to 1
for(let i = 10;i>=1;i++){
    console.log(i)
}

// sum of first 10 natural numbers 
let sum = 0;
for(let i = 1;i<= 10;i++){
    sum = sum + i
}
console.log("Sum",sum)


// Print even numbers between 1 and 20 
for(let i = 1;i<=20;i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// Alternative
for(let i = 2;i<=20;i +=2){
    console.log(i)
}


// create  a multiplication table
let num = 5;
for (let i = 1;i<=10;i++){
    console.log(`${num}*${i}=${num * i}`);
}

// Reverse an array
// let arr = [1,2,3,4,5];
// for(let i = arr.length - 1;i>=0;i--){
//     console.log(arr[i]);
// }

// let arr = [1,2,3,4,5];
// for(let i = arr.length - 1;i>=0;i--){
//     console.log(arr[i]);
// }


let arr = [1,2,3,4,5];
for(let i = arr.length -1;i>=0;i--){
    console.log(arr[i])
}


// To find the largest number in an array
// let numbers = [45,6,7,8,9];
// let largest = numbers[0];
// for(let i = 1; i< numbers.length;i++){
//     if(numbers[i]>largest){
//         largest = numbers[i]
//     }
// }
// console.log("The largest number is ",largest)



let numbers = [3,5,90,12];
let largest = numbers[0]
for (let i = 1; i<numbers.length;i++){
    if(numbers[i]>largest){
        largest = numbers[i]
    }
}
console.log("The largest number is",largest)




// To count the number of vowels in a string
// let str = "javascript is amazing";
// let vowels = "aeiou";
// let count = 0;
// for (let i  = 0;i < str.length;i++){
//     if(vowels.includes(str[i].toLowerCase())){
//         count++;
//     }
// }
// console.log("Number of vowels:",count);



let str = "javascript is amazing";
let vowels = "aeiou";
let count = 0;
for (let i = 0;i < str.length;i++){
    if(vowels.includes(str[i].toLowerCase())){
        count++;
    }
        
}
console.log("Number of vowels:",count);

// calculate the factorial

let n = 5;
let factorial = 1;
for (let i = 1;i<=n;i++){
    factorial *=1;
}
console.log(`factorial of ${n}:`,factorial);










