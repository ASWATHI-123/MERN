function getUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayData(data))
}
function displayData(data){
    let html_data = '';
    const element = document.getElementById("users");

    data.forEach((user)=>{
        console.log("user");
        

        const name = user.name;
        const username = user.username;
        const email = user.email;
        const phone = user.phone;
        const company = user.company.name;
        const city = user.address.city;
        const street = user.address.street;

       
        html_data += `<tr>
            <th scope="row">${user.id}</th>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${company}</td>
            <td>${city},${street}</td>
         </tr>`

        
    })
    element.innerHTML = html_data;
    

    console.log(data);
   
}
getUsers();