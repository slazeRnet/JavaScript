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
## 2. Install Bootstrap, SammyJs and Handlebars locally
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
## 3. Set up Firebase
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
*the app needs to be done with authentication so set up one:*
```json
{
  "rules": {
    ".read": "auth !== null",
    ".write": "auth !== null"
  }
}
```
## 4.Initialise the Sammy library

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
## 5. SammyJs makes request for loading content
 - GET Promise request for loading a page :
 ```js
/ route(verb, path, callback)
      route('get', '#/', function() { 
        ...
      });
 ```
is equivalent to
  ```js
// verb(path, callback)
      get('#/', function() { 
        ...
      });
 ```
 - all pages that make a request (*for example POST*) need to be explicitly defined in the Sammy app if they are not defined the following Error will be printed on the console:

 > Not Found: post #/register

A POST request that has been handled already ( for ex. with DOM) can be instanciated with callback function that returns false:
 ```js
this.get('#/register', registerPageViewHandler);
this.post('#/register', () => false);
 ```
## 6. Use Helper functions for DOM manipulations and AJAX requests
 - [form-helper.js](./Team-Manager-Skeleton/scripts/form-helper.js)
 - [firebase-request.js](./Team-Manager-Skeleton/scripts/firebase-request.js)
 - do not repeat code but use modules for cleaner code and reaability

 ## 7. User Registration and Session Storage

Use the firebase auth library to create a user and retrieve its token. Set the Session to the returned token
so the new user can log in automatically: 
```js
firebase.auth().createUserWithEmailAndPassword(formValues.username, formValues.password)
       .then(() => {
          firebase.auth().currentUser.getIdToken()
          .then( token => {
              sessionStorage.setItem('token', token);
          })
           
       });
```

- set item in the Session storage
```js
sessionStorage.setItem('username', user.email)
```

- clear session storage
```js
sessionStorage.clear();
```
- get item from session storage
```js
sessionStorage.getItem('username');
```

## 8. Use call()
**function.call()** - *after the function is resolved the values are provided to the this scope*

```js
async function applyCommon(){
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }

    this.username = sessionStorage.getItem('username');
    this.loggedIn = !!sessionStorage.getItem('token');
}
async function homeViewHandler() {
        await applyCommon.call(this);

        this.partial('./templates/home/home.hbs')
}
/**
* @function homeViewHandler() now has username and loggedIn provided
*/
```

## 9. Firebase request library
- use the this [script](./Team-Manager-Skeleton/scripts/firebase-request.js)

import it in the main app:
```js
import {fireBaseRequestFactory} from './firebase-request.js';

```

