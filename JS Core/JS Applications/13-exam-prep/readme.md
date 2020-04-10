# I. DonUni SPA

## 1. install npm package
> /node_modules
folder will apear in the main directory

the node modules folder will contain all the dependancies listed in 
> ./package.json

## 2. create [views](./views) folder


## 3. npm packager version
use any package name instead of sammy
```
npm view sammy version
```

## 4. Error: Sammy() is not a function
the following code:
```js
const app = Sammy('#root', function() {
    this.use('Handlebars', 'hbs');
    this.get('#/home', controllers.home.get.home)
})
(() => {
    app.run('#/home');
})();
```
needs to be refactored to this:
```js
let app = Sammy('#root', function(){
    this.use('Handlebars', 'hbs');

        //HOME
        this.get('#/home', controllers.home.get.home)
}).run('#/home');
```
## 5. Handling of POST/ GET request
an object with with params username and password is created and is posted to #/user/login
>login.hbs
```html
 <form method="POST" action="#/user/login">
    <input name="username" type="text" id="defaultFormCardNameEx" class="form-control">
    <input name="password" type="password" id="defaultFormCardPasswordEx" class="form-control">
    <button class="btn btn-info" type="submit">Logged In</button>
</form>
    ```
the request needs to be registered by SammyJS :
> app.js
```js
 this.post('#/user/login', controllers.user.post.login)
 ```

the object that is passed from the form is passed to the controller as an object;
in this case(*pseudocode*): 
obj.params = {
    username,
    pass
}
> user.js :
```js
post:{
        login(context){
            let {username, password} = context.params;
        },
}
```
### 1. Object created from Sammy POST reqest is not an Object but a Sammy.Object !
*If a **Sammy.Object** is posted to foreign library (like Firebase) it wont make any changes!*

You need to create a copy of this object so that you can work with it:
```js
create(data){
    conosle.log(data) // Sammy.Object {username...}
    conosle.log({...data}) // Object {username...}
}
```
## 6. Firebase collection
- A  **Real Time DB** is used instead of Cloud 

the causes collection is located in 
https://donuni-48e9b.firebaseio.com/causes.json

- Add entry to the collection
```js
firebase.firestore().collection('causes').add({...data}) // returns Promise
```
## 7. Firebase Requests

1. FirebaseError: Missing or insufficient permission.
- set Rules of the Real Time DB from the rules section
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}

```

## 8. 