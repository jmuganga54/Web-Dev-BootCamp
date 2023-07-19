// //Selector
// const buttons = document.querySelectorAll(".drum");

// EventListeners
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     alert("The button was clicked");
//   });
// });

const add = (num1, num2) => num1 + num2;
const subtract = (num1,num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1/num2;

const calculator = (num1, num2, operator) => operator(num1,num2)

//calling a function 
debugger
let value = calculator (2,2,subtract)
console.log(value)

//Expected output: 4

