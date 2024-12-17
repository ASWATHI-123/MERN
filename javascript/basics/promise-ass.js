let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Time expired!"),3000);
});
promise.then((res) => console.log("then ---->" + res)).catch((err)=> console.log("catch ---->"+err))
console.log(promise);