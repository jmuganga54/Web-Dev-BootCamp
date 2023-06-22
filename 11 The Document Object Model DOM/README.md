## Topic

On this section we are going to applying some of the lessons that we have learnt about Javascript. We will also learn about DOM (Document Object MOdel).

Also how to incorporate Javascript into HTML.

## Keywords && Notes

## Adding Javascript to Website

This is our HTML Page

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello</h1>

</body>
</html>
```

In CSS module, we learn different ways which we can add CSS to HTML Page, which we learn that there are three ways which you can use to add CSS to HTML Page, which are `inline`, `internal` and `external`.

Javascript works very similarly, you can add `inline`, `internal` and `external` js.

```
//inline Js: added on HTML tags
//index.html
<body onload = "alert('Hello')">
    <h1>Hello</h1>

</body>

//When the page loads, create an alert "Hello"
```

`Disadvantage of inline Javascript`: It is difficult to debug and it is not a good practice. Try to avoid if you can.

```
//Internal Js : can be added using script tag

//index.html
 <script type="text/javascript">
        alert('Hello')
</script>
```

```
/**
*External JS: can be added as an external file, so *create an external js file then link it to you *HTML Page
*/

//index.html
<script src="index.js"></script>

//index.js
alert("External JS");
```

`Position where we put our js code matters a greate deal`: With CSS we tend to put the CSS link in the head, so that it can be loaded first before any other code is loaded. `if you but JS script tag` at the bottom of the body, after everything has been loaded, then that it fine. But if you but it at the header, then something wrong will happen.

```
//index.js

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Website</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>

//index.js
document.querySelector("h1").innerHTML = "Good bye";


//Error
index.js:1 Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')
    at index.js:1:40

```

This means we are finding something which is not there (or it doesn't exit). So always make sure you but the `JS script tag` at the bottom of body tag, that ensure all the element have been loaded, then you can use Js to manipulate or access the exiting elements.

## Introduction of the DOM

In order to make website interactive we have to have ability to change part of the website in the fly.

The DOM (Document Object Model), the problem that it's solving is it `divide/catalogue the webpage into individual elements that we can modify and manipulate`

The task of converting the HTML page into the DOM is done by the `browser`, it turns all the HTML page element and there associate data into a tree structure.

![DOM](./imgs/DOM.png)
![Tree structure](./imgs/tree_structure.png)

```
//index.js
<body>

    <h1>Hello</h1>
    <input type="checkbox" />

    <button style=":active:color:red;">Click Me</button>

    <ul>
      <li class="list"><a href="https://www.google.com"></a> Google </li>
      <li class="list">Second</li>
      <li class="list">Third</li>
    </ul>

    <script src="index.js"></script>
  </body>
```

[HTML Tree Generator Extension](https://chrome.google.com/webstore/detail/html-tree-generator/dlbbmhhaadfnbbdnjalilhdakfmiffeg) - it helps visualize how the browser convert HTML code to DOM tree

If you write `document:` into a console, you will see the entire HTML file.

```
> document.firstElementChild - first element which is [html]

> document.firstElementChild.firstElementChild - first element child of the first element child which is [head]

> document.firstElementChild.lastElementChild which is the [body]

> document.firstElementChild.lastElementChild.firstElementChild which is [h1]


/**
*So once you have find the element then you can *manipulate it.
*/

let heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innnerHTML = 'Good Bye'

//change color of the element
heading.style.color = 'red'

//look on the entire document an input element
document.querySelector('input).click();

//heading -> [h1]

```

So you can see an element inside the DOM they can have `properties` and `Methods`
![properties_methods](./imgs/properties_methods.png)

```
//For example
//Car object can have properties and methods

//Properties
//get Property
car.color; //red

//set Property
car.numberOfDors = 0;

//Methods
//Call Methods
car.drive();
```

The only difference between the `Methods` and the `Properties` is the `methods` is something that the object can do. Note the methods have parenthesis at the end, while the properties they don't have that.

`Challenge` find the last element of the unordered list(ul) then change it's content to your name or any name, you must do that on the console.

```
//My try
document.querySelector('ul').lastElementChild.innerHTML = 'Schooling'
```

## Selecting HTML Elements with Javascript
This section we will learn how to element using javascript.

```
/*looks on the web page and search
* element with the specified tag name,
* it will get all the elements with that tag name
* note: getElement(s)ByTagName() - s plural
* Then you can pick the postion as normal array
*/
> document.getElementsByTagName('li')[1].style.color = 'purple'

//if we want to know the length, number of elements
>document.getElementsByTagName('li').length

/**
* getELementsByClassName - allow you to 
* get elements using class names, note (s)
* Even if there is one item, when wanting to 
* access element use [0]
*/
>document.getElementsByClassName('btn')[0].style.color = green


/**
* getElementbyId()
* note no plural just Element
* it provide only single element, first that match
* Id are unique on each web page
*/
> document.getElementById('title').style.color = 'pink'


/** 
*querySelector() - allow you to select element
* by using the selectors, using this way, you can
* combine different selectors to get element.
* Note when selecting id or classes, include #,.
* This only return the first element which match
* the selector
*/
> document.querySelector('#title').innerHTML = 'Programming'
> document.querySelector('.btn').style.color = 'green'
> document.querySelector('li a')
> document.querySelector('li.item')

/**
* querySelectorAll() - same as above,
* the only difference is it return more than
* one element or all the elements which match the 
* the selector
*
* Note if you want to change or manipulate the elements, you must include the index of that element
*/
> document.querySelectorAll('li')
```

So it is recommended to use `querySelector()` or `querySelectorAll`  to select elements from a webpage, cause it allow to select element using different complex selector compared to the rest of selectors.

`Challenge` Change the color of the `Google` link 
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Website</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 id="title">Hello</h1>
    <input type="checkbox" />

    <button class="btn" style=":active:color:red;">Click Me</button>

    <ul>
      <li class="list"><a href="https://www.google.com"></a> Google</li>
      <li class="list">Second</li>
      <li class="list">Third</li>
    </ul>

    <script src="index.js"></script>
  </body>
</html>

//My try
>document.querySelectorAll('li')[0].style.color = 'red'
OR
> document.querySelector('li a').style.color = 'red`
```

## Manipulating and Changing Styles of HTML Elements with Javascript

On this section we will be learning on how to change css properties using javascript.

The properties names they may look a little different. As you notes javascript name conversion tend to be camel case (ex:querySelector), this is standard for naming method and properties in javascript.

[HTML DOM Style Object](https://www.w3schools.com/jsref/dom_obj_style.asp)

When using Javascript the assigned values must be quoted "" or ''


 
```
document.querySelector('hi').style.color = 'red'
document.querySelector('h1').style.fontSize = '10rem'
```

`Challenge` change the background color of the btn using js
```
//My try
document.querySelector('.btn').style.backgroundColor = 'yellow'
```

## The Separation of Concerns Structure vs Behaviour

In order to keep our code tight, and easy to debug, we have to keep an idea of separation of concerned.

That means `HTML` is for you content only. `CSS` is there to style your elements, while `JS` is for behavior. 

```
/**
*.classList - provide all the class attached to *the element
*/
> document.querySelector('button`).classList

//Expected output: ['btn', value:'btn']

/**
* .add - used to add things
* Adding new class [invisible] to button element
*/
> document.querySelector('button').classList.add('invisible)

/**
*So you can create a class invisible in CSS and add
* it using javascript
*/

.invisible{
  visibility:hidden
}
```

So using the above method we can keep all of our styles in our css stylesheet, but turning on and off using Javascript.

```
/**
*.remove()
* you can remove a class using remove method
*/

> document.querySelector('button').classList.remove('invisible)

/**
* toggle() -means if the class has already been 
* applied remove it, if not add it.
*/

> > document.querySelector('button').classList.toggle('invisible)

```

`Challenge` create a huge class with font-size 10rem in Css then add it to h1 element

```
//My try

//styles.css
.huge {
  font-size: 10rem;
  font-weight:bold
}

//index.js
document.querySelector('h1').classList.add('huge')
```

This is how we separate concerns using HTML, CSS and JS

## Text Manipulation and The Tex Content Property

Up untill now, we see we can change the text instead an html element using `innerHTML` but there is another element that you can use which is `textContent`.

So you can think that there are doing the same thing, changing the content of selected html element,but in reality there are different, so the `innerHTML` do what it is saying it provide the inner html inside the selected html element, while the `textContent` provide just the text content.

```
//index.html
 <h1 id="title"><strong>Hello</strong</h1>

 //index.js
 document.querySelector('h1').innerHTML;
 //Expected output: <strong>Hello</strong>

 document.querySelector('h1').textContent;

 //Expected output: Hello
```

So this means if you are using `innerHTML` you can add html tag in fly, 

```
//index.html
 <h1 id="title"><strong>Hello</strong</h1>

 //index.js
 document.querySelector('h1').innerHTML = '<em>Good Bye<em>'

```

## Manipulating HTML Element Attributes
Now that we have seen how to manipulate style and text, the last things to know how to manipulate is the `atrributes`.

`Just reminder` attributes are anything which goes into a tag, so attributes can be `classes`,`id's`,`href on anchor tag`, `src on image tag` etc

```
//this can give you all the attributes on a tag
document.querySelector('a').attributes;

//Exptected output: NamedNodeMap {0: href, href: href, length: 1}

/**
* getAttribute() - provide the name of single 
* specified attribute
*/
document.querySelector('a`).getAttribute('href')

//Expected output:'https://www.google.com'


/**
* setAttribute - changes attribute, it
* takes two inputs (key, value), the 
* attribute name and the value
*/

document.querySelector('a').setAttribute('href','https://ihi.or.tz')

```

