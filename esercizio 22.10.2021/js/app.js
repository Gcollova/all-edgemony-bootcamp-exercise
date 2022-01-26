const rubrica = [];
const dispList = [];


function subscribe(nomecogn, telefono, mail) {
  let input = [nomecogn.toUpperCase(), telefono, mail.toUpperCase()];
  if (nomecogn === null || nomecogn === "" || parseInt(nomecogn)) {
    alert(
      "Il nome e il cognome non possono essere un numero o \n un campo vuoto "
    );
  } else {
    if (telefono === null || telefono === "" || isNaN(telefono)) {
      alert("inserisci un numero e \n assicurati che sia valido");
    } else {
      let check = true;
      for (numero of rubrica) {
        for (controllo in numero) {
          if (controllo == "numero") {
            if (numero[controllo] == input[1].toUpperCase()) {
              check = false;
            }
          }
        }
      }

      if (check === true) {
        let newUser = userCreation(input);
        addUser(newUser);
        document.getElementById("registrazione").reset();
        console.log(rubrica);
      }

      if (check === false) {
        alert("numero già presente in rubrica");
      }
    }
  }
}

function userCreation(arrData) {
  let user = {
    nomecogn: arrData[0],
    numero: arrData[1],
    email: arrData[2],
    console.log(user);
  };

  let userList = user.nomecogn + " " + user.numero + " " + user.email;

  addUserList(userList);

  return user;
}

function addUserList(userList) {
  dispList.push(userList);

  let rubricaString = dispList.join("\n");
  console.log(rubricaString);
  document.getElementById("accountList").innerHTML =
    rubricaString.toString(" ");
}

function addUser(user) {
  rubrica.push(user);
}
