let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
for(let ele of set){
    console.log(ele);
}
console.log(set);

let res = set.has(5);
console.log(res)

let resu = set.has(6);
console.log(resu);


