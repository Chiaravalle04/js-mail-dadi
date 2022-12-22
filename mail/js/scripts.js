// Chiediamo all'utente la sua email
const email = prompt('Qual è la tua email?');

console.log('La mail dell\'utente è:', email);

// Lista degli accessi 
let access = ["franco.gino@virgilio.it", "valerio.frassica@libero.it", "nicolas.chiaravalle@gmail.com"];

console.log('Accessi autorizzati:', access);

// Creiamo una condizione per vedere se l'utente ha l'accesso 
if (access.includes(email)) {

    console.log(`L'email ${email} è presente`);

    alert('Accesso consentito');

} else {

    alert('Non hai l\'autorizzazione per effetturare l\'accesso');

}