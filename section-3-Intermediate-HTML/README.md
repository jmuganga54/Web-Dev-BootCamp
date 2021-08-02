## Intermediate HTML

On this section I learn some intermediate HTML elements `<table>` and `<form>`, together with different attributes these elements have.
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
`<form>` defines an easy boundary for the user agent to be able to identify all the elements to be submitted to the server. It also allows the user agent to attach convenient default behaviors to the form and the form's child elements. For example being able to hit enter and the form data is submitted. It also allowed for a place to specify where the data would go via attributes on the form element. So all this behavior is available by default without JavaScript. At the same time it also allows easier access in JavaScript via the DOM (form.elements collection)

`<table>`The HTML table is used for arranging data (such as text, images, links etc.) into the tabular design — basically, rows and columns.

`When to Use Tables` A table in HTML makes a lot of sense when you want to organize data that would look best in a spreadsheet. An HTML table is a great way to display things such as financial data, calendars, pricing, feature comparison, the nutrition facts information panel, bowling scores, and many other tabular data.

`When NOT to Use Tables`You should never use tables for layout. The thing is that table elements semantically describe tabular data and using them for other purposes is a breach of semantic duty.

The general rule is that the websites should be accessible. One part of accessibility is screen readers which read tables from top to bottom, left to right. With the tables in HTML, the order of how the site is presented is determined by visual choices instead of the accessibility choices. In cases like that, screen readers don’t always work as you’d want them to.



