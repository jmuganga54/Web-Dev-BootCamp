## Introduction to CSS
In this section the main topic is ntroduction to CSS, the following are topics discussed.

- Introduction to CSS
- Inline CSS
- Internal CSS
- External CSS
- How to Debug CSS Code
- The Anatomy of CSS Syntax
- CSS Selectors
- Classes vs Ids

## Keywords & Notes
### [Getting started with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)
In this article (link above] takes a simple HTML document and apply CSS to it, learning some practical things about the language along the way.

### [How CSS is structured](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured)
The link above shows how how CSS is structured

### [How CSS works](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works)
In this lesson(link above) we will take a look at how a browser takes CSS and HTML and turns that into a webpage.

### [Comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
A CSS `comment` is used to add explanatory notes to the code or to prevent the browser from interpreting specific parts of the style sheet. By design, comments have no effect on the layout of a document.

`Syntax`
Comments can be placed wherever white space is allowed within a style sheet. They can be used on a single line, or traverse multiple lines.

```
/* A one-line comment */

/*
A comment
which stretches
over several
lines
*/

/* The comment below is used to
   disable specific styling */
/*
span {
  color: blue;
  font-size: 1.5em;
}
*/

```

### [background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
The `background-color` CSS property sets the background color of an element.

`Syntax`
```
/* Keyword values */
background-color: red;
background-color: indigo;

/* Hexadecimal value */
background-color: #bbff00;    /* Fully opaque */
background-color: #bf0;       /* Fully opaque shorthand */
background-color: #11ffee00;  /* Fully transparent */
background-color: #1fe0;      /* Fully transparent shorthand  */
background-color: #11ffeeff;  /* Fully opaque */
background-color: #1fef;      /* Fully opaque shorthand  */
```
Site to find beautiful colors [Color Hut](https://colorhunt.co/)

### [CSS Default Values Reference](https://www.w3schools.com/cssref/css_default_values.asp)
By default, the browser has some pre-defined css values to html element, see the reference above.

### [border-Style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
The *border-style* `shorthand CSS` property sets the line style for all four sides of an element's border.

#### Constituent properties
This property is a shorthand for the following CSS properties:
* border-bottom-style
* border-left-style
* border-right-style
* border-top-style

`Syntax`
```
/* Keyword values */
border-style: none;
border-style: hidden;
border-style: dotted;
border-style: dashed;
border-style: solid;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;

/* top and bottom | left and right */
border-style: dotted solid;

/* top | left and right | bottom */
border-style: hidden double dashed;

/* top | right | bottom | left */
border-style: none solid dotted dashed;

/* Global values */
border-style: inherit;
border-style: initial;
border-style: revert;
border-style: unset;
```
### [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
The `box-sizing` *CSS* property sets how the total width and height of an element is calculated.

By default in the `CSS box model`, the width and height you assign to an element is applied only to the element's `content box`. If the element has any border or padding, this is then added to the width and height to arrive at the size of the box that's rendered on the screen. 

The box-sizing property can be used to adjust this behavior:

* `content-box` gives you the default CSS `box-sizing` behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.

* `border-box` tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements.

`Syntax`
```
box-sizing: border-box;
box-sizing: content-box;

/* Global values */
box-sizing: inherit;
box-sizing: initial;
box-sizing: revert;
box-sizing: unset;
```

### [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
The `height` CSS property specifies the height of an element. By default, the property defines the height of the `content area`. If `box-sizing` is set to `border-box`, however, it instead determines the height of the `border area`.

`Syntax`
```
/* <length> values */
height: 120px;
height: 10em;

/* <percentage> value */
height: 75%;

/* Keyword values */
height: max-content;
height: min-content;
height: fit-content(20em);
height: auto;

/* Global values */
height: inherit;
height: initial;
height: revert;
height: unset;
```
### [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
The width CSS property sets an element's width. By default, it sets the width of the `content area`, but if `box-sizing` is set to `border-box`, it sets the width of the `border` area.

```
/* <length> values */
width: 300px;
width: 25em;

/* <percentage> value */
width: 75%;

/* Keyword values */
width: max-content;
width: min-content;
width: fit-content(20em);
width: auto;

/* Global values */
width: inherit;
width: initial;
width: revert;
width: unset;

```
### [border-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
The `border-width` *shorthand* CSS property sets the width of an element's border.

#### Constituent properties
This property is a shorthand for the following CSS properties:

* border-bottom-width
* border-left-width
* border-right-width
* border-top-width

`Syntax`
```
/* Keyword values */
border-width: thin;
border-width: medium;
border-width: thick;

/* <length> values */ border-width: 4px;
border-width: 1.2rem;

/* vertical | horizontal */
border-width: 2px 1.5em;

/* top | horizontal | bottom */
border-width: 1px 2em 1.5cm;

/* top | right | bottom | left */
border-width: 1px 2em 0 4rem;

/* Global keywords */
border-width: inherit;
border-width: initial;
border-width: revert;
border-width: unset;
```
### [`<link>`: The External Resource Link element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
The`<link>` HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.

To link an external stylesheet, you'd include a <link> element inside your <head> like this:

```
<link href="main.css" rel="stylesheet">
```

### [Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)
Sometimes when writing CSS you will encounter an issue where your CSS doesn't seem to be doing what you expect, for more read the link above.

### [Order of precedence for CSS](https://stackoverflow.com/questions/25105736/what-is-the-order-of-precedence-for-css)
There are several rules ( applied in this order ) :

1. `inline css` ( html style attribute ) `overrides` css rules in style tag and css file
2. a `more specific selector` takes precedence over a less specific one
3. `rules that appear later` in the code override `earlier rules` if `both` have the `same specificity`.
4. A css rule with `!important` always takes precedence.

Specificity for single selectors from highest to lowest:
* ids (example: #main selects `<div id="main">`)
* classes (ex.: .myclass), attribute selectors (ex.: `[href=^https:]`) and pseudo-classes (ex.: :hover)
* elements (`ex.: div`) and `pseudo-elements (ex.: ::before)`

### [CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
Use this *CSS reference* to browse an `alphabetical index` of all of the standard `CSS` properties, `pseudo-classes`, `pseudo-elements`, `data types`, `functional notations` and `at-rules`. You can also browse key CSS concepts and a list of `selectors organized by type`. Also included is a brief `DOM-CSS` / CSSOM reference.`

### [The Anatomy of a CSS Rule](https://css3-tutorial.net/introduction/anatomy-and-syntax-of-css/)
```
h1 {
  color: DeepSkyBlue;
}
```
What we have here is a `selector` with one `property` and one `value` - these are the core concepts of CSS and you should try to remember their names. In above example, `h1 is the selector name`, `color is the property` and `DeepSkyBlue is the value`.

In between these three concepts, you see a variety of `special characters:` There's the `curly braces` around the property and value, there's the `colon` separating the property from the value and there's the `semicolon` after the value. Each of them makes it easy for the browser to parse and understand your CSS code: The `curly braces` allow you to group several properties into the same rule (selector), the `colon` tells the parser where the property ends and the value starts, and the `semicolon` tells the parser where the value ends.

```
h1, h2, h3 {
	color: DeepSkyBlue;
	background-color: #000;
	margin: 10px 5px;
}

h2 {
	color: GreenYellow;
}
```
### [CSS Classes](https://blog.hubspot.com/website/what-is-css-class)
A `CSS class` is an attribute used to define a group of HTML elements in order to apply `unique formatting` to those `elements` in CSS. This group can contain `more than one type of element.`

`Class names` don't have to be one word either. A widely-accepted practice for creating CSS classes is to use `lowercase and replace spaces with hyphens`. Some examples include `.bright-blue` and `.fancy-text.`

[`More Reading About Classes`](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

`Create a Class` name of class is pastoral

*Example*

`HTML FILE`
```
<h1>Not green</h1>
<p class="pastoral">Green</p>
<p>Not green</p>
<p><a href="default.asp" target="_blank" class ="pastoral">The link</a> that appears within this paragraph is green.</p>
```

`CSS FILE`
```
.pastoral {
color: green;
}
```
#### Pseudo-Classes
A CSS `pseudo-class` is a keyword added to a selector that specifies a special `state of the selected element(s)`. For example,`:hover` can be used to change a button's color `when the user's pointer hovers over it`.

##### Common Pseudo-Classes for Link Styling
* `:link` represents a link that the user hasn't visited.
* `:visited` indicates a link that's been visited by the user before.
* `:hover` shows a link with the user's cursor over it.
* `:active` marks a link that's being pressed down.

```
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

### [ID selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)
`ID selectors` work much like `class selectors`, only more stringently. With this method, you have a `unique ID for a single element per page`, making it impossible to `reuse` styles.

The CSS `ID selector` matches an element based on the value of the element’s id attribute. In order for the element to be selected, its id attribute must match exactly the value given in the selector.
```
/* The element with id="demo" */
#demo {
  border: red 2px solid;
}
```

### [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
Different `CSS selectors` have varying weights, in certain cases. When two or more rules conflict on the same element, the `more specific` one applies — which is what `CSS specificity` is about. The ranking of style declarations by certain browser rules determines the ultimate appearance of an element.

`Specificity` is the means by which browsers decide which CSS property values are the `most relevant` to an element and, therefore, `will be applied`. `Specificity` is based on the `matching rules` which are composed of different `sorts of CSS selectors`.

### [Class vs Id](https://stackoverflow.com/questions/19914617/css-ids-and-classes/19914768)
There are several differences between `ids` and `classes`. Probably most importantly there is a semantic difference. An `Id` needs to be `unique` (actually you `html is invalid` if you use the `same id twice in the document`) and identifies special elements in your HTML Document, `classes` are there to `group elements` which have `something in common`.

1. Searching for `id` in the HTML Tree is faster than `class` because the css processor stops at the first matching element it finds. (Thus `id` css selectors are faster).

2. `Ids` and `classes` have different [`specificity`](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/). Since `ids` are `unique` in the document, they have `higher specificity` than `classes`. This is important in bigger projects where you have a lot of CSS rules where a lot of overwriting occurs.

3. The difference between classes and ids is even greater once you work with javascript.

Defining new elements leads you markup to be invalid, that's why the last option is not a good idea.


## Summary
`What is Css?` `CSS` stands for `C`ascading `S`tyle `S`heets. Its purpose is to style markup languages (like HTML or XML). Therefore, CSS is worthless on its own, unless associated with an HTML document.


`How CSS works`How CSS works is by `selecting` an HTML element (like a paragraph), choosing a `property` to alter (like the color), and applying a certain `value` (like red):

```
p{ color: red;}
```
`Where do I write CSS?`

* `CSS as an attribute (INLINE CSS)`
⋅⋅⋅You can write CSS directly on an HTML elements, by using the `style` attribute:
```
<p style="color: red;">This text is important.</p>
```
* `CSS in the <head> (INTERNAL CSS)`
⋅⋅⋅You can use a `<style>` tag in the `<head>` of your HTML document:

```
<html>
  <head>
    <title>Hello World</title>
    <style type="text/css">
      p{ color: red;}
    </style>
  </head>
  <body>
    <p>This paragraph will be red.</p>
  </body>
</html>
```
* `CSS in a separate file (EXTERNAL CSS)`
⋅⋅⋅You can write your CSS in a separate file with a `.css` extension, and then link it to your HTML by using the `<link>` HTML tag.

⋅⋅⋅`css File`
```
p{ color: red;}
```
⋅⋅⋅`HTML File`
```
<html>
  <head>
    <title>Hello World</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <p>This paragraph will be red.</p>
  </body>
</html>
```
⋅⋅⋅It is the HTML document who “calls” the CSS file, in this case a file called `style.css` located in the same folder as the HTML file.

⋅⋅⋅This `3rd method (EXTERNAL CSS)` of using a separate CSS file is `preferred`.

`Why not style directly in the HTML?`

⋅⋅⋅Because we want to separate the `content` (HTML) from its `presentation` (CSS).

```
It makes maintenance easier as well: the same CSS file can be used for a whole website. It provides `flexibility`: focus on the content on one side, the styling on the other. SEO purposes, different concerns.
```





