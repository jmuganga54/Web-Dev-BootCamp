//Variable
player1 = Math.floor(Math.random() * 6) + 1;
player2 = Math.floor(Math.random() * 6) + 1;

//Selectors
const imgTag = document.querySelectorAll("img");
const headingTag = document.querySelector("h1");

//Player 1
randomDiceImagePlayer1 = "dice" + player1; //dice1
imagePathPlayer1 = "images/" + randomDiceImagePlayer1 + ".png"; //images/dice1.png

//Player 2
randomDiceImagePlayer2 = "dice" + player2;
imagePathPlayer2 = "images/" + randomDiceImagePlayer2 + ".png";

//Changing image for Player 1
imgTag[0].setAttribute("src", imagePathPlayer1);

//Changing image for Player 2
imgTag[1].setAttribute("src", imagePathPlayer2);

if (player1 > player2) {
  headingTag.textContent = "Player 1 wins";
} else if (player2 > player1) {
  headingTag.textContent = "Player 2 wins";
} else {
  headingTag.textContent = "Draw";
}
