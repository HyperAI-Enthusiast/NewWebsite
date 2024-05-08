function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>You chose <strong>${playerChoice}</strong>.</p>
        <p>Computer chose <strong>${computerChoice}</strong>.</p>
        <p>${result}</p>
    `;
}