let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

//functions
/**
 * Play sound
 * @param {*} sound - string audio name
 */
const playSound = (name) => {
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
};

/**
 *
 * @param {string} currentColour - current color
 */
const animatePress = (currentColour) => {
  debugger;
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(() => {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
};

/**
 *
 */
const nextSequence = () => {
  //pick a random position number
  let randomNumber = Math.floor(Math.random() * 4);

  //pick a random color based on position
  let randomChosenColour = buttonColours[randomNumber];

  //assign it to array
  gamePattern.push(randomChosenColour);

  // make a button flash
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  console.log(randomChosenColour);

  //addEVentListener when the button is clicked
  $(document).ready(function () {
    $('div[type="button"]').click(function (e) {
      let userChosenColour = e.target.id;

      userClickedPattern.push(userChosenColour);
      console.log(userClickedPattern);
      //add animated background to the button
      animatePress(userChosenColour);

      //play audio when button is clicked
      playSound(userChosenColour);
    });
  });
  return userClickedPattern;
};

//Call function

nextSequence();
