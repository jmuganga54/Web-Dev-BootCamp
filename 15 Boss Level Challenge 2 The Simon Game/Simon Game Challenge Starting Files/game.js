/** @format */

let userClickedPattern = []
let gamePattern = []
let buttonColours = ['red', 'blue', 'green', 'yellow']
let level = 0

//get track if the game as started
let started = false

//functions
/**
 * Play sound
 * @param {*} sound - string audio name
 */
const playSound = (name) => {
  let audio = new Audio(`sounds/${name}.mp3`)
  audio.play()
}

/**
 *
 * @param {string} currentColour - current color
 */
const animatePress = (currentColour) => {
  $(`#${currentColour}`).addClass('pressed')
  setTimeout(() => {
    $(`#${currentColour}`).removeClass('pressed')
  }, 100)
}

const nextSequence = () => {
  //pick a random position number
  level++
  $('#level_title').text(`Level ${level}`)
  console.log(level)

  let randomNumber = Math.floor(Math.random() * 4)
  console.log(`randomNumber: ${randomNumber}`)

  //pick a random color based on position
  let randomChosenColour = buttonColours[randomNumber]
  //assign it to array
  gamePattern.push(randomChosenColour)
  console.log(gamePattern)

  // make a button flash
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
  //play audio when button is clicked
  playSound(randomChosenColour)
}

const checkAnswer = (currentLevel) => {
  console.log(`currentLevel: ${currentLevel}`)
  //if the most recent user answer is the same as the game pattern
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log('Success')
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence()
      }, 1000)
    }
  } else {
    console.log('wrong')
  }
}
//Call function
$(document).keypress(function (event) {
  if (!started) {
    $('#level_title').text(`level ${level}`)
    nextSequence()
    started = true
  }
})

//addEVentListener when the button is clicked
$('.btn').click(function (e) {
  let userChosenColour = e.target.id
  userClickedPattern.push(userChosenColour)
  checkAnswer(userClickedPattern.length - 1)
  playSound(userChosenColour)
  //add animated background to the button
  animatePress(userChosenColour)
})
