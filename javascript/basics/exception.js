let age = 20;
try{
    if(age < 25){
        throw Error("Access denied!")
    }
}catch(error){
    console.log(error.message);
    
}
console.log("After error");