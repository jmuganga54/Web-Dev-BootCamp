## Topics
## What is jQUery?
Is the Javascript library that will Prevent our fingers from breaking.

Is a library (bunch of code that someone else wrote) that you can incorporate on your own project, and use to improve your own project, or make your life a little easier.

> For example of the previous code that we have written
```
//Pure Javascript 
for(i=0; i< document.querySelectorAll('button').length; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        document.querySelector('h1').style.color = 'red'
    })
}

//The above code can be shorten using jQuery library into very few codes
$("button").click(function(){
    $("h1").css("color","red")
})
```

> What jQuery allows you to do:
Take an example of below code, jQuery allow us to write a shorter code compared to pure Javascript, which is a lot easy to read, debug and write.
```
//Vanilla JS
document.querySelector('h1')

//jQuery
jQuery('h1')

//Shorter way to write jQuery
$('h1')
```
## Keypoints and Notes
