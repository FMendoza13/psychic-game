


        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        
        var wins = 0;
        
        var losses = 0;
        
        var guesses = 10;

        var userGuess = [];

        var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

        console.log(computerLetter)
        console.log(userGuess)
        console.log(guesses)
        
        
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
          
        
            document.getElementById(wins).innerHTML = "Wins: " + wins;
           
           document.getElementById(losses).innerHTML = "losses: " + losses;
          
           document.getElementById(guesses).innerHTML = "Guesses left: " + guesses;
           
           }