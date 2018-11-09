


        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        
        var wins = 0;
        
        var losses = 0;
        
        var guesses = 10;

        var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

        console.log(computerLetter)
        
        document.onkeypress = function(event) {
            var userGuess = event.key;

            if(userGuess === computerLetter) {
                wins++;
            } else{
                guesses--;
            }
            if(guesses = 0) {
                losses++
            }
        }

        