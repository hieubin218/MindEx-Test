let input = document.getElementById("NumInput");
let statement = document.getElementById("result");
let clickedButton = document.getElementById("button");

let BooleanValue = false;



function GuessNumber() {
    let inputValue = input.target.value;
    let RandomNumber = Math.floor(Math.random() * 10) + 1;

    if (inputValue < 1 && inputValue > 10) {
        prompt("Invalid Input: Only Number from 1 to 10. Try Again!");

    } if (ParseIn(inputValue) != RandomNumber) {
        for (i = 0; i < 4; i++) {
            prompt("Invalid Input: Try Again! You only have 3 times to guess");
            statement = RandomNumber.innerText;
            inputValue = input.value;
        }

        // } else {
        //     prompt("You chance is over! Sorry!");
        //     break;
        } 

    } if (ParseIn(inputValue) === RandomNumber) {
        BooleanValue = true;
        prompt("WOW! Congrats you win!");
    }
   
}

clickedButton.addEventListener('click', GuessNumber);


