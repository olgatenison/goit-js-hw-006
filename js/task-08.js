const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
    event.preventDefault();

    const formElement = event.currentTarget.elements
    const mail = formElement.email.value;
    const password = formElement.password.value;
    const formData ={mail, password};

    if ( mail !== "" && password !== ""){
    return formData;
    }
    else {
    event.currentTarget.reset();
    return alert("Все поля должны быть заполнены!");
    }   
}




//const  formData = new FormData(event.currentTarget);
//    formData.forEach((value, name) =>{
//        console.log()
//    })