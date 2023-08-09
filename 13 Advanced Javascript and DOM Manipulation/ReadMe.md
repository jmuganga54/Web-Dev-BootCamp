## Topic

In this section we are going to learn advanced Javascript concept, at the end of this section we are going to build Drum Kit

## Keywords & Notes

## Adding EventListeners to a Button

> Drum Kit
> Download the start code

```
//steps
//1. Link up the index.js and index.html, test using alert
//2. Adding EventListener : in the first button

//function
const handleClick = ()=>{
    alert('The button was clicked')
}

document.querySelector('button').addEventListener('click', handleClick)

```

The reason why we don't add the parenthesis(()) on the function when adding Even Listener is we don't want the function to run, immediately after adding it, it must run when the event happen.

Passing a function as an input so as It can be called at a later time.

```
//alternative | anonymous function

document.querySelector('button').addEventListener('click', ()=>{
    alert('The button was clicked')
})
```

Adding an EventListener to all the button with the class of drum

```
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
```

## Higher Order Function and Passing Functions as Arguments

Higher Order Functions are function that can take other functions as inputs.

For example, we can build a calculator function which add and multiply

```
const add = (num1, num2) => num1 + num2;
const subtract = (num1,num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1/num2;

const calculator = (num1, num2, operator) => operator(num1,num2)

//calling a function
debugger
let value = calculator (2,2,subtract)
console.log(value)

//Expected output: 0
```

`Debugger` in Javascript we can use a debugger to debug our code, this can be done, by write `debugger` where you want your code to stop, then you can use the controls to line each line of code and see how it works.

## How to Play Sounds on a website

```
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
```

## A Deeper Understanding of Javascript Objects

In Javascript you can use object to collect a lot of information at once for different personnel. For example

```
let bellBoy1 = {
  name: 'Timmy'
  age: 19,
  hasWorkPermit: true,
  languages: ['French','English']
}
```

When accessing it values, we can use `dot operator`. For example `bellBoy1.name`

### Constructor Function

```
function BellBoy(name, age, hasWorkPermit, languages){
  this.name = name;
  this.age = age;
  this. hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}
```

Names in constructor function have to be capitalized, the first letter must be capitalized, this is how we can tell this is a constructor function.

Constructor function take a number of inputs, this are inputs which we are going to provide, when creating new objects from this constructor function. Inside the constructor function we match the input with the properties names.

> Initialize object

```
let bellyBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"])
```

## How to use Switch Statement in Javascript

In this section we have used switch to trigger different sounds depending on what button was clicked. Below is the code for that.

```
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerText;
    switch (buttonInnerHTML) {
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
        console.log(buttonInnerHTML)
        break;
    }
  });
}
```

## Objects their Methods and the Dot Notation

On this section we will learn about Methods in an Constructor function

This is a function before being attached with the constructor function

```
function moveSuitcase {
  alert('May I take your suitcase');
  pickUpSuitcase();
  move();
}
```

But the the previous syntax, if we want an object to have an associated function, then what we have to do is to is to provide the name of the function as a new parameter the the anonymous function

```
let bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ['French', 'English'],
  moveSuitcase: function(){
    alert('May I take your suitcase?");
    pickUpSuitcase();
    move();
  }
}
```

This is how we implement an object with associate function.

> Call Method

```
bellBoy1.moveSuitcase();
```

> Constructor Function
> If we want to incorporate the function in our Constructor function, all we have to do is to as below, using `this operator`

function BellBoy (name, age, hasWorkPermit, languages){
this.name = name;
this.age = age;
this.hasWorkPermit = hasWorkPermit;
this.languages = languages;
this.moveSuitcase = function (){
alert('May I take your suitcase?');
pickUpSuitcase();
move();
}
}

> Challenge add a method on Constructor function which will perform cleanness

//My try

```
function BellBoy (name, age, hasWorkPermit, languages){
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function (){
    alert('May I take your suitcase?');
    pickUpSuitcase();
    move();
  }

 this.clean = function(){
     console.log('Cleaning in progress ....')
 }

}

let bellBoy1 = new BellBoy('John',23,true, ['Swahili','English','Zulu'])
bellBoy1.clean()

//Expected output: Cleaning in progress ....
```

This is what happen when using Audio Function on our play sound example above

```
function Audio (fileLocation){
  this.fileLocation = fileLocation;
  this.play = function(){
    //Tap into the audio hardware
    //Check the file at fileLocation exists
    //Check the file at fileLocation is a sound file
    //Play the file at fileLocation
  }
}

//Call Method
let tom1 = new Audio('sounds/tom-1.mpe');
tom1.play()
```

## Using Keyboard Event Listeners to check for Key Presses
We can use event to listen to what button was clicked. The below code show how we can achieve that 

```
document.addEventListener("keydown", function () {
  alert("Key were precessed");
});
```

The the following issue is how can we figure out which key was pressed. Remember that, when we add the eventListener to an element, once the event happen, the element will trigger the function in the second parameter.

In this case whe the key is press down, the following function will run, which will show the alert.

```
function () {
  alert("Key were precessed");
}
```
The when the above function is triggered, thee is also a option to pass in the parameter, we can call that parameter `event` or `e`, what this parameter allow us to do, is it let us tap into events, that triggered the event listener.

For example for event `keydown`, you can see the properties of the `event` on [keydown events documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)

> Challenge use the event Listener on drum kit 

//try
```
//function
const makeSound = function (key) {
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

//EVentListener
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});
```