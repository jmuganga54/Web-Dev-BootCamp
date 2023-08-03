//Selector
const buttons = document.querySelectorAll(".drum");

//functions
const playSound = (sound) => {
  let audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
};

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    this.style.color = "white";
    console.log(this);
  });
}
