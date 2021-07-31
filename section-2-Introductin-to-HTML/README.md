## Topic

On this section the main point of discussion is introduction to HTML, some basic code to understand.Some of the topics discussed in this section are:

- Introduction to HTML
- The Anatomy of an HTML Tag
- Basic element tags in HTML

| Keywords                                      | Notes                                                                                                                |
| --------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| `<h1>–<h6>` The HTML Section Heading elements | HTML elements represent six levels of section headings. `<h1>` is the highest section level and `<h6>`is the lowest. |

```
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>

```

|
| `<hr>` The Thematic Break (Horizontal Rule) element | Break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.|
| Site to read Documentation |[MDN Web Docs](https://developer.mozilla.org/en-US/), [w3schools](https://www.w3schools.com/), [devdocs](https://devdocs.io/) |
| `<br>` Line break | This is used to enter break lines |

| `<hr>` Horizontal Rule | Inserting a line to separate content |
| Anatomy of an HTML Tag | (start tag) `<h1>` (Content) `</h1>` (end tag)|
|Self-closing tag | Example `<br>` Tag with no closing tag(end tag) |
| HTML Attribute | Example `<hr size="3">` Give more information to the browser modification to that HTML element|
| Comments in HTML | `<!--Comment-->`This is how you insert comment in HTML|
| HTML boiler plate|

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>

```

|
|`<!DOCTYPE html>`| What type of HTML we are using|
|`<html></html>`| It consist of `<head></head>` and `<body></body>`|
|`<head></head>`| It tells the browser how it should handle the page,
For example, we might have a title tag `</title> which tells the browser what is the title of this particular page `<meta>` tag defines metadata about an HTML document. Metadata is data (information) about data.Metadata will not be displayed on the page, but is machine parsable.

```
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

```

|
|`<body></body>` Defines the document's body.|The `<body>` element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc|
| `<em>` The Emphasis element|Element marks text that has stress emphasis|

|`<i>` vs. `<em>`|
The `<em>` element represents stress emphasis of its contents, while the `<i>` element represents text that is set off from the normal prose, such a foreign word, fictional character thoughts, or when the text refers to the definition of a word instead of representing its semantic meaning|
|`<strong>` The Strong Importance element|Element indicates that its contents have strong importance, seriousness, or urgency|
|`<b>` vs. `<strong>`| The `<strong>` element is for content that is of greater importance, while the `<b>` element is used to draw attention to text without indicating that it's more important.|
|`<ul>` The Unordered List element |
The `<ul>` HTML element represents an unordered list of items, typically rendered as a bulleted list.

````

<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>

```|
|`<ol>` The Ordered List element | The `<ol>` HTML element represents an ordered list of items — typically rendered as a numbered list.

````

<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>

```
|
|`<img>` The Image Embed element |
The <img> HTML element embeds an image into the document.

```

<img src="https://source-of-image"
     alt="if-the-image-failed-to-load">

```
|
|`<a>` The Anchor element | The `<a>` HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

```

<ul>
  <li><a href="https://example.com">Website</a></li>
  <li><a href="mailto:m.bluth@example.com">Email</a></li>
  <li><a href="tel:+123456789">Phone</a></li>
</ul>

```
|

## Summary
HTML is the universal markup language for the Web. HTML lets you format text, add graphics, create links, etc., and save it all in a text file that any browser can read and display.





```
