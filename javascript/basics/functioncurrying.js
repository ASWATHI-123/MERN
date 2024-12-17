function sum(a,b){
    return a + b;
}
function a(a){
    return function(b){
        return a + b;
    }
}
let res = a(10);
let output = res(20);
console.log(output);
