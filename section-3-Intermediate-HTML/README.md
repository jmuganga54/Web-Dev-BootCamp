## Introduction to HTML

On this section the main point of discussion is introduction to HTML, some basic code to understand. Some of the topics
discussed in this section are:

- Introduction to HTML
- The Anatomy of an HTML Tag
- Basic element tags in HTML

## Keywords & Notes

### `<table>`*: The Table element*
The `<table>` HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.

```
<table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>
```
#### Table Attributes
##### border
This integer attribute defines, in pixels, the size of the frame surrounding the table. If set to 0, the *frame* attribute is set to void

##### colspan
This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).

##### rowspan
This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (`<thead>`, `<tbody>`, `<tfoot>`, even if implicitly defined), that the cell belongs to. Values higher than 65534 are clipped down to 65534.

### `<form>`
The `<form>` HTML element represents a document section containing interactive controls for submitting information.

```
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>

```
#### `<input>`: The Input (Form Input) element
The `<input>` HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The `<input>` element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.
*See different types of input* [<input> types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)

```
<!-- Form which will send a GET request to the current URL -->
<form>
  <label>Name:
    <input name="submitted-name" autocomplete="name">
  </label>
  <button>Save</button>
</form>

<!-- Form which will send a POST request to the current URL -->
<form method="post">
  <label>Name:
    <input name="submitted-name" autocomplete="name">
  </label>
  <button>Save</button>
</form>

<!-- Form with fieldset, legend, and label -->
<form method="post">
  <fieldset>
    <legend>Title</legend>
    <label><input type="radio" name="radio"> Select me</label>
  </fieldset>
</form>
```


## Summary
HTML is the universal markup language for the Web. HTML lets you format text, add graphics, create links, etc., and save
it all in a text file that any browser can read and display.