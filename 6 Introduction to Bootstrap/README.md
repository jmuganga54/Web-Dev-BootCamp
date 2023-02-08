## Introduction to Bootstrap

In this section the main topic is Introduction to Bootstrap, the following are topics discussed.

- What is Bootstrap
- Installing Bootstrap
- Web Design - Wireframing
- The Bootstrap Navigation
- Bootstrap Navigation Bar
- Setting Up our New Project
- Bootstrap Grid Layout System
- Bootstrap Container
- Bootstrap Buttons & Font Awesome

## Keywords & Notes

### [What is Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.

In summary, Bootstrap is a bunch html,css and js code, written to help design websites interface fast and easily.

### [Installing Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

There are many ways to install bootstrap on your project, you can use the actual bootstrap code, cdn, etc., but the recommended better way is to use cdn, which is `content delivery network`, which help to access and use bootstrap code anywhere.

### [Wireframe vs Mockup vs Prototype](https://www.lucidchart.com/blog/wireframes-vs-mockups)

[Planning a simple website](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

#### What is wireframe?

A `wireframe` is a skeletal blueprint or framework that outlines the basic design and functions of a user interface (such as a website or application).

`Wireframes` can be `low-fidelity` or `high-fidelity`, depending on your needs and preferences. A `low-fidelity wireframe` is often sketched out on `paper` or a `whiteboard` and is a useful way to brainstorm the `basic outline for your design`. A `high-fidelity wireframe` has more detail and may include simple workflows and `interactions`.

#### What is mockup?

A mockup is the next, more in-depth iteration of the wireframe outline. A mockup is a static wireframe that includes more stylistic and visual UI details to present a realistic model of what the final page or application will look like.

#### What is prototype?

A prototype is an early model of a product or design built to test the concept.

[Design Pattersn](http://ui-patterns.com/patterns)
[Websites featured on awwwards.com](https://www.awwwards.com/websites/com/)
[Dribble.com](https://dribbble.com/search/website)
[Balsamiq cloud](https://balsamiq.cloud/)

### [Navbar](https://getbootstrap.com/docs/5.1/components/navbar/)

```
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">tindog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  ml-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Download</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>

```

### [Grid](https://getbootstrap.com/docs/4.0/layout/grid/)

```
<div class="row">
    <div class="col-lg-2 col-md-3" style="background-color:grey; border:1px solid black">
        col1
    </div>
     <div class="col-lg-2 col-md-3" style="background-color:grey; border:1px solid black">
        col1
    </div>
     <div class="col-lg-2 col-md-3" style="background-color:grey; border:1px solid black">
        col1
    </div>
     <div class="col-lg-2 col-md-3" style="background-color:grey; border:1px solid black">
        col1
    </div>
     <div class="col-lg-2 col-md-3" style="background-color:grey; border:1px solid black">
        col1
    </div>
     <div class="col-lg-2 col-md-3" style="background-color:grey; border:1px solid black">
        col1
    </div>

</div>
```

### [Containers](https://getbootstrap.com/docs/4.0/layout/overview/#containers)

`Containers` are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).

```
<div class="container" style="background-color:yellow">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec. Facilisis gravida neque convallis a cras. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Tempus quam
</div>

<div class="container-fluid" style="background-color:red">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec. Facilisis gravida neque convallis a cras. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Tempus quam pellentesque nec nam aliquam sem. Felis eget velit aliquet
</div>
```

### [Button](https://getbootstrap.com/docs/5.1/components/buttons/)

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

_Examples_
Bootstrap includes several `predefined button styles`, each serving its own semantic purpose, with a few extras thrown in for more control.

```
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```

#### Button tags

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

```
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
```

#### Outline Buttons

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-\* ones to remove all background images and colors on any button.

```
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
```

#### Sizes

Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.

```
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
```

#### Disable State

Make buttons look `inactive` by adding the `disabled` boolean attribute to any `<button>` element. Disabled buttons have `pointer-events:` none applied to, preventing hover and active states from triggering.

```
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
```

#### Block Button

Create responsive stacks of full-width, `“block buttons”` like those in Bootstrap 4 with a mix of our display and gap utilities. By using utilities instead of button specific classes, we have much greater control over spacing, alignment, and responsive behaviors.

```
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>

```
#### Designing websites
When designing website its important to think about the hierarchy in which you want things to be displayed to the user, you can use font size, font weight, outline, etc, to display things that you want you user to see first, to the least displayed items.

#### Rotating images using css

Use can rotate the image using css see the [image rotation documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate)

#### Font Size Change
You can change the icon size using (fa-4x), each image has attribute which you can use to change the size of it.

> Note
It's is not necessary or mandatory to change the layout of the section like features section using the `container-fluid`, you can use the padding and margin to assign the size around each section.

### [FontAwesome](https://fontawesome.com/)

## Summary

The CSS properties presented in this intermediate section add another layer of detail to those already learnt in the basics section.
