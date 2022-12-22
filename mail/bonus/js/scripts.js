// Chiediamo all'utente la sua email 
const email = document.getElementById('my_email');

// Lista degli accessi 
let access = ["franco.gino@virgilio.it", "valerio.frassica@libero.it", "nicolas.chiaravalle@gmail.com"];

// Button
const send = document.getElementById('my_but');

// Click
send.addEventListener('click',

    function() {

        console.log("l'email è:", email.value);

        if (access.includes(email.value)) {

            document.getElementById('check').style.display = 'block'

            document.getElementById('cross').style.display = 'none'


        } else {

            document.getElementById('cross').style.display = 'block'

            document.getElementById('check').style.display = 'none'

        }

    }

);
