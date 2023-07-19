## Topic
In this section we are going to learn advanced Javascript concept, at the end of this section we are going to build Drum Kit

## Keywords & Notes
## Adding EventListeners to a Button
> Drum Kit
Download the start code
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



