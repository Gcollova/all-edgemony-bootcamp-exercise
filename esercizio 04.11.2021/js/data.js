const data = [];


document.addEventListener("DOMContentLoaded", () => {
  const formInput = document.querySelector("#submit-form");
  // const nameInput = document.querySelector("#nome");
  // const telInput = document.querySelector("#telefono");
  // const mailInput = document.querySelector("#e-mail");
  const list = q("#main-list");
  
  formInput.addEventListener('submit', (event) => {
    event.preventDefault();
    const newUser = {
      nome: event.target.nome.value,
      telefono: event.target.telefono.value,
      eMail: event.target.mail.value    
    }
    if(isNaN(event.target.telefono.value)){
      alert("non è un numero valido")
    } else {      
      data.push(newUser); 
      render(list,data);
      formInput.reset(); 
    }   

  });


});