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

/**
 *
 */
const nextSequence = () => {
  //pick a random position number
  level++
  $('#level_title').text(`Level ${level}`)

  let randomNumber = Math.floor(Math.random() * 4)

  //pick a random color based on position
  let randomChosenColour = buttonColours[randomNumber]
  //assign it to array
  gamePattern.push(randomChosenColour)

  // make a button flash
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
  //play audio when button is clicked
  playSound(randomChosenColour)

  return userClickedPattern
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
$('div[type="button"]').click(function (e) {
  let userChosenColour = e.target.id
  userClickedPattern.push(userChosenColour)
  console.log(userClickedPattern)
  //add animated background to the button
  animatePress(userChosenColour)
})
