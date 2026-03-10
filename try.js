let maxNo = parseInt(prompt("Enter the maximum number:"));
while (!maxNo) {
    maxNo = parseInt(prompt("Enter the maximum number:"));
}
let targetNo = Math.floor(Math.random() * maxNo) + 1;
console.log(targetNo);

let guess = parseInt(prompt("Enter your guess"));
let count = 0;

while (parseInt(guess) != targetNo) {
    count++;
    if (guess == 'q') break;
    if (guess > targetNo) {
        guess = (prompt("High, Go lower"));
    }
    else {
        guess = (prompt("Too low, go high"));
    }
}

if (guess == 'q') {
    console.log('Okay, YOU QUIT!')
}
console.log(`YOU GOT IT it took you ${count} guesses`);
