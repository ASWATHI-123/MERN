setTimeout(()=>{
    console.log("Inside callback")
})
console.log("1");
console.log("2");
console.log("3");
setTimeout(()=>{
    console.log("Hello")
},2000)
console.log("4");
console.log()

