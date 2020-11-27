# CONTENT

# [1. Overview](#1-overview-1)

# [11. Exercise](#1-exercise-1)
---

#1. Overview
- HTTP is called as a stateless protocol because each request is executed independently, without any knowledge of the requests that were executed before it, which means once the
transaction ends the connection between the browser and the server is also lost


# 11. Exercise

### [Grid layout](./EXERCISE/grid-layout.html)

### grid pattern aranges is items like table:
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
- <coe>grid-gap</code> erquals 
<code>
grid-column-gap: 1em;
<br>
grid-row-gap: 1em;
</code>