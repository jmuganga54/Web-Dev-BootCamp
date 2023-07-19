//Selector
const buttons = document.querySelectorAll(".drum");

//EventListeners
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     alert("The button was clicked");
//   });
// });

//alternative
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    alert("The button was clicked");
  });
}
