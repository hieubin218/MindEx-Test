let UserInput = document.getElementById("NumInput");
let statement = document.getElementById("result");
let clickedButton = document.getElementById("button");





function GuessNumber() {
    let inputValue = UserInput.value;
    let RandomNumber = Math.floor(Math.random() * 10) + 1;



    if (inputValue < 1 || inputValue > 10) {
        statement.innerHTML = "Invalid Input: Only Number from 1 to 10. Try Again!";

    } else if (inputValue != RandomNumber) {
        statement.innerHTML = "Upps! Your Guess is Wrong! Lucky Number is " + RandomNumber;

    } else if (inputValue == RandomNumber) {

        statement.innerHTML = "WOW! Congrats! You Won $1000 Special Prize ! Lucky Number is " + RandomNumber;

    } if (isNaN(inputValue)) {
        statement.innerHTML = "Invalid Input! Please Try Again!";
    }

}



clickedButton.addEventListener('click', GuessNumber);


