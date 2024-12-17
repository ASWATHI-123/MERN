let registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener('Submit',getFormData);


function getFormData(e){
    e.preventDefault();
    let fullname = document.getElementById('fullname').value;
    let fullnameError = document.getElementById("fullnameError");
    if(fullname.length < 3){
        fullnameError.style.display = 'block';
        fullnameError.style.backgroundColor = 'red';
        fullnameError.style.color = 'white'
        fullnameError.textContent = "fullname must have minimum 3 letters"
    }else if(fullname.length > 3 && fullname.length < 13){
        fullnameError.style.display = 'none';
    }else{
        fullnameError.style.display = 'block';
        fullnameError.style.backgroundColor = 'red';
        fullnameError.style.color = 'white'
    }
    console.log(fullname);
}


