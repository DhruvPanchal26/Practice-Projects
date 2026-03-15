let maxNo = parseInt(prompt("Enter the maximum number:"));
while (!maxNo) {
    maxNo = parseInt(prompt("Enter the maximum number:"));
}
let targetNo = Math.floor(Math.random() * maxNo) + 1;
console.log(targetNo);

let guess = prompt("Enter your guess");
let count = 0;

while (parseInt(guess) != targetNo) {

    if (guess == 'q') break;
    guess = parseInt(guess);
    if (guess > targetNo) {
        guess = (prompt("High, Go lower"));
        count++
    }
    else if (guess < targetNo) {
        guess = (prompt("Too low, go high"));
        count++
    }
    else {
        guess = prompt("INVALID GUESS, write a valid number or press 'q' to quit!!")
    }
}

if (guess == 'q') {
    console.log('Okay, YOU QUIT!')
}
console.log(`YOU GOT IT it took you ${count} guesses`);
