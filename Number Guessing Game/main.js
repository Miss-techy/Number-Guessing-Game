// Number Guessing Game

/*
Approach:
1.Generate Random Number: A random number between 1 and 10 is generated using Math.random().
2.User Input Handling: The user inputs a guess through the text field and submits it by clicking the button.
3.Compare Guess: The user’s guess is compared with the generated number to check if it’s correct, higher, or lower.
4.Feedback via Alerts: Appropriate feedback is given through alerts based on whether the guess is correct, too high, or too low.
5.Increment Guess Counter: The number of guesses is counted and incremented after each incorrect attempt.
*/


function guessNow() {
    const input = document.getElementById('input').value;
    //generate a random whole number between 50 - 100
    let randomNum = Math.floor((Math.random() * 100) + 1);

    //number of correct guesses
    let guess = 1;
    if(input === ''){
        alert('Enter a number');
    }

    else if(input < 50) {
        alert('The number you should should not be less than 50')
    }

    else if(input > 100) {
        alert('The number you should should not be greater than 100')
    }

    else if(randomNum === input){
        alert('Congrats! You guessed the right number in' + guess );
    }
    else if(randomNum > input){
        guess++;
        alert('Oops! Try a bigger number')
    }
    else{
        guess++;
        alert('Oops! Try a smaller number')
    }
}