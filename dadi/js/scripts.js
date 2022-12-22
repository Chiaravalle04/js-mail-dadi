// Player reale
let myPlayer = Math.floor(Math.random() * 6) + 1;

console.log('My player:', myPlayer)

// Player virtuale 
let virtualPlayer = Math.floor(Math.random() * 6) + 1;

console.log('Virtual player:', virtualPlayer);

if (myPlayer > virtualPlayer) {

    alert('You WIN');

} else if (virtualPlayer > myPlayer) {

    alert('Virtual player WIN');

}

else {

    alert('TIE');

}


