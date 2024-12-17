// FUNCTIONS
// FUNCTION IS A BLOCK OF CODE OR IT IS A RESUSABLE PIECE OF CODE DESIGNED TO PERFORM A SPECIFIC TASK . IT IS EXECUTED WHEN IS CALLED . FUNCTTIONS CAN ACCEPT PARAMETERS AS INPUT AND RETURN OUTPUTS 
// TYPE OF FUNCTIONS 
// NAMED FUNCTION
// function greet(){
//     console.log("Hello world")
// }
// greet()


// ANONYMOUS FUNCTION
// function without a name , often used as values or callbacks 

const greet = function(){
    console.log("Hello world")
};
greet();


// ARROW FUNCTION
// A CONCISE WAY TO WRITE FUNCTION USING THE =>SYNTAX
const greets = () => {
    console.log("hello world ")
}
greet();  

// immediately invoked function 
// functions that are executd immediately afte they are defined 


// constructor function
// use dto create object 

function person(name,age){
    this.name = name;
    this.age = age
}
const person1 = new person("Aswathi",22)
console.log(person1);

// ASYNCHRNOUS FUNCTION
async function fetchData(){
    const data =  await fetch("/")
    return data.json
}

