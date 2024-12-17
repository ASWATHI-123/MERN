let user = {
    fullname:"Aswathi",
    age:22,
    hobbies:['sports','drawing']
}
console.log(user);

user.country = 'India';
console.log(user);


let id = Symbol("id");
user[id] = 10;
let id2 = Symbol("id2");
user[id2] =20;


