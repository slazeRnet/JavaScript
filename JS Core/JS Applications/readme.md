# JS Applications module course
# CONTENT:
## 1. [this](#1this)
## 2. [Object Comparison](#2Object-Comparison)
## 3. [Inheritance and Prototypes](#3Inheritance-and-Prototypes)
## 4. [Restful services and AJAX](#4Restful-services-and-AJAX)
## 5. [Assynchronous Programming](#5Assynchronous-Programming)
## 6. [Remote Databases](#6Remote-Databases)
## 7. [Templating](#7Templating)
## 8. [Routing](#8Routing)
## 9. [Workshop - Single Page App](#9Workshop---Single-Page-App)
## 10. [Design Patterns](#10Design-Patterns)
## 11. [Webpack](#11Webpack)

---
# 1.this

## 1. Interpreter and Execution Context

- Interpreter reads and executes code line by line
- Execution Context 
- The scope in which the line is being executed
- The JavaScript runtime maintains a stack of these execution contexts 
- The execution context present at the top of this stack is currently being executed

## 2. this

- Special keyword in JavaScript
- Unlike C#, Java, PHP, etc. in JS this is not always an instance of the current object of some class
- Its value is based on the context
- There are differences in strict mode
- **The object that this refers to changes every time execution context is changed**

## 3. What is Function Context?

- **The function context is the object that owns the currently executed code**
- Function context === this object
- Depends on how the function is invoked
- Function invocation: func()
- Method invocation: object.function()
- Constructor invocation: new Array()
- Event handler: domElement.event()
- Indirect invocation: call() / apply() / bind()

## 4. "This" with Function invocation

+ This is the global object in a function invocation
```js
console.log(this === global); // false
function solve() {
  return this;
}
console.log(solve() === global) // true

```

## 5. Function invocation in Strict Mode 

+ Strict Mode
```js
function solve() {
  "use strict";
  console.log(this);
}
solve(); // undefined
```

+ No Strict Mode
```js
function solve() {
  console.log(this);
}solve(); 
// Object [global]

```

## 6. "This" Keyword in the Browser

```js
let b = "b";
console.log(this.b); //undefined

var a = "a";
console.log(this.a); //a

function foo() {
  console.log("Simple function call");
  console.log(this === window);  // true
}foo();
```

## 7. "This" in a Method invocation

+ This is the object that owns the method
```js
let person = {
  firstName: "Peter",
  lastName: "Ivanov",
  fullName: function(){
    return this.firstName + " " + this.lastName
  },
  whatIsThis: function(){ return this }
}console.log(person.fullName());  // Peter Ivanov
console.log(person.whatIsThis()); // person
```

## 8."This" Refers to the Parent Object
```js
function foo() {
  console.log(this === global);
}
let user = {
  count: 10,
  foo: foo,
  bar: function () { console.log(this === global); }
}
user.foo()  // false
let func = user.bar;
func() // true
user.bar()  // false
```

## 9. "This" with Inner Functions

+ this variable is accessible only by the function itself
```js
function outer() {
  console.log(this); // Object {name: "Peter"}
  function inner() {
    console.log(this); // global
  }
  inner();
}
const obj = { name: 'Peter', func: outer }
obj.func();
```

## 10. "This" with Arrow Functions
```js
+ this retains the value of the enclosing lexical context
function outer() {
  const inner = () => console.log(this);
  inner();
}
const obj = {
  name: 'Peter',
  func: outer
};
obj.func(); // Object {name: "Peter"}

```

## 11. "This" in Constructor invocation

+ The value of this refers to the newly created instance
```js
function Person(fn, ln) {
    this.first_name = fn;
    this.last_name = ln;
}
Person.prototype.displayName = function () {
      console.log(`Name: ${this.first_name} ${this.last_name}`);
};
let person = new Person("John", "Doe");
person.displayName();  // John Doe

```

**"This" in Constructor invocation :**
```js
class Person {
  constructor(fn, ln) {
    this.first_name = fn;
    this.last_name = ln;
    this.displayName = function () {
      console.log(`Name: ${this.first_name} ${this.last_name}`);
    } } };
let person = new Person("John", "Doe");
person.displayName();  // John Doe
```

## 12. In Events

- In event handlers, this is set to the element the event fired from
```js
element.addEventListener("click", function(e) {
  console.log(this === e.currentTarget); // Always true
});
```
## 13. "This" in Functions 

+ **Explicit Function Binding (*call, apply, bind*)**
    - Occurs when call(), apply(), or bind() are used on a function
    - Forces a function call to use a particular object for this binding
```js
function greet() {
    console.log(this.name);
}
let person = { name:'Alex' };
greet.call(person, arg1, arg2, arg3, ...); // Alex
```
+ **Changing the Context: Call()**
    - Calls a function with a given this value and arguments provided individually
```js
const sharePersonalInfo = function (...activities) {
  let info = `Hello, my name is ${this.name} and`+      	   + `I'm a ${this.profession}.\n`;
  info += activities.reduce((acc, curr) => {
      let el  = `--- ${curr}\n`;
      return acc + el;
  }, "My hobbies are:\n").trim();  return info;
}// Continues on the next slide…
const firstPerson = { name: "Peter", profession: "Fisherman" };
console.log(sharePersonalInfo.call(firstPerson, 'biking', 'swimming','football'));
// Hello, my name is Peter.
// I'm a Fisherman.
// My hobbies are:
// --- biking
// --- swimming
// --- football
```

+ **Changing the Context: Apply()**
    - Calls a function with a given this value, and arguments provided as an array
    - apply() accepts a single array of arguments, while call() accepts an argument list
    - If the first argument is undefined or null a similar outcome can be achieved using the array spread syntax

```js
const firstPerson = {
  name: "Peter", 
  prof: "Fisherman", 
  shareInfo: function () {
    console.log(`${this.name} works as a ${this.prof}`);
  }
};
const secondPerson = { name: "George", prof: "Manager" };
firstPerson.shareInfo.apply(secondPerson);
// George works as a Manager
```

+ **Changing the Context: Bind()**
    - The bind() method creates a new function 
    - Has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when  the new function is called
    - Calling the bound function generally results in the execution of its wrapped function
    - Bind makes a permanent context link and will always keep it
    - Bound function cannot change it’s linked context when using call or apply with a different context or even a rebound doesn’t have any effect
```js
const x = 42;
const getX = function () {
  return this.x;
}
const module = {x , getX };
const unboundGetX = module.getX;
console.log(unboundGetX()); // undefined
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 42
```


---
# 2.Object Comparison
_Destructuring, Aggregation, Concatenation, Delegation_

## 1. What is Object Composition?

+ Combining simple objects or data types into more complex ones
```js
let name = "Sofia";
let population = 1325744;
let country = "Bulgaria";
let town = { name, population, country };
console.log(town);// Object {name: "Sofia", population: 1325744,country: "Bulgaria"}
town.location = { lat: 42.698, lng: 23.322 };
console.log(town); // Object {…, location: Object}

```

## 2. Printing Objects: ToString() Function
```js
let rect = {
  width: 10,
  height: 4,
  toString: function() { 
    return `rect[${this.width} x ${this.height}]`;
  }
};
console.log(rect); // Object {width: 10, height: 4}// This will invoke toString() to convert the object to Stringconsole.log('' + rect); // rect[12 x 7]
```

## 3. Destructuring

- *The ability to "dive into" an array or object and reference something inside of it more directly*
```js
const department = {
  name: "Engineering",
  data: {}
 }
 const { data } = department //now data references the data object directly
 const objectList = [ { key: 'value' }, { key: 'value' }, { key: 'value' } ]
 const [ obj, obj1, obj2 ] = objectList 
// now each object can be referenced directly

```
+ Nested Destructuring
    - *Destructuring can work beyond the top level*
```js
const department = {
  name: "Engineering",
  data: { 
    director: {
      name: 'John', 
      position: 'Engineering Director' 
    }, 
    employees: [],
    company: 'Quick Build' 
  }
}
const {data: {director}} = department 
// director is { name: 'John', position: 'Engineering Director'}
```
+ Destructuring Nested Arrays
    - You need to know the position of what you're looking for
    - Provide a reference variable (or comma placeholder) for each element up and until the one you're looking for 
```js
const departments = [['Engineering', ['secretary', 'director', 'worker']], ['Accounting', ['director', 'accountant']]];
const [[name, positions]] = departments
// name is 'Engineering'
// positions is [ 'secretary', 'director', 'worker' ]
```

+ Objects and Arrays Destructuring
```js
const employees = [{name: 'John', position: 'worker'}, {name: 'Jane', position: 'secretary'}]
const [{name}] = employees // name is 'John'

const company = { 
  employees: ['John', 'Jane', 'Sam', 'Suzanne'],
  name: 'Quick Build',
}
const {employees:[employee]} = company // employee is 'John'
```

## 4. Forms of Object Composition

+ **Aggregation**
    - Object is formed from an enumerable collection of subobjects
    - An aggregate is an object which contains other objects
    - When to use
    - Collections of objects which need to share common operations
    - When you want a single item to share the same interface as many items

*Aggregation Example*
```js
let dataArray = [ { id: "a", score: 1 }, { id: "b", score: 2 }, 
{ id: "c", score: 5 }, { id: "a", score: 3 }, { id: "c", score: 2 }, ];
let res1 = dataArray.reduce((acc, curr, index, array) => {
  let same = acc.find(e => e.id === curr.id);
  if (!same) {
    acc.push(curr);
  } else {
    same.score += curr.score;
  }
  return acc;
}, []);
console.log(res1);
//[ { id: 'a', score: 4 }, { id: 'b', score: 2 }, { id: 'c', score: 7 } ]
```

+ **Concatenation**
    - Concatenation is when an object is formed by adding new properties to an existing object
    - When to use
    - merging JSON objects
    - Creating updates to immutable state
    - Etc…
```js
const objs = [
	       {name: 'Peter',age:35 }, 
              { age: 22 },
              {name: "Steven"}, 
              {height:180}
];
const concatenate = (a, o) => ({...a, ...o});
const c = objs.reduce(concatenate, {});
console.log(c);// { name: 'Steven', age: 22, height: 180 }
```

+ **Delegation**
    - Delegation is commonly used to imitate class inheritance in JavaScript
    - Composes objects by linking together an object delegation chain 
    - An object forwards property lookups to another object
    - [].map() delegates to Array.prototype.map()

**Array.reduceRight()**
*The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.*
```js
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]

```
**Delegation Example**
```js
const objs = [
               {name: 'Peter',age:35}, 
               {age: 22},
               {name: "Steven"}, 
               {height:180}
];
const delegate = (a, b) => Object.assign(Object.create(a), b);
const d = objs.reduceRight(delegate, {});
console.log(d); // { name: 'Peter', age: 35 }
console.log(d.height); // 180
```














---
# 3.Inheritance and Prototypes
*Class Inheritance, Prototypes, Prototype Chain*

## 1. Types of Inheritance
- Simple  
    -  a => b
- Multilevel 
    - a => b => c
- Hierarchal
    - a => b
    - a => c
- Multiple 
    - a => c
    - b => c
- Hybrid

## 2. Traditional Classes

- Classes are a design pattern
- Classes mean - creating copies
- When instantiated - a copy from class to instance 
- When inherited - a copy from parent to child

## 3. Classes in JavaScript

- Prototypal inheritance instead of classical inheritance
- Does not automatically create copies 
- properties are not copied from one object to another in the prototype chain. They are accessed by walking up the chain
- Common keys and values are shared by reference
- Delegates not blueprints!

**Class Syntax  - Example**
```js
class Foo {
    constructor(who) {
        this.me = who;
    }
    identify() { return "I am " + this.me; }
}
class Bar extends Foo {
    constructor(who) {
        super(who); // invoke the parent constructor
    }
    speak() {
        console.log("Hello, " + this.identify() + ".");
    }
}
```
## 4. Prototype Inheritance
```js
function Foo(who) {
    this.me = who;
}
Foo.prototype.identify = function () { return "I am " + this.me; }
function Bar(who) { Foo.call(this, who); }
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.speak = function () {
    console.log("Hello, " + this.identify() + ".");
}
let b1 = new Bar("b1");
let b2 = new Bar("b2");
b1.speak(); b2.speak();
```

## 5.JavaScript Objects

+ Literals
     - Literal creation

```js
let bar = {
    me: "I am b1",
  speak: function() {
      console.log("Hello, " +   this.me + ".");
  }
};
```

+ Constructed
    - Constructor creation
    - Have an implicit reference (prototype) to the value of their constructor's "prototype" property
    - Gets an internal __proto__ link to the object
```js
function Bar(name) {
  this.me = "I am " + name;
  this.speak = function() {
console.log("Hello, " +   this.me + ".");
  };
};  let b1 = new Bar("b1");

```

## 6. What is a Prototype?

- Just an object
- Internal property 
- Used to implement prototype‑ based inheritance and shared properties
- Reference to another objects
- Objects are not separate and disconnected, but  linked

## 7. __proto__ vs Prototype Property
+ __ proto__ 
    - Property of an objects that points at the prototype that has been set
    - Using __proto__ directly is deprecated!
+ prototype 
    - Property of a function set if your object is created by a constructor function
    - Objects do not have prototype property

__Prototype Chain - Simple Example__
```js
function Foo(y) {
    this.y = y;
}
Foo.prototype.x = 10;
Foo.prototype.calculate = function (z) {
    return this.x + this.y + z;
};
let b = new Foo(20);
Let c = new Foo(30);
```






---
# 4.Restful services and AJAX
*HTTP, RESTful Web Services, AJAX Concepts, XMLHttpRequest*

## 1. HTTP Basics

+ HTTP (Hyper Text Transfer Protocol) 	
    - Text-based client-server protocol for the Internet
    - For transferring Web resources (HTML files, images, styles, etc.)
    - Request-response based

+ HTTP Request Methods
    - HTTP defines methods to indicate the desired action to be performed on the identified resource


## 2. HTTP GET Request - Example
```http
GET /users/testnakov/repos HTTP/1.1 // http request line
Host: api.github.com
Accept: */*
Accept-Language: en
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36
Connection: Keep-Alive
Cache-Control: no-cache //the requested body is empty
<CRLF> 
```

HTTP response:
```
HTTP/1.1 200 OK // status line
Date: Fri, 11 Nov 2016 16:09:18 GMT+2 // response header
Server: Apache/2.2.14 (Linux)
Accept-Ranges: bytes
Content-Length: 84
Content-Type: text/html
<CRLF> // body
<html>
  <head><title>Test</title></head>
  <body>Test HTML page.</body>
</html>

```

## 3. Content-Type and Disposition

+ The Content-Type / Content-Disposition headers specify how the HTTP request / response body should be processed
```
Content-Type: application/json // JSON-encoded data

Content-Type: text/html; charset=utf-8 // UTF-8 encoded HTML page. Will be shown in the browser

Content-Type: application/pdf // This will download a PDF file named Financial-Report-April-2016.pdf
Content-Disposition: attachment;                                                                                                    filename="Financial-Report-April-2016.pdf"
```

## 4. REST and RESTful Services

- Representational State Transfer (REST)
- Architecture for client-server communication over HTTP
- Resources have URI (address)
- Can be created/retrieved/modified/deleted/etc.
- RESTful API/RESTful Service
- Provides access to server-sideresources via HTTP and REST

**REST Architectural Constraints**
+ REST defines 6 architectural constraints which make any web service - a true RESTful API
    - Client-server architecture
    - Statelessness
    - Cacheable
    - Layered system
    - Code on demand (optional)
    - Uniform interface 

### 4.1 :information_source: REST vs AJAX
- AJAX is a set of (typically) client-sided web development techniques, while REST is an architecture style for sending and handling HTTP requests. So you can use AJAX to send RESTful requests. A REST API is typically not implemented using AJAX, but can be accessed by an AJAX client.


## 5. AJAX - Asynchronous JavaScript and XML

**What is AJAX?**
+ Asynchronous JavaScript And XML
    - Background loading of dynamic content/data
    - Load data from the Web server and render it
+ Two types of AJAX
    - Partial page rendering
        - Load HTML fragment + show it in a <div>
    - JSON service
        - Loads JSON object and displays it

## 6. Using the XMLHttpRequest Object

```html
<button id = "load">Load Repos</button>
<div id="res"></div>

```
```js
let button = document.querySelector("#load");
button.addEventListener('click', function loadRepos() {
   let url = 'https://api.github.com/users/testnakov/repos';
   const httpRequest = new XMLHttpRequest();
   httpRequest.addEventListener('readystatechange', function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
         document.getElementById("res").textContent = httpRequest.responseText;
      }
   });
   httpRequest.open("GET", url);
   httpRequest.send();
});
```

## 7. What is Fetch?
+ The fetch() method allows making network requests
+ It is similar to XMLHttpRequest (XHR). The main difference is that the Fetch API:
    - Uses Promises
    - Enables a simpler and cleaner API
    - Makes code more readable and maintainable
```js
fetch('./api/some.json')
  .then(function(response) {…})
  .catch(function(err) {…})
```

**Basic Fetch Request**
- The response of a fetch() request is a Stream object
- The reading of the stream happens asynchronously
- When the json() method is called, a Promise is returned
- The response status is checked (should be 200) before parsing the response as JSON
```js
if (response.status !== 200) {
  // handle error
}
response.json()
  .then(function(data) { console.log(data)})
```

## 8. Chaining Promises
+ When working with a JSON API, you can:
    - Define the status and JSON parsing in separate functions
    - The functions return promises which can be chained
```js
fetch('users.json')
  .then(status)
  .then(json)
  .then(function(data) {…})
  .catch(function(error) {…});
```

8.1 GET Request
+ Fetch API uses the GET method so that a direct call would be like this
```js
fetch('https://swapi.co/api/people/4')
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data)))
  .catch((error) => console.error(error))
```
8.1 POST Request
+ To make a POST request, we can set the method and body parameters in the fetch() options
```js
fetch('/url', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
})
```

## 9. Body Methods
- clone() - create a clone of the response
- json() - resolves the promise with JSON
- redirect() - create new promise but with different URL
- text() - resolves the promise with string

## 10. Response Types

 - basic -  normal, same origin response
 - cors -  response was received from a validcross-origin request
 - error - error network
 - opaque - Response for "no-cors" request tocross-origin resource
 
 ## 11. Body Methods (2)
 - opaqueredirect - the fetch request was made with redirect: "manual"
 - arrayBuffer() - return a promise that resolve with an ArrayBuffer
 - blob() - determinates with a Blob
 - formData() - return promise that determinate with FormData object




---
# 5.Assynchronous Programming
*Promises. Async / Await.*

## 1. Asynchronous Programming in JS
+ Not the same thing as concurrent or multi-threaded
+ There can be asynchronous code, but it is generally single-threaded
+ Structured using callback functions
+ In current versions of JS there are:
    - Callbacks
    - Promises
    - Async Functions

Asynchronous Programming Runs several tasks (pieces of code) in parallel, at the same time

## 2. Asynchronous Programming - Example
```js
console.log("Hello.");
setTimeout(function() {
  console.log("Goodbye!");
}, 2000);
console.log("Hello again!");
```

The following commands will be executed as follows: 
```js
// Hello.
// Hello again!
// Goodbye!
```

## 3. Promises
*Objects Holding Asynchronous Operations*

**What is a Promise?**
+ A promise is an asynchronous action that may complete at some point and produce a value
+ States:
    - Pending - operation still running (unfinished)
    - Fulfilled - operation finished (the result is available)
    - Failed - operation failed (an error is present)
+ Promises use the Promise object
```js
new Promise(executor);
```
## 4. Promise Methods

 - Promise.reject(reason)
Returns an object that is rejected with the given reason
 - Promise.resolve(value)
Returns an object that is resolved with the given value
 - Promise.all(iterable)
 -Returns a promise 
Fulfills when all of the promises have fulfilled 
Rejects as soon as one of them rejects

 - Promise.allSettled(iterable)
Wait until all promises have settled
 - Promise.race(iterable)
Returns a promise that fulfills or rejects as soon as one of the promises in an iterable is settled
 - Promise.finally()
The handler is called when the promise is settled


**Promise.then() - Example**
```js
console.log('Before promise');
new Promise(function(resolve, reject) {
  setTimeout(function() { 
    resolve('done'); 
  }, 500);
})
.then(function(res) {
  console.log('Then returned: ' + res);
});
console.log('After promise');
```
```js
// Before promise
// After promise
// Then returned: done
```
## 5. Async Functions
+ Returns a promise, that can await other promises in a way that looks synchronous
+ Operate asynchronously via the event loop
+ Contains an await expression that: 
    - Is only valid inside async functions
    - Pauses the execution of that function
    - Waits for the Promise's resolution

```js
function resolveAfter2Seconds() { 
  return new Promise(resolve => { 
    setTimeout(() => {      
      resolve('resolved');    
    }, 2000);  
  });
}
```
is the same as:
```js
async function asyncCall() {  
  console.log('calling');  
  let result = await resolveAfter2Seconds();
  console.log(result);  
}
```
Expected output:
// calling
// resolved

+ Do not confuse await with Promise.then()
    - await is always used for a single promise
    - To await two or more promises in parallel, use Promise.then()
+ If a promise resolves normally, then await promise returns the result
+ In case of a rejection, it throws an error

## 7. Sequential Execution
- To execute different promise methods one by one, use Async /Await





---
# 6.Remote Databases

## 1. Relational Databases
- Represent and store data in tables and rows
- Use Structured Querying Language (SQL)
- Allows you to link information from different tables through the use of foreign keys (or indexes)

**PROS:**
- Work with structured data
- They support ACID transactional consistency and support "joins"
- Built-in data integrity and a large eco-system
- Relationships in this system have constraints
- Limitless indexing

## 2. Non Relational Databases
- No-SQL databases
- More flexibility and adaptability
- Allow us to store unstructured data in a single document
- Additional processing effort and more storage as the document sizes grow
**PROS:**
- They scale out horizontally 
- Work with unstructured and semi-structured data
- Schema-free or Schema-on-read options
- High availability
- Many are open source and so "free"

## 3.Backend As a Service
 - Solutions that provide pre-built, cloud hosted components for developing application backends
 - Reduce the time and complexity required 
 - Allow developers to focus on core features instead of low level tasks
 + Types:
    - Cloud BaaS
    - Opensource BaaS

**3.1 Firebase**
+ Mobile and web development platform. It provides: 
    - Realtime database
    - Backend as a service
    - JSON-based data structure

## 4. Authentication vs. Authorization

+ Authentication
    - The process of verifying the identity of a user or computer
    - Questions: "Who are you?", "How you prove it? "
    - Credentials can be password, smart card, external token, etc.
+ Authorization
    - The process of determining what a user is permitted to do on a computer or network
    - Questions: "What are you allowed to do?", "Can you see this page?"

## 5. Authentication in Firebase

5.1 Create User
 - Validate the email address and password, then pass them to the createUserWithEmailAndPassword method.
```js
firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
});
```
5.2 Sign in existing user
Signing user is made by signInWithEmailAndPassword method and pass the user credentials.
```js
firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
});
	```

5.3 Get user data 
- attach an observer to get the user data, when user successfully signs in.
```js
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in..
        let displayName = user.displayName;
} else {
        // User is signed out..
    }
});
```























---
# 7.Templating

## 1. Definition and Uses
*What is Templating?*

+ Templates allow similar content to be replicated in a web page, without repeating the corresponding markup everywhere

- Templates are a method of separating HTML structure fromthe content contained within
- Templating systems generally introduce some new syntaxbut are usually very simple to work with
- Typically token replacement is used to indicate part, whichmust be replaced - ({{ ... }}, <%...%> etc.)

- Templates should be as simple as possible 
- Do not write business logic in the templates
- Follow the principles of functional programming
- Templates are basically pure functions

+ The static parts of a webpage are stored as templates
+ The dynamic content is kept separately (e.g. in a database)
+ A templating engine combines the two
+ Benefits:
    - Productivity - avoid writing the same markup over and over
    - Save bandwidth - send the HTML once, fill in any content
    - Composability - a single element can be used on multiple pages

### 1.1 When Should We Use JS Templating?

- As soon as we find ourselves including HTML inside JavaScript strings 
- Separation of concerns is of utmost importance when building a maintainable codebase


## 2. Overview  
- Based on the Mustache specification
- Adds helper functions and nested context paths
- Uses double curly brace notation {{ }}

## 3. Handlebars Installation and Using

1. Download Handlebars using the terminal
1. Or download from handlebarsjs.com
1. Browser builds will be located in
1. Use handlebars from an online CDN
1. Link it with a script tag
```html
<script  src="node_modules/handlebars/dist/handlebars.js"></script>
```
## 4. Expressions
- You can place your templates in a script element
- Use type text/x-handlebars-template
- Give the element an ID for easier use
- Anything inside double curly braces {{ }} will be evaluated

## 5. Compilation and Execution

Once loaded, a template must be compiled
```js
let src = document.getElementById("contact-template").innerHTML;
let template = Handlebars.compile(src);
```
Compiled templates are functions, that can be executed with whatever variables we need
```js
let context = {
  name: 'Ivan Ivanov',
  phone: '0888 123 456',
  email: 'i.ivanov@gmail.com'
};
let html = template(context);
```
## 6. For-Loops
```html
<ul id="contacts">
  {{#each contacts}}
    <li>{{name}}: {{email}}</li>
  {{/each}}
</ul>3
```
## 7. Conditional Statements
```js
{{#if sunny}}
  The sky is clear
{{else}}
  The sky is overcast
{{/if}}
<ul id="contacts">
  {{#each contacts}}
    <li>{{name}}: {{email}}</li>
  {{else}}
    <i>(empty)<i>
  {{/each}}
</ul>
```

## 8. Partials {{> partialName }}
Partials are templates that can be inserted into other templates
```js
let src = document.getElementById("contact-template").innerHTML;
Handlebars.registerPartial('contact', src);
```
```html
<div id="contacts">
  {{#each contacts}}
    {{> contact}}
  {{else}}
    <i>(empty)<i>
  {{/each}}
</div>

```
## 9. HTML Escaping
Using the "triple-stash"
```html
title: "All about <p> Tags"
body: "<p>This is a post about &lt;p&gt; tags</p>"
```
```html
<div class="entry">
  <h1>All About &lt;p&gt; Tags</h1>
  <div class="body">
    <p>
      This is a post about&lt;p&gt; tags
    </p>
  </div>
</div>
```


---
# 8.Routing

## 1. Types of Web Applications
### 1. Multi Page Applications
- Reloads the entire page
- Displays the new page when a user interacts with the web app
- When a data is exchanged, a new page is requested from the server to display in the web browser

Multi Page Pros and Cons
- Pros:
Performs well on the search engine
Provides a visual map of the web app to the user
- Cons
Comparatively complex development
Coupled backend and frontend

### 2. Single Page Applications

- A next evolution from multi-page website
- Web apps that load a single HTML file
- SPAs use AJAX and HTML5 to create fluid and responsive Web apps
- No constant page reloads
- Re-renders its content in response to navigation actions, without reloading of the page
- Can use state from external source or track state internally
- Internal state SPAs are limited - only one "entry"
- With location-based SPAs, the location is always updating
- Location-based SPAs need a special object "Router"

- Pros
Load all scripts only once
Maintain state across multiple pages
Browser history can be used
Better UX

- Cons
Perform poor on the search engine
Server-side rendering helps
Provide single sharing link
Less secure
## 3. Navigation Types:

1. Standard Navigation
1. Navigation using Routing - allows navigation, without reloading the page

## 4. Query Parameters

- Allow for additional application state to be serialized into the URL
- Common use cases 
- Representing the current page number in a paginated collection
- Filter criteria
- Sorting criteria

**Location**

## 5. How Routers Work
- A Router loads the appropriate content when the location changes
- E.g. when the user manually enters an address
- Conversely, a change in content is reflected in the address bar
- E.g. when the user clicks on a link

## 6. Hash-based Routing
- Using the #hash part of the URL to simulate different content
- The routing is possible because changes in the hash don't trigger page reload

Extracting the hash from the entire URL
```js
let hash = window.location.href.split('#')[1] || '';
```
Changing the path
```js
let changePath = function (path) {
  let currentPath = window.location.href;
  window.location.href =     currentPath.replace(/#(.*)$/, '') + '#'+ path;
}
```
Subscribe for changes
```js
let url = undefined;
let getCurrent = function () {
  return window.location.hash;
};
let listen = function () {
  let current = getCurrent();
  if (current !== url) {
    url = current;
  }
  setTimeout(listen, 200);
};
listen();
```
## 7. Push-Based Routing

- You can actually surface real server-side data to support things like SEO and Facebook Open Graph 
- It helps with analytics
- It helps fix hash tag issues
- You can actually use hash tag for what is was meant for, deep linking to sections of long pages

## 8. History API

- Provides access to the browser's history through the history object
- HTML5 introduced the history.pushState() and history.replaceState() 
- They allow you to add and modify history entries
- These methods work in conjunction with the popstate event

**The PushState() Method**
- Adds new object to the history of the browser
- Takes three parameters:
- State 
- Object which is associated with the new history entry
- Title 
- Browsers currently ignore this parameter 
- URL 
- The new history entry's URL is given by this parameter 
- It must be of the same origin as the current URL

**The ReplaceState() Method**
Modifies the current history entry instead of creating a new one
It is particularly useful when you want to update the state object or URL of the current history entry
```js
let stateObj = { facNum: "56789123" };
history.pushState(stateObj, "", "student.html");
history.replaceState(stateObj, "", "newStudent.html");
```

## 9. The Popstate Event

- Dispatched to the window every time the active history entry changes
- If the history entry being activated was created by a call to pushState or affected by a call to replaceState, 
- The popstate event's state property contains a copy of the history entry’s state object
- You can read the state of the current history entry without waiting for a popstate event using the history.- state property









---
# 9.Workshop - Single Page App
# 10.Design Patterns
# 11.Webpack










