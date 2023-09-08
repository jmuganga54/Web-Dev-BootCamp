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
 */
const nextSequence = () => {
  let randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log();

  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  $(document).ready(function () {
    $('div[type="button"]').click(function (e) {
      let userChosenColour = e.target.id;
      userClickedPattern.push(userChosenColour);
      console.log(userClickedPattern);
      playSound(userChosenColour);
    });
  });
  return userClickedPattern;
};

//Call function

nextSequence();
