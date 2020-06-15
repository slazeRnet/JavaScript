### CONTENT
### [1. Intro to NodeJS](#1-intro-to-nodejs-1)
### [2. Node.js Streams and Utilities](#2-nodejs-streams-and-utilities-1)
### [3. ExpressJS and Templating](#3-expressjs-and-templating-1)
### [4. NoSQL and MongoDB](#4-nosql-and-mongodb-1)
### [5. Session and Authentication](#5-session-and-authentication-1)
### [6. Validation and error handling](#6-validation-and-error-handling-1)
### [7. RestAPI](#7-restapi-1)
### [8. EXAM preparation](#8-exam-preparation-1)
### [9. Pug View Engine](#pug-view-engine-1)
### [10. Common Errors](#10-common-errors-1)
---
Not from this Module:
### [11. File System](#11-file-system-1)
# 1. Intro to NodeJS
## 1. Creating a NPM package
run the following command in the cmd:
```
npm
npm init //to initialise the package creation
```

this will generate a `package.json` file.
### 1. Never do error handling with 'throw' keyword in production
- this will terminate the entire server. Instead display error message and log it.
## 2. Create a web Server
- the nodejs library for running a server is called http

```js
const http = require('http')
const PORT = 4000;

http.createServer((req, res) => {
res.write('Hello world from browser'); // server response (it is displayed on the browser)
res.end(); // end the request
}).listen(PORT);

console.log(`Server started successfully on port ${PORT}`); //output on the console
```

### 3. Nodemon npm
- a  packag that listens for changes on the node server and restarts it

## 1. Introduction to Node.js
- A runtime environment for JS that runs on the server
- Advantages
One language for server and client
Asynchronous and Event Driven
Very fast
Efficient package manager
No buffering

Node.js projects are usually set up as NPM packages 
From the terminal, inside the target directory
Answer questions to initialize project
A package.json file will be created with initial configuration

```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "Node.js demo project",
  "main": "index.js",
  "engines": {			// Sets versions of Node.js 
    "node": ">= 6.0.0",         and other commands
    "npm": ">= 3.0.0" },
  "scripts": {		     // Defines a set of node scripts
    "start": "node index.js" },   
  "keywords": [],
  "author": "",
  "license": "ISC“
}
```

### 1. Run your node scrypt from the console
> node test.js


## 2. Event Loop
## 3. Modules
Allow larger apps to be split and organized
Each module has its own context
It cannot pollute the global scope
- Node.js includes three types of modules: 
    - Core Modules
    Include bare minimum functionalities of Node.js
Load automatically when Node.js process starts
Need to be imported in order to be used
```js
const module = require('module');
```
Commonly used modules are
http - used to create Node.js server
url, querystring, path, fs

    - Local Modules
    Created locally in the Node.js application
Include different functionalities in separate folders
Use module.exports to expose a function, object or variable 
```js 
module.exports = myModule
```
Loaded using the require() function
```js 
const myModule = require('./myModule.js');
```
### URL Module
Provides utilities for URL resolution and parsing
```js
const url = require('url');
```
Parses an address with the parse() function
Returns an object with info about the url
```js
let urlObj = url.parse(req.url);
```
- Splits web address into readable parts

Host 'localhost:8080'
```js
let host = urlObj.host
```
Path '/home'
```js
let path = urlObj.pathname
```
Search/query '?year=2017&month=february'
```js
let query = urlObj.query
```
```js
let search = urlObj.search
```
### Query String Module 	
Provides utilities for parsing and formatting URL query strings
```js
const queryString = require('querystring');
```
Parses a query string into an object
```js
const qs = querystring
.parse('year=2017&month=february');
const year = qs.year;       // 2017
const month = qs.month;    // february
```
    - Third Party Modules
- Installed from Node Package Manager (NPM)
- Run from the terminal
```js
npm install --save express --save-exact
```
- To use in your code
```js
const express = require('express');
```
- To install globally (for use from the terminal)
```js
npm install --g mocha
```




## 4. Request and Response Wrapper

Used to handle incoming http requests
Properties
```
httpVersion - '1.1' or '1.0'
headers - object for request headers
method - 'GET', 'POST', etc.
url - the URL of the request
```
Example:

```js
const http = require('http');
const url = require('url');
const port = 1337;

http.createServer((req, res) => {
  let path = url.parse(req['url']).pathname;
  if (path === '/') {
     // TODO: Send 'Welcome to home page!'
  }
}).listen(port);

```
Used to retrieve a response to the client
Functions
Create response header
Send the actual content to the client
End the response

```js
const http = require('http');
const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { // Response Status Code
    'Content-Type': 'text/plain'
  }); 
  res.write('Hello from Node.js'); // UTF-8 Encoding
  res.end(); // Always End the Response
}).listen(port);
```


## 5. Node.js Web Server
All physical servers have hardware
The hardware is controlled by the operating system
Web servers are software products that use the operating system to handle web requests
Web servers serve Web content
The requests are redirected to other software products (ASP.NET, PHP, etc.), depending on the web server settings

- Creating a simple Node.js web server
```js
const http = require('http');

http.createServer((req, res) => {
  res.write('Hi!');
  res.end();
}).listen(1337);

console.log('Node.js server running on port 1337');

```

# 2. Node.js Streams and Utilities

__DEFINITIONS__
---
### Isomorphic/Universal Routing

Reusing code with Isomorphic/Universal Routing
Isomorphic/Universal provides routing for the web app both on the server and the client

Suppose you create a web app in the latest technology i.e. React only to find that the user has to wait for the entire JS to be downloaded and rendered before the user can see anything in the browser window.

React provides Server Side Rendering - SSR which can be used to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.
---

---
## 1. Pub/Sub

### 1. What is Pub/Sub?

Used to communicate messages between different system components without them knowing anything about each other’s identity
Senders (publishers), do not program the messages to be sent directly to specific receivers (subscribers)
Subscribers express interest in one or more events, and only receive messages that are of interest

An intermediary (called a "message broker" or "event bus")
- Receives published messages
- Forwards them to the subscribers who are registered to receive them

**Advantages**

- Decouple and Scale Independently
Makes software more flexible
- Eliminate Polling
Promotes faster response time and reduces the delivery latency
- Simplify Communication
Reduces complexity by removing all the point-to-point connections with a single connection

---

### 2. Streams

- Collections of data that is not available at once
- Data may come continuously in chunks
 Types: 
- Readable - can only be read (process.stdin)
Functions
```
read() - get chunks from the stream
resume() - switch to flowing mode
pause() - switch to paused mode
```
Events - used when the stream is flowing
```
data - chunk is available for reading
end - no more data
error - an exception has occurred
```
- HTTP Request is a readable stream


Writeable - can only be written to (process.stdout)
Functions
```js
write() - send chunks to the stream
end() - close the stream
```
Events
```
drain - stream can receive more data
finish - all data has been flushed (buffer is empty)
error - an exception has occurred
```
- HTTP Response is a writeable stream

- The pipe() function allows a readable stream to output directly to a writable stream
Event listeners are automatically added


Duplex - both Readable and Writeable (TCP sockets)

Implements both the Readable and Writeable interfaces
Example - a TCP socket


Transform - the output is computed from the input (zlib, crypto)
A special kind of duplex stream where the output is a transformed version of the input

- Transforms with Gzip
```js
const fs = require('fs');
const zlib = require('zlib');

let readStream = fs.createReadStream('index.js');
let writeStream = fs.createWriteStream('index.js.gz');

let gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);

```

### 3. Events
- Require module "events"

```js
const events = require('events');
let eventEmitter = new events.EventEmitter();

eventEmitter.on('click', (a, b) => {
  console.log('A click has been detected!');
  console.log(a + ' ' + b); // outputs 'Hello world'
});

eventEmitter.emit('click', 'Hello', 'world');

```
Events are not asynchronous


### 4. FS Module

To read and write files asynchronously with fs we will use fs.readFile and fs.writeFile.
The fs module gives you access to the file system.

```js
let fs = require('fs');
```
All functions have synchronous and asynchronous variants
```js
let data = fs.readFileSync('./package.json', 'utf8');
console.log(data);

```
```js
let data = fs.readFile('./package.json', 'utf8', (err, data) => {  // Handle possible errors  
  console.log(data); });
```

- List files in a directory
```js
let data = fs.readdirSync('./myDir', 'utf8');
console.log(data);

```
- The result is an array of strings, containing all filenames

```js
let data = fs.readdir('./myDir', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

```
- Create a directory

```js
fs.mkdirSync('./myDir');
```
```js
fs.mkdir('./myDir', err => {
  if (err) {
    console.log(err);
    return;
  }
});

```

- Rename file or directory
```js
fs.renameSync('./oldName', './newName');
```

```js
fs.rename('./oldName', './newName', err => {
  if (err) {
    console.log(err);
    return;
  }
});
```

- Write a file
```js
const fs = require('fs');
let filePath = './data.txt';
let data = 'Some text';
```

```js
fs.writeFileSync(filePath, data);
```

```js
fs.writeFile(filePath, data, err => {
  if (err) {
    console.log(err);
    return;
  }
});
```

- Delete file
```js
fs.unlinkSync('./target.txt');
```

```
fs.unlink('./target.txt', err => {
  if (err) {
    console.log(err);
    return;
  }
});
```

- Delete directory
```js
fs.rmdirSync('./myDir');
```

```js
fs.rmdir('./myDir', err => {
  if (err) {
    console.log(err);
    return;
  }
});
```
Full API docs: https://nodejs.org/api/fs.html

### 5. Debugging

- Debugging in Node.js
The V8 debug protocol is a JSON based protocol
- IDEs with a debugger
Webstorm
Visual Studio
Node-inspector (not working with latest version)
- Watching with Nodemon

---
# 3. ExpressJS and Templating

- into to express
```js
const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.status(200);
  res.send('Welcome to Express.js!');
})
app.listen(port, () => console.log(`Express running on port: ${port}...`));

```
## 1.Express Router

### 1.1 Router in express
Routing has the following syntax
```js
app.METHOD(PATH, HANDLER)

```
Where
app is an instance of express
METHOD is an HTTP request method, in lowercase
PATH is a path on the server
HANDLER is the function executed when the route is matched

Example of route methods:
```js
// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})
// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
// PUT method route
app.put('/', (req, res) => {
  res.send('PUT request to the homepage')
})
// All methods route
app.all('/about', (req, res, next) => {
  console.log('Middleware execution..')
  next()
}, (req, res) => {
  res.send('Show about page.')
})

```

- paths that contain special charachters:
```js
app.get('*',(req, res) => {
  res.send('Matches everything')
})
//Based on string patterns

app.get('/ab*cd', (req, res) => {
  res.send('abcd, abANYTHINGcd')
}) 
//Based on regular expressions

app.get(/.*fly$/, (req, res) => {
  res.send('butterfly, dragonfly') })

```

- Chainable Routes

```js
app.route('/home')
  .get((req, res) => {
    res.send('GET home page') })
  .post((req, res) => {
    res.send('POST home page') })
  .all((req, res) => {
    res.send('Everything else')
  })

```

- Router Responses

res.download - prompt a file to be downloaded
```js
app.get('/pdf', (req, res) => {
  res.download('FULL PATH TO PDF') })

```
res.end - end the response process
res.json - send a JSON response

res.download - prompt a file to be downloaded
res.end - end the response process
res.json - send a JSON response
res.redirect - redirect a request (to another page)
```js
app.get('/about/old', (req, res) => {
  res.redirect('/about') })

```
res.sendFile - send a file as an octet stream
```js
app.get('/file/:fileName', (req, res) => {
  const fileName = req.params.fileName
  res.sendFile("PATH TO FILE" + fileName) })

```
res.render - render a view template		

### Modular routes

You can use express.Router for modular route handlers
Mounted on a route (e.g. '/about')
Can use middleware, specific only to that router
```js
const express = require('express')
const router = express.Router()
router.use(/* add middleware */)
router.get(/* define route handlers */)
app.use('/about', router)

```
### 1.2. Middleware

Function that has access to
The request and response object
The next middleware in the application's request-response cycle
Different kinds of middleware exist
Application, route, error
```js
const app = express()
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next() })
```
Middleware can be only for specific path
```js
app.use('/user/:userId', (req, res, next) => {
  const userId = req.params.userId
  // TODO: Check if user exists in db/session
  let userExists = true
  if (!userExists) { res.redirect('/login') } 
  else { next() } })
app.get('/user/:userId', (req, res) => {
  res.send('User home page!') 
}) 

```

- Third party middleware:
```js
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(cookieParser());
app.use(session({secret: 'magic unicorns'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(config.rootPath + '/public'));

```
### 1.3. Static files

- Serving static files
```js
app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use('/static', express.static(__dirname + '/public'))

```
- And all files from the directory will be public

```js
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
```
## 2. Templating

- Allows similar content to be replicated in a web page, without repeating the corresponding markup everywhere
### 2.1. Templating Concepts
The static parts of a webpage are stored as templates
The dynamic content is kept separately (e.g. in a database)
A view engine combines the two
Benefits
Productivity - avoid writing the same markup over and over
Easier upkeep - only change the code in one place
Composability - a single element can be used on multiple pages
</br>
Whan can they do:
Display articles in a blog
Display a gallery of photos
Visualize user profiles
Show items in a catalog

### Server view Engine
Server view engines return ready-to-use HTML to the client (the browser)
They parse the data to HTML on the server
Web applications, created with server view engines are not real SPA apps (In most cases)
Famous View Engines
Pug, Mustache, Handlebars, EJS, Vash

### 2.2. Templating with Handlebars
Based on Mustache specification
Expressions are initialized with ' {{ ' and finish with '}}'
```html
<div class="entry"> 
 <h1>{{title}}</h1> 
  <div class="body"> 
   {{body}} 
  </div> 
</div>

```
- Integration with Express
> npm install express-handlebars

```js
const app = require('express')()
const handlebars = require('express-handlebars')
app.engine('.hbs', handlebars({
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

```
- The expression inside
the loop uses each
entry as context
```js
const context = {
  contacts: [
    { name: 'Maria Petrova', email: 'mar4eto@abv.bg'},
    { name: 'Jordan Kirov', email: 'jordk@gmail.com'} ]};

```

```html
<ul id="contacts">
  {{#each contacts}}
    <li>{{name}}: {{email}}</li>
  {{/each}}
</ul>

```

By default, any strings that are evaluated will be HTML-escaped
To prevent this, use the "triple-stash"
```js
title: "All about <p> Tags"
body: "<p>This is a post about &lt;p&gt; tags</p>"

```
---
# 4. NoSQL and MongoDB
# 5. Session and Authentication
# 6. Validation and error handling
# 7. RestAPI
# 8. EXAM preparation

---
# Pug View Engine
the pug library is just like Python it requires a space indend on each line or it will not work
</br>
### 1. Nested loops
:information_source: Use a variable inside the first order loop as a midleware to be passed to the secound order loop:
</br>
```js
 ul
        each yearKey in Object.keys(months)
          - menu = months[yearKey]
          li
            a(href='')= yearKey
              ul
                each monthKey in menu
                  li
                    a(href='') #{monthKey}
```

# Handlebars View Engine

### Header and Footer Layout

- specifying the layout for each router(Express Router)
</br>

```js
app.get('/', (req, res) => {
  res.render('home', {
  layout: main
  }
})
```
</br>
- setting default layout(Express Router)

```js
app.set('view options', {layout: 'main'})
```
---

# 10. Common Errors
## 1. DataTypes Objects and arrays

## get object field using dot notation
</br>
> :warning: field value cannot be accessed with dot notation follwed by string variable
use bracket notation instead:

```js
let days = {Monday: 1}
let day = 'Monday'
console.log('output:', days.day, days[day]); // output: undefined 1
```

## 2. Server
### Getting "exit status 1: 'C:\Program' is not recognized as an internal or external command" when switching versions 

I have installed v1.1.0 in "C:\Program Files\nvm". All good but when I'm trying to switch to a version I have installed I get:

C:\WINDOWS\system32>nvm use 5.10.1
exit status 1: 'C:\Program' is not recognized as an internal or external command,
operable program or batch file.

SOLUTION:
---

__The problem is with the spaces in URL(C:\Program Files). Try to install the nvm directly in C:/ or in other folder without spaces in the PATH.__

---

### Cannot GET /user/1
When trying to use the Router method for routing:

```js
router.get('/user/:id', function (req, res) {
    res.send('hello, user!')
  })
```
to fix this add app.use(router) 

```js
  app.use(router)
```
---

### Using the fs library on node.js and appending html elements with it:

you can't call server-side (Node) methods in browser-interpreted client-side (front end) code. You have to call them from a server.

```js
const fs = require('fs')
// read the data synchronosly and store it in the var. If the file is corrupt throw err
var data = fs.readFile('./utils/data.json', 'utf8', (err, jsonString) => {
    if (err) {
          console.error("Error reading DataBase from disk:", err)
          return
      }
      try {
        console.log(jsonString);
        
            fitnessLogs = JSON.parse(jsonString)
        }
        catch(err) {
            console.error('Error parsing JSON string:', err)
        }
        })
        // Appends a HTML element with the json data
       print(fitnessLogs) //Error
        console.log(fitnessLogs);
```

### json-server default port

you can run the json-server at specific port
```
json-server --watch db.json --port 5000
```

### package.json changes that interfere with the  express library

> :x: Reference error: required is not defined
or
> :x: Type error: express is not a function

the following line in package.json will cause problem to your required express moduled
```
  "type": "module"
```
this occurs when express is requred like this

```
const express = require('express')

```

### importing module in nodeJS 
</br>
:information_source: NodeJS cannot use import. Download the requireJS and use it require modules
Doing so will cause this error:
</br>
> :x: SyntaxError: Cannot use import statement outside a module
</br>

SOLUTION FROM:
[here](https://stackoverflow.com/questions/56998440/how-to-run-ecmascript-mjs-files-with-nodemon)
</br>
all modules including the startup file must end with the .mjs extension

modify the package.json file with this falg --experimental-modules 
```json
"scripts": {
        "dev": "nodemon --experimental-modules index.mjs"
    },
```

### Browser JSON extension Addon can brake your HTML page

- Browser JSON extension can prevent your html from rendering. This may appear as View Engine error but is not.

---

# 11. File System
### path of the current directory
```js
const path = require('path') // current directory
let paht = path.join() // '.'
```
shift back and forth in the file system:
```js
const path = require('path') // current directory
const fs = require('fs') // FileSystem
// __dirname is the current dir. All the next strings are paths, the rest must be a middleware with error thrown
fs.writeFile(path.join(__dirname, '..', '/scripts/data.josn'), JSON.stringify(data), err => {
if(err)
throw err
}) // '.'
```
