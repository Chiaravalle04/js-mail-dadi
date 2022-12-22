// Play
const play = document.getElementById('play')

play.addEventListener('click',

    function() {

        // Player reale
        let myPlayer = Math.floor(Math.random() * 6) + 1;

        console.log('player:', myPlayer);

        // Player virtuale 
        let virtualPlayer = Math.floor(Math.random() * 6) + 1;

        console.log('AIplayer:', virtualPlayer);

        if (myPlayer === 1) {

            document.getElementById('one').style.display = 'block';

            document.getElementById('points-2').style.display = 'none';

            document.getElementById('points-3').style.display = 'none';
            
            document.getElementById('points-4').style.display = 'none';

            document.getElementById('points-5').style.display = 'none';

            document.getElementById('points-6').style.display = 'none';

        } else if (myPlayer === 2) {

            document.getElementById('one').style.display = 'none';

            document.getElementById('points-2').style.display = 'block';

            document.getElementById('points-3').style.display = 'none';
            
            document.getElementById('points-4').style.display = 'none';

            document.getElementById('points-5').style.display = 'none';

            document.getElementById('points-6').style.display = 'none';

        } else if (myPlayer === 3) {

            document.getElementById('one').style.display = 'none';

            document.getElementById('points-2').style.display = 'none';

            document.getElementById('points-3').style.display = 'block';
            
            document.getElementById('points-4').style.display = 'none';

            document.getElementById('points-5').style.display = 'none';

            document.getElementById('points-6').style.display = 'none';

        } else if (myPlayer === 4) {

            document.getElementById('one').style.display = 'none';

            document.getElementById('points-2').style.display = 'none';

            document.getElementById('points-3').style.display = 'none';
            
            document.getElementById('points-4').style.display = 'block';

            document.getElementById('points-5').style.display = 'none';

            document.getElementById('points-6').style.display = 'none';

        } else if (myPlayer === 5) {

            document.getElementById('one').style.display = 'none';

            document.getElementById('points-2').style.display = 'none';

            document.getElementById('points-3').style.display = 'none';
            
            document.getElementById('points-4').style.display = 'none';

            document.getElementById('points-5').style.display = 'block';

            document.getElementById('points-6').style.display = 'none';

        } else if (myPlayer === 6) {

            document.getElementById('one').style.display = 'none';

            document.getElementById('points-2').style.display = 'none';

            document.getElementById('points-3').style.display = 'none';
            
            document.getElementById('points-4').style.display = 'none';

            document.getElementById('points-5').style.display = 'none';

            document.getElementById('points-6').style.display = 'block';

        } 
        
        if (virtualPlayer === 1) {

            document.getElementById('aione').style.display = 'block';

            document.getElementById('aipoints-2').style.display = 'none';

            document.getElementById('aipoints-3').style.display = 'none';
            
            document.getElementById('aipoints-4').style.display = 'none';

            document.getElementById('aipoints-5').style.display = 'none';

            document.getElementById('aipoints-6').style.display = 'none';

        } else if (virtualPlayer === 2) {

            document.getElementById('aione').style.display = 'none';

            document.getElementById('aipoints-2').style.display = 'block';

            document.getElementById('aipoints-3').style.display = 'none';
            
            document.getElementById('aipoints-4').style.display = 'none';

            document.getElementById('aipoints-5').style.display = 'none';

            document.getElementById('aipoints-6').style.display = 'none';

        } else if (virtualPlayer === 3) {

            document.getElementById('aione').style.display = 'none';

            document.getElementById('aipoints-2').style.display = 'none';

            document.getElementById('aipoints-3').style.display = 'block';
            
            document.getElementById('aipoints-4').style.display = 'none';

            document.getElementById('aipoints-5').style.display = 'none';

            document.getElementById('aipoints-6').style.display = 'none';

        } else if (virtualPlayer === 4) {

            document.getElementById('aione').style.display = 'none';

            document.getElementById('aipoints-2').style.display = 'none';

            document.getElementById('aipoints-3').style.display = 'none';
            
            document.getElementById('aipoints-4').style.display = 'block';

            document.getElementById('aipoints-5').style.display = 'none';

            document.getElementById('aipoints-6').style.display = 'none';

        } else if (virtualPlayer === 5) {

            document.getElementById('aione').style.display = 'none';

            document.getElementById('aipoints-2').style.display = 'none';

            document.getElementById('aipoints-3').style.display = 'none';
            
            document.getElementById('aipoints-4').style.display = 'none';

            document.getElementById('aipoints-5').style.display = 'block';

            document.getElementById('aipoints-6').style.display = 'none';

        } else if (virtualPlayer === 6) {

            document.getElementById('aione').style.display = 'none';

            document.getElementById('aipoints-2').style.display = 'none';

            document.getElementById('aipoints-3').style.display = 'none';
            
            document.getElementById('aipoints-4').style.display = 'none';

            document.getElementById('aipoints-5').style.display = 'none';

            document.getElementById('aipoints-6').style.display = 'block';

        }

        let win = document.getElementById('win');

        let aiWin = document.getElementById('aiwin');

        let tie = document.getElementById('tie');

        if (myPlayer > virtualPlayer) {

            win.style.display= 'block';

            aiwin.style.display= 'none';

            tie.style.display = 'none'
        
        } else if (virtualPlayer > myPlayer) {
        
            win.style.display = 'none';

            aiwin.style.display = 'block';

            tie.style.display = 'none'
        
        } else {
        
            tie.style.display = 'block'

            win.style.display = 'none';

            aiwin.style.display= 'none';
        
        }

    }

);




