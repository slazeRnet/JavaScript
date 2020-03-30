# TEMPLATING
1. [Mustache](#MUSTACHE)
1. [React](#React)
1. [Vue.js](#Vue\.js)
___
## MUSTACHE
* Download Handlebars using the terminal :

```npm
npm -install mustache
```
*the npm package will be stored in folder called* 
> node_modules/handlebars/

* Or download from handlebarsjs.com
* Browser builds will be located in
* Use handlebars from an online CDN
* Link it with a script tag
```html
<script>  src="node_modules/handlebars/dist/handlebars.js"></script>
```
* the template is used in script element
```html 
type="text/x-handlebars-template"
```

For detailed example run [index.html] (/lab/demo/index.html) in live server
1. Template
- a template looks like
``` html
<script type="text/x-handlebars-template" id="name-template">
        <p>Hello my name is {{name}} {{familyName}}</p>
    </script>
```
- execution :
```html
 var template = Handlebars.compile(document.getElementById('name-template').innerHTML);
        let html = template({ name: "Ivan", familyName: "Petrov" });
        document.body.innerHTML += html; //<!--Hello my name is Ivan Petrov-->
```
___



***
## React


## Vue.js
