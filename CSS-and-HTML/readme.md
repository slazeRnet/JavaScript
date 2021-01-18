# CONTENT
*Based on: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)*
#### [1. Selectors](./)
#### [2. Syntax and Semantics](./)
#### [3. Values](./)

---
#### [4. Layout]

- Block formatting context
- Box model
- Containing block
- Layout mode
- Margin collapsing
- Replaced elements
- Stacking context
- Visual formatting model
---
#### [5. DOM-CSS/ CSSOM]


___
# [1. Overview](#1-overview-1)


---
# 4. Layout

### 4.1. [Grid layout](./EXERCISE/grid-layout.html)

#### 4.1.1. grid pattern aranges is items like table:
```html
<div class="wrapper">
    <div>
    lorem*10
    </div>
    <div>
    lorem*10
    </div>
    <div>
    lorem*10
    </div>
</div>
```
the css:

```css
.wrapper{
    display: grid;


}
/* select each child div of grid */
.wrapper > div{
background: #eee;
/* in order for the grid to work it needs styling rules defined */
grid-template-columns: 70% 30%;
}

.wrapper > div {
            background: #eee;
            padding: 1em;
        }
        /* every odd column will have different shade of gray but padding is persistant */
        .wrapper > div:nth-child(odd) {
            background: #ddd;
            padding: 1em;
            /* to set space between each column set grid-gap */
            grid-gap: 1em
        }
```
- <code>grid-gap: 1em;</code> equals 
<code>
grid-column-gap: 1em;
<br>
grid-row-gap: 1em;
</code>

####  4.1.2. Splitting container elements into fractions using fr unit
- To prevent issues with margin and padding use fr insted of %.
- Example:
```
.wrapper{
    display: grid;
    grid-template-columns: 1fr, 1fr, 1fr;
}
```

#### 4.1.3. Repeating grid pattern
.wrapper{
    <!-- this will repeat 4 times the 1fr 2 fr grid pattern -->
    grid-template-dcolumns:repeat(4, 1fr, 2fr)
}
#### 4.1.4.  grid-auto-rows
- specifies the height of the rows
Grid min and max values will arrange according to the volume of its content
<br>
<code> grid-auto-rows: minmax(auto, auto); </code>
<br>
fixed value:
>grid-auto-rows: 50px;
<br>
- set minimal ammount of height according to the content:
>grid-auto-rows: min-content;
### positioning items on the main axis
- positioning child elements with:
> justify-items: start/ center/ end;

In the following example we have a simple 2 x 2 grid layout. Initially the grid container is given a justify-items value of stretch (the default), which causes the grid items to stretch across the entire width of their cells.

If you hover or tab onto the grid container however, it is given a justify-items value of center, which causes the grid items to span only as wide as their content width, and align in the center of their cells.
## 4.2. Box Model

#### 4.2.1. Parts of a Box

- Content Box - the area where your content is displayed, which
can be sized using properties like width and height

- Padding Box - the padding sits around the content

- Border Box - the border box wraps the content and any padding

- Margin Box - the margin wrapping the content, padding and
border


## 4.2.2. Block and Inline Elements
HTML is made up of various elements that act as the
building blocks of web pages

CSS has two different types of boxes - block and inline:

- Block Elements
- Inline Elements
- Inline-block Elements

#### 4.2.2.1. Block Elements
Block element: starts on a new line, and fills up the horizontal
space left and right on the web page

Some examples of block elements are:

- main, header , article , section , fieldset , nav , ul , ol ,
li , form , h1-h6 , p , div

#### 4.2.2.2. Inline Elements

Inline element: don't start on a new line. They appear on the
same line as the content and tags beside them

Some examples of inline-block elements are:

- a, label, map, span, strong, em, i, img, textarea, input,
button, select

You can add margins and padding just on right and left sides of
any inline element
#### 4.2.2.3. Inline-Block Elements

Inline-block elements are similar to inline elements

They can have padding and margins added on all four sides

You have to declare display: inline-block in your CSS
code

One common use for using inline-block is for creating
navigation links horizontally

> page.html
```html
<ul>

<li>Home</li>

<li>About Us</li>

<li>Clients</li>

<li>Contacts</li>

</ul>
```
> style.css
```css
ul {

background-color: #f0b27a;

padding: 20px;

list-style-type: none;

text-align: center;

}

li {

display: inline-block;

padding: 0 20px;

font-size: 20px;

}
```

---
# 11. Exercise



---




