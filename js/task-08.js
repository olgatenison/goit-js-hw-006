const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
    event.preventDefault();

    const formElement = element.currentTarget.elements
    const mail = formElement.email.value;
    const password = formElement.password.value;
    const formData ={mail, password};

    if ( mail !== "" && password !== ""){
    return formData;
    }
    else {
    form.reset();
    return alert("Все поля должны быть заполнены!");
    }   
}









//const  formData = new FormData(event.currentTarget);
//    formData.forEach((value, name) =>{
//        console.log()
//    })