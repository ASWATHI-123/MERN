// Primitive data types
// copy by value or deep cloninig

// let x = 10;
// let y = x;
// x = 20;
// console.log(x);

// non - primitive data types
// copy by reference or shallow cloning


// let arr1 = [10,20,30];
// let arr2 = arr1;
// arr1.push(40);
// console.log("arr1--->",arr1);
// console.log("arr2--->",arr2);

// Inorder to  overcome above situation in array , we can use spread operator

let arr1 = [10,20,30];
let arr2 = arr1;
const arr = [...arr1]
arr1.push(40);
console.log("arr1--->",arr);
console.log("arr2--->",arr2);

