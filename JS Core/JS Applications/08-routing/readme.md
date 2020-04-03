# ROUTING

## 1. Add Bootstrap reference:
*use this in the html document Bootstrap CDN:*
```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```
**It is recomended to install package.json to reference modules:**
```terminal
npm init
```
package name:
```terminal
manager
```
## 1. Install Bootstrap, SammyJs and Handlebars locally
```terminal
npm install sammy bootstrap handlebars
```
*addin scrip reference:*
```html
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="../node_modules/handlebars/dist/handlebars.min.js"></script>
    <script src="../node_modules/sammy/lib/min/sammy-0.7.6.min.js"></script>
    <script src="../node_modules/sammy/lib/min/plugins/sammy.handlebars-0.7.6.min.js"></script>
```
## 1. Set up Firebase
- create a web app
add the following CDN reference:
```html
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>
```
- store the firebaseConfig var in a script for later authentication
```html
<script>
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyBYV6pA2-CuLaVSTLsp_RWoECsP58NME8A",
        authDomain: "routing-67ec1.firebaseapp.com",
        databaseURL: "https://routing-67ec1.firebaseio.com",
        projectId: "routing-67ec1",
        storageBucket: "routing-67ec1.appspot.com",
        messagingSenderId: "282860991880",
        appId: "1:282860991880:web:844f8f7ef7a7e2d150b63d"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    </script>
```
add authentication library:
```html
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-auth.js"></script>
```
add jQuery reference so that Bootstrap and Sammyjs can run
```html
<script
			  src="https://code.jquery.com/jquery-3.4.1.min.js"
			  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
			  crossorigin="anonymous"></script>
    <script>
```
## 1.Initialise the Sammy library

Router functionality is done by SammyJS:
```js
var app = Sammy('#main', function() {
    // include a plugin
    this.use('Handlebars', 'hbs'); // plugin, file-extension
  
    // define a 'route'
    this.get('#/', function() { // MAIN PAGE
      
        this.partial('./templates/home/home.hbs')
    });
  });
```

*the code needs to run in IIFE function*


```js
(() => {
  // start the application
  app.run('#/');
})();
```