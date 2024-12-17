async function getData(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
    console.log(data);
    

}
getData();