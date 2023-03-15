## Topic

This section is the continuation of the previous section still working on the Tindog project

## Keywords and Notes

### The Bootstrap Carousel Part 1 and Part 2

In this section we will be building a Carousel which will display images as slideshow.

[carousel | Bootstrap Compoment Doc](https://getbootstrap.com/docs/5.3/components/carousel/)

```
  <div id="testimonial-carousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
              <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
              <img class="testimonial-image" src="images/dog-img.jpg" alt="dog-profile">
              <em>Pebbles, New York</em>

        </div>
        <div class="carousel-item" >

          <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
          <img class="testimonial-image" src="images/lady-img.jpg" alt="lady-profile">
          <em>Beverly, Illinois</em>


        </div>
        <!--Next and Back Button-->
         <button class="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>

    </div>

```

### The Bootstrap Card

In this section we will be building Bootstrap Cards and use it on our project. [Bootstrap Card Doc]()

> HTML Code

```
 <section id="features">
      <div class="row">
        <div class="col-lg-4 feature-box">
          <i class="fa-solid fa-circle-check fa-4x icon"></i>
          <h3>Easy to use.</h3>
          <p>So easy to use, even your dog could do it.</p>
        </div>

        <div class="col-lg-4 feature-box">
          <i class="fa-solid fa-bullseye fa-4x icon"></i>
          <h3>Elite Clientele</h3>
          <p>We have all the dogs, the greatest dogs.</p>
        </div>

        <div class="col-lg-4 feature-box">
          <i class="fa-solid fa-heart fa-4x icon"></i>
          <h3>Guaranteed to work.</h3>
          <p>Find the love of your dog's life or your money back.</p>
        </div>
      </div>
    </section>
```

> CSS Code

```
/* Pricing */
#pricing{
    padding: 100px;
    text-align:center;
}

.pricing-column{
    padding: 3% 2%;
}

```

### The CSS Z-index Stacking Order

You can change the order of arrangement on how elements are organized or stacking on each other on the a page using using the html code, or you can use the z-index to change the order of arrangement or stacking order of elements on the page.

`Z-index` only works when things are positioned, this means when element are either positioned `absolute`,`relative`, or `fixed`, not `static` cause this is the same as no position.

> Side Note
> Absolute position affect the positions of an element, while relative position don't affect, until you use `top, bottom,left,right`.

The higher the `z-index` value that means the element will be at top, the lower the `z-index` values that means the element will be at the bottom. All the element have the z-index of 0, by default.

[z-index Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

`Note` They are many factors that can affect the order or the stacking of element on the page, just be aware.

> HTML Code

```
<div class="red">
    Red

</div>
  <div class="yellow">
    Yellow
</div>


<div class="blue">
    blue
</div>

```

> CSS

```
div{
    height:100px;
    width:100px;
    border: 1px solid black;
    position: absolute;
}

.red{
    background-color:red;
    z-index: 2;
}

.yellow{
    background-color:yellow;
    left:20px;
    top:20px;
    z-index:1;

}
.blue{
    background-color:blue;
    left:40px;
     top:40px;
     z-index: 0;
}
```

### Media Query Breakpoints

Media query breakpoints assist on making the website responsive to the view, it is useful when you want to have a specific tune on way things are arranged on the website, to accommodate mobile or desktop view.

[Media Query Breakpoints](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

```
//template
@media <type> <feature> {

}
```

> Example

```
//html
<h1>Hello World</h1>
```

```
//css
h1{
    color:red;
}

@media (min-width:370px) and (max-width:992px){
    h1{
        font-size:10rem;
        color:black;
    }
}
```

### Code Refactor

> Has a Programmer all the try to write dry code `DON'T REPEAT YOURSELF`, the opposite of this is wet code `WE ENJOY TYPING`.

This is why we always try to `refactor` our code, on regular basis in order to keep it performant and easy to read(readability)

This mean for example in CSS, try to combine element of the same feature and assign one class to it, on any way that can prevent repeating yourself.

It is important to `refactor` your code and maintaining it, to make it easy to be readable with other people.

When performing Code Refactoring, be aware of the following things.

1. Readability: make it a number one priority, make your code easy to understand.

2. Modularity: this relates to how easy it's to reuse your code or how easy you can narrow down find issues on your code. For example if part of your website broke down, how easy can it be to narrow down and find the problem on your code.

3. Efficiency: how fast your code run.

4. Length: the length of your code. Writing down you code in a short form. But this may not be the main goal.

[Code Golf](https://codegolf.stackexchange.com/)

### Practice Refactor

Less repeating much better structure and more modular code, those are the things that we are aiming more.

`Modularity`, being able to narrow / drill down, to a specific section of a page very easily and fast, and fix the problem which occur or change the style of that particular section, without affecting the rest of the website.

Normally, as you go along writing the code, as you realize the opportunities to refactor, you will do there and then, rather than waiting for larger refactoring section, which can be a form of procrastination, which it may not happen.

### Advanced CSS Combining Selector

On this section we are going to discuss on how we can combine different css selector.
The following are different strategies that are used to combine and use different css selector.

1. `Multiple Selectors`

Multiple selector involves combining more than one selectors.So instead of writing invidual selector you can use multiple selector, to combined different css selector into a single defining.

> Format

```
selector1, selector2{

}

> Example
h1, h2, h3, h3, h4{

}
```

2. `Hierarchial Selector`

This is another way to organize different selectors, based on their hierarchical structure in html code.

The selectors are ready, from right to left. Note the space between the selectors

> Format

```
selector1 selector2{

}
> Example
div .container{

}
Meaning: Element with `class container` which is containing in a `div`.
```

3. `Combined Selector`

This combine selector, all its selectors must be of the same element.

The selectors are ready, from left to right. There is not space between the selectors.

> Format

```
selector1.selector2{

}
or
selector1#selector2{

}
> Example
div.container{

}
Meaning div with the class container.
```

### Refactoring our Website Part 2

On this section we continue to refactor our website, by creating two classes `white-section` and `colored-section`. Both of the class will be applied to section which have white background and colored background accordingly.

This will prevent repetition ourselves by making all the section white section to have the same property of font-color and section with colored background to have the same property of background color + font color. Instead of putting these properties on different sections, which lead to repetition.

### Advanced CSS Selector Priority

```
<h1 id="headers" class="title" style ="color:orange"></h1>
```

> Things to Know about CSS Selector Priority

- `Element tag` have lowest priority of all

```
h1{
  color:red
}
```

- Compared to `element tag`, `classes` have higher priority

```
.title{
  color:yellow
}
```

- Id have higher priority compared to `element tag` and `classes`
- `Inline Css` are more specific with higher priority even than `id`, `external css` or `internal css`

> How to Prevent conflicting rules when using selector

1. Use`ids` very few times, don't try to use them when you can use the `classes`. First consider to you the classes instead of going straight to `ids`.
2. When applying class to your element, only use one class. Instead of having many classes.
3. Avoid `inline css` at all cost.

### Completing the Website
So it is important to arrange elements on CSS file to make it modular and readable by implementing a better structure. For example on the website that we built we put html element first on css file then, followed by headings, sections, navigational bar, buttons, title, features, testimonials, pricing, cta sections, etc.

This  can be very easy or help when finding a section of the website which have broken or having a problem and trying to fix it. Organizing your CSS file is very important to help with fixing problems and finding issues when arising.

> Note: JUst because something repeat itself, it's not a good enough reason to get lid of it. On some sections it can be very hard to refactor your code, even if you find repeated code.

## Summary
