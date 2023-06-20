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

In CSS module, we learn different ways which we can add CSS to HTML Page, which we learn that there are three ways which you can use to add CSS to HTML Page,  which are `inline`, `internal` and `external`.

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