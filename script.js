const player1Button = document.getElementById("p1-button");
const player2Button = document.getElementById("p2-button");
const resetButton = document.getElementById("reset");
const player1Display = document.getElementById("p1-display");
const player2Display = document.getElementById("p2-display");
const winningScoreSelect = document.getElementById("playTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;

let isGameOver = false;

player1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1; 

        if (p1Score === winningScore) {
            isGameOver = true
            player1Display.classList.add("has-text-success");
            player2Display.classList.add("has-text-danger");

            player1Button.disabled = true;
            player2Button.disabled = true;
        }
        player1Display.textContent = p1Score;
    }    
});

player2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1; 

        if (p2Score === winningScore) {
            isGameOver = true
            player2Display.classList.add("has-text-success");
            player1Display.classList.add("has-text-danger");

            player1Button.disabled = true;
            player2Button.disabled = true;
        }
        player2Display.textContent = p2Score;
    }    
});

winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value); 
    reset();
})

resetButton.addEventListener("click", reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1Display.textContent = 0;
    player2Display.textContent = p2Score;
    player2Display.classList.remove("has-text-success", "has-text-danger");
    player1Display.classList.remove("has-text-success", "has-text-danger");

    player1Button.disabled = false;
    player2Button.disabled = false;

}