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
> Take an example of below code, jQuery allow us to write a shorter code compared to pure Javascript, which is a lot easy to read, debug and write.

```
//Vanilla JS
document.querySelector('h1')

//jQuery
jQuery('h1')

//Shorter way to write jQuery
$('h1')
```

## Keypoints and Notes

## How to Incorporate jQuery into Websites

When you go to [query.com](https://jquery.com/), you can download jQuery code ,use CDN or use npm package.

If you want to use [google CDN](https://developers.google.com/speed/libraries#jquery), you can copy the script taga

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
<script src="./app.js"></script>
```

The position you put your jQuery script is very important, if you put it on head section include the following

```
$(document).ready(function(){
    $('h1').css('color','red')
})
```

But if you put it at the button of body section, there is no need to put that line.

## How Minification works to Reduce File Size
`Minification` is the way to reduce the size of the file, by removing spaces and make the file easy to transport.

[Minifier](minifier.org), you can use this website to minify your css or javascript code.

## Selecting Element with JQuery
The most important think we can do is to select the element in javascript, inorder to manipulate elements.

```
document.querySelector('h1')

$('h1')

document.querySelectorAll('button')

$('button')
```

In `jQuery` there is no difference between selecting one and selecting many. 
