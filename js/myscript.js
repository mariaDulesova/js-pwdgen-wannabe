// Chiedi all'utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21



var userName = prompt("Mi dici il tuo nome?");
console.log(userName);

var userLastName = prompt("Mi dici il tuo cognome?");
console.log(userLastName);

var userFavoriteColor = prompt("Mi dici il tuo colore preferito");
console.log(userFavoriteColor);

var yourPassword = userName + userLastName + userFavoriteColor + "21";

document.getElementById("password").innerHTML = yourPassword;