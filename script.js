const player1Button = document.getElementById("p1-button");
const player2Button = document.getElementById("p2-button");

let p1Score = 0;

player1Button.addEventListener('click', function () {
    p1Score += 1;
});