// Generates the choice for the computer
function computerPlay() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Mimics a single round of rock paper scissors
function playRound(playerSelection) {
    var computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return "Its a tie! You both chose " + playerSelection + "!";    
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            return "You win! " + playerSelection + " beats " + computerSelection + "!"; 
        } else {
            return "You lose! " + computerSelection + " beats " + playerSelection + "!"; 
        }
    } else if (playerSelection ===' Scissors') { 
        if (computerSelection === 'Paper') {
            return "You win! " + playerSelection + " beats " + computerSelection + "!"; 
        } else {
            return "You lose! " + computerSelection + " beats " + playerSelection + "!"; 
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return "You win! " + playerSelection + " beats " + computerSelection + "!"; 
        } else {
            return "You lose! " + computerSelection + " beats " + playerSelection + "!"; 
        }
    }
}

// Create a nodelist (similar to an array) to capture our buttons.
const buttons = document.querySelectorAll('button');
let score = [0, 0 ,0];

// Iterate through each button
buttons.forEach((button) => {

    // Add a 'click' listener to each button
    button.addEventListener('click', () => {
        let result = playRound(button.id);
        /* Conditionals, increment winner by 1 */
        if (result.search('win') > 0) {
            score[0] += 1;
        } else if (result.search('lose') > 0) {
            score[1] += 1;
        } else {
            score[2] += 1;
        }
        // Send the results of one game back to our p tag with the id score.
        const divcontainer = document.querySelector('#score');
        const divcontent = document.createElement('p');
        divcontent.classList.add('divcontent');
        divcontent.textContent = result + " The current score is " + score[0] + " wins, " + score[1] + " losses, " + score[2] + " ties.";
        divcontainer.appendChild(divcontent);
        // Disable all buttons when a verdict (W/L/T) is reached
        if (score.indexOf(3) > -1) {
            document.getElementById("Rock").disabled = true;
            document.getElementById("Paper").disabled = true;
            document.getElementById("Scissors").disabled = true;
            const divcontent = document.createElement('p');
            divcontent.classList.add('divcontent');
            if (score[0] == 3) {
                divcontent.textContent = "You won against the computer! Congratulations."
            } else if (score[1] == 3) {
                divcontent.textContent = "You lost to the computer! :("
            } else {
                divcontent.textContent = "You tied with the computer!"
            }
            divcontainer.appendChild(divcontent);
        }
    });
});