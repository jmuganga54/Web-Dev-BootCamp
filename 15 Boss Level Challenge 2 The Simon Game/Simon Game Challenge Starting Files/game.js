let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

//functions
const nextSequence = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  return gamePattern;
};

console.log(nextSequence());
