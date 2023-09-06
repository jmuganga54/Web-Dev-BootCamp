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

## Manipulating Styles with JQuery

```
//selecting the element and assign css property and value
$('h1').css('color','green) //setting the value

//get the value of property
$('h1').css('color')

//Expected output: rgb(0, 128, 0)

$('h1').css('font-size')
//Expected output: 32px
```

> Separation of concerned

```
Js - behaviour
css - appearance
HTML - Content
```

```
//css
.big-title{
    fon-size: 10rem;
    color:yellow;
    font-family:cursive;
}

.margin-50{
    margin:50px;
}

//Js
//add Class Single class
$('h1').addClass("big-title")

//add Multiple Classes
$('h1').addClass("big-title margin-50")

//remove Class
$('h1').removeClass("big-title")

//checking if has class
$('h1').hasClass("margin-50")
```

The above, is the much better way of separating behaviors from our styles.

## Manipulating Text with jQuery

Inorder the change the text of selected jQuery there two ways to going about it.

First way, you can select an element and use `.text()` and ad the text you want

```
$('h1').text('Joseph Muganga')

//This will change Hello to Joseph Muganga
```

But if you use to select all the button and change it's text, we can do the same, but this will change the text of every button to have the same text.

```
$('button').text('Joseph Muganga')
```

`.html()` it help us to insert not only the text, but also the html code

```
$('button').html('<strong>Joseph Muganga</strong>')
```

Most of the things you do in jQuery you use methods to implement them, which we access them using `.` notation.

## Manipulating Attributes with jQuery

On this section we are going to learn on how to manipulate attributes using jQuery.

```
$("img").attr("src")

//getting the attribute name
console.log($("img").attr("src"));

//Expected outpu: drum.png

```

So in adding of getting the value of the attribute, you can set the value of the attribute.

```
$("a").attr("href","https://vcptu.ihi.or.tz")
```

Remember a class is also a html attribute, so we can use `.attr` to get it's value, of all applied class at h1

```
console.log($('h1').attr('class'))

//Expected output: big-title margin-50
```

## Adding EventListeners with JQuery

On this section we are going to learn how to add event listeners using jQuery.

```
$('h1').click(function(){
    $('h1').css("color", "purple" )
})
```

If we want to add event listeners to all the five button that we have, we have to write a for loop.

```
//Vanilla Js
for(let i=0; i<5; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        document.querySelector('h1').style.color = 'purple';
    })
}
```

```
//using jQuery
$('button').click(function(){
    $('h1').css('color','purple')
})
```

If you want to listen for keypress event

```
$("input").keypress(function (event) {
  console.log(event.key);
});

```

Another way to detech events using jQuery is to use `.on`

```
$('h1').on('mouseover',function(){
    $('h1").css("color","purple")
})
```

## Adding and Removing Elements with jQuery

When our website is live and running we can use jQuery to add new elements on the fly.

```
$("h1").before("<button>New</button>")
```

As the example above, it means we can create an html element at anytime we want by using codes.

There is also the `after()` function which create an element after the element

```
$("h1").after("<button>New</button>")
```

Also there is `prepend` and `append`. `Prepend` will add the new html element into the item you selected, just after the opening tag (inside).

```
$("h1").prepend("<button>New</button>")
```

`Append` will add a new html element, inside but after the text before the end tag.

```
$("h1").append("<button>New</button>")
```

If you want to remove element is really simple, all you need to do is

```
$("button").remove()
```

The above will get rid of all button element in our page.

## Website Animations with jQuery

JQuery makes really easy to implement some common animation which you may want to do when creating websites.

```
$("button").on("click", function(){
    // $("h1").css("color","purple")
     $("h1").hide()
})
```

If we want to show the only thing to do is

```
$("h1").show();
```

We can toggle

```
$("button").on("click", function () {
  $("h1").toggle();
});
```

We can also use fadeOut() - will reduce the opacity then it will hide it.

```
$("button").on("click", function () {
  $("h1").fadeOut();
});
```

The opposite of `fadeOut()` is `fadeIn()`

```
$("button").on("click", function () {
  $("h1").fadeIn();
});
```

All this comes with Toggle so you can `fadeToggle()

```
$("button").on("click", function () {
  $("h1").fadeToggle();
});
```

Another one is `slideDown()` and `SlideUp`

```
$("button").on("click", function () {
  $("h1").slideUp();
});


$("button").on("click", function () {
  $("h1").slideDown();
});

```

Slide comes with `slideToggle`, this can be useful for something like drop down menu
```
$("button").on("click", function () {
  $("h1").slideToggle();
});
```

Instead of using this predefined ones, you can use `.animate()`, this allows you to define custom CSS that you gradually want to animate towards.

```
$("button").on("click", function () {
  $("h1").animate({opacity:0.5})
});
```

Thing to remember about `animate()` methods, you only add CSS rules with numeric value. Stick with things that have numeric value. For example {margin: "20%"} but not things like {color: "red"}

```
$("button").on("click", function () {
  $("h1").animate({ margin: "20%" });
});
```

If you want to set up more the one rule you can do that by chaining together.

```
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
```
In programming, never try to remember or memorize anything, there is alway documentation and there is world wide web to help you in exactly moment you need the information.