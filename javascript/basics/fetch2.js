function getUsers(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>displayData(data))
}
function displayData(data){
    let html_data = '';
    const element = document.getElementById("posts");
    
    data.forEach((user)=>{
        console.log("user");

        const body = user.body;
        const id = user.id;
        const title = user.title;
        

        html_data = `<tr>
            <th scope="row">${user.userId}</th>
            <td>${body}</td>
            <td>${id}</td>
            <td>${title}</td>
          
         </tr>`
    })
    element.innerHTML = html_data;


    console.log(data);

}
getUsers();
