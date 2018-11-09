


        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        
        var wins = 0;
        
        var losses = 0;
        
        var guesses = 10;

        var guessesMade = [];

        var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

        console.log(computerLetter)
        console.log(guessesMade)
        console.log(guesses)
        
        
        document.onkeypress = function(event) {
            var userGuess = event.key;
            left--;
            guessesMade.push(userGuess)

            var userGuess = function() {
                document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
            }

            if(guessesMade === computerLetter) {
                wins++;
                document.getElementById("wins").innerHTML = "Wins: " + wins;
            } else{
                guesses--;
            }
            if(guesses = 0) {
                losses++;
            document.getElementById("losses").innerHTML = "losses: " + losses;
            }
           
           }