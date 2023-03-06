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

## Summary


