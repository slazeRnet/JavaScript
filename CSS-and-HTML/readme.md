# CONTENT

# [1. Overview](#1-overview-1)

# 4. Containers and Grids

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



# [11. Exercise](#1-exercise-1)
---

#1. Overview
- HTTP is called as a stateless protocol because each request is executed independently, without any knowledge of the requests that were executed before it, which means once the
transaction ends the connection between the browser and the server is also lost


# 11. Exercise

