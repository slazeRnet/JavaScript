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

For detailed example run [index.html](./lab/demo/index.html) in live server
1. Template
- a template looks like
``` html
<script type="text/x-handlebars-template" id="name-template">
        <p>Hello my name is {{name}} {{familyName}}</p>
    </script>
```
- execution :
```html
<script>
 var template = Handlebars.compile(document.getElementById('name-template').innerHTML);
        let html = template({ name: "Ivan", familyName: "Petrov" });
        document.body.innerHTML += html; //<!--Hello my name is Ivan Petrov-->
</script>
```
___
1. Collections
- Template
```html
<p><i>Here is a For-each example: </i></p>
    <script type="text/x-handlebars-template" id="friends-template">
        <p>Friends</p>
        <ul id="friends">
            {{#each friends}}
            <li>{{name}}: {{email}}</li>
            {{/each}}
        </ul>
    </script>
```
- execution
```html
<script>
let friends = [
            { name: "zizzy42", email: "me@domain.com" },
            { name: "haskel", email: "someth342@domain.com" },
            { name:  "pascal534", email: "user2342@domain.com" },
            { name: "maria.ivanova", email: "mariika@domain.com" }
        ];
        let friendsTemplate = Handlebars.compile(document.getElementById('friends-template').innerHTML);
        document.body.innerHTML += friendsTemplate({ friends });
</script>
```
1. Conditions
- template:
```html
<script type="text/x-handlebars-template" id="input-template">
        {{#if input}}
            <p>http://{{input}}</p>
            {{else}}
            <p>invalid</p>
            {{/if}}
        </script>
```
- execution:
```html
<script>
        let inputTemplate = Handlebars.compile(document.getElementById('input-template').innerHTML);
        let print = document.getElementById('print-submit');
        print.addEventListener('click', async (e) => {
            e.preventDefault();
            let url = { input: e.target.parentElement[0].value };
            let html = await inputTemplate(url);
            e.target.parentElement.innerHTML += html;
        })
    </script>
```
___

***
## React


## Vue.js
