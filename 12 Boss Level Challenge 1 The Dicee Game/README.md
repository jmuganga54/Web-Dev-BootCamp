## Topics
Now since we have already see how we can create and manipulate elements on our website on the fly using the DOM.

It is the time to take it to the next level, we will be using all the knowledge that we have learn about the DOM and javascript to create our very own `Dicee`.

## Keywords && Notes

```
//Solution Dicee

//dicee.html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>Dicee</title>
    <link rel="stylesheet" href="styles.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Indie+Flower|Lobster"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container">
      <h1>Refresh Me</h1>

      <div class="dice">
        <p>Player 1</p>
        <img class="img1" src="images/dice6.png" />
      </div>

      <div class="dice">
        <p>Player 2</p>
        <img class="img2" src="images/dice6.png" />
      </div>
    </div>

    <script src="./index2.js"></script>
  </body>

  <footer>www 🎲 App Brewery 🎲 com</footer>
</html>


//index2.js
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
```