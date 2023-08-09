//Selector
const buttons = document.querySelectorAll(".drum");

//functions
const playSound = (sound) => {
  let audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
};

const makeSound = (key) => {
  switch (key) {
    case "w":
      let tom1 = new Audio(`sounds/tom-1.mp3`);
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio(`sounds/tom-2.mp3`);
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio(`sounds/tom-3.mp3`);
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio(`sounds/tom-4.mp3`);
      tom4.play();
      break;

    case "j":
      let tom5 = new Audio(`sounds/snare.mp3`);
      tom5.play();
      break;

    case "k":
      let tom6 = new Audio(`sounds/crash.mp3`);
      tom6.play();
      break;

    case "l":
      let tom7 = new Audio(`sounds/kick-bass.mp3`);
      tom7.play();
      break;

    default:
      console.log(key);
      break;
  }
};

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerText;
    makeSound(buttonInnerHTML);
  });
}

//EVentListener
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});
