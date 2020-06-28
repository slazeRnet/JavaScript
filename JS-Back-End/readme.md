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

:information_source:  controllers are also called handlers
---
# 4. NoSQL and MongoDB

## 1. Relational and NoSQL Databases
### Relational DB
- Organize data into one or more tables of columns and rows
- Unique key identifying each row of data
- Almost all relational databases use SQL to extract data
- Relations between tables are done using Foreign Keys (FK)
- Such databases are Oracle, MySQL, SQL Server, etc..

### Non-relational Database (NoSQL)
Key-value stores
```js
{
   "_id": ObjectId("59d3fe7ed81452db0933a871"),
   "email": "peter@gmail.com",
   "age": 22
}

```
SQL query is not used in NoSQL systems
More scalable and provide superior performance
Such databases are MongoDB, Cassandra, Redis, etc..

## 2. MongoDB Overview
### Installation 
Download from: https://www.mongodb.com/download-center
When installed, MongoDB needs a driver
One to use with Node.js, .NET, Java, etc..
Install MongoDB driver for Node.js
```
npm install mongodb -g
```
### Configuratin
Additional configurations are needed
Go to installation folder and run a command prompt as an administrator
Type the following command
```
"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\data\db"
```
Additional information at https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/ 

### Working With MongoDB shell client
Start the shell from another CLI
Type the command mongo:
- lists the databases
```
 show dbs
```

- switch to db
```
 use mytestdb
```
- insert an object
```
db.mycollection.insertOne({"name":"George"})
```

- find an entry
```
 db.mycollection.find({"name":" George"})
```
Additional information at
https://docs.mongodb.com/manual/reference/mongo-shell/

### Working with MongoDB GUI
Choose one of the many
For example
Robo 3T- https://robomongo.org/download 
NoSQLBooster- https://nosqlbooster.com

### Working with MongoDB from Node.js – Example
```
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionStr = 'mongodb://localhost:27017';
const client = new MongoClient(connectionStr);
client.connect(function(err) {
  const db = client.db('testdb');
  const people = db.collection('people');

  people.insert({ 'name': 'Ivan' }, (err, result) => {
    people.find({ name: 'Ivan' }).toArray((err, data) => {
      console.log(data);
    });
  });
});
```

## 3. Mongoose overview
Mongoose is an object-document model module in Node.js for MongoDB
It provides a straight-forward, schema-based solution to model your application data
Includes build-in type casting and validation
Extends the native queries (much easier to use)
To install type in terminal/CMD
```
npm install mongoose --g
```

### Getting started
Load the following module
```js
const mongoose = require('mongoose')

```
Connecting to the database
```js
mongoose.connect('mongodb://localhost:27017/unidb')

```

### MongoDB Hosting
Host a database in the largest MongoDB cloud service
Go to 'mLab' and register - https://mlab.com/
You can store up to 500 MB of content

## 4. Mongoose Models
Mongoose supports models
Fixed types of documents
Used like object constructors
Needs a mongoose.Schema call:

```js
const modelSchema = new mongoose.Schema({
  propString: String,
  propNumber: Number,
  propObject: {},
  propArray: [],
  propBool: Boolean
});

const Model = mongoose.model('Model', modelSchema);
```

### Model Methods
Since mongoose models are just JavaScript object constructors, they can have methods
And these methods can be added to a schema
Use a different syntax than plain JS simply avoid arrow functions
```js
const studentSchema = new mongoose.Schema({…});

studentSchema.methods.getInfo = function() {
   return `I am ${this.firstName} ${this.lastName}`;
};
```
### Model Virtual Properties
Yet, not all properties need to be persisted to the database
Mongoose provides a way to create properties, that are accessible on all models, but are not persisted to the database
And they have both getters and setters
```js
studentSchema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName
});

```

### Property validation
With Mongoose developers can define custom validation on their properties
Validate records when trying to save
```js
studentSchema.path('firstName')
  .validate(function () {
   	return this.firstName.length >= 2 
	&& this.firstName.length <= 10
}, 'First name must be between 2 and 10 symbols long!') // Error message as second param

```

### Exporting Modules
Having all model definitions in the main module is no good
That is the reason Node.js has modules in the first place
In folder models, file Student.js
```js
const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
   firstName: { type: String, required: true },
   lastName: { type: String, required: true },
   facultyNumber: { type: String, required: true, unique: true },
   age: { type: Number }
});

module.exports = mongoose.model('Student');


```

We can put each model in a different module, and load all models at start
Where it is needed
```js
const Student = require('./models/Student');

```

## 5. CRUD with Mongoose
- Mongoose supports all CRUD operations
  - Create (Persist data)
  ```js
  new Student({}).save(callback)
  ```
  
  Example :
  
```js
  const mongoose = require('mongoose');
const connectionStr = 'mongodb://localhost:27017/unidb';
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  age: { type: Number }
});
const Student = mongoose.model('Student', studentSchema);
mongoose.connect(connectionStr).then(() => {
  new Student({ name: 'Petar', age: 21 })
    .save()
    .then(student => {
      console.log(student._id)
    });
});
```
  
  - Read (Extract data)
  ```js
  Student.find({})
  ```
  
  Example: 
  ```js
  Student
    .find({})
    .then(students => console.log(students))
    .catch(err => console.error(err))
Student
    .find({name: 'Petar'})
    .then(students => console.log(students))
Student
    .findOne({name: 'Petar'})
    .then(student => console.log(student))
  ```
  
- Update (Modify data)
```js
Student
  .findById(id, callback)
Student
  .findByIdAndUpdate(id, {$set: {prop: newVal}}, callback)
Student
  .update({_id: id, {$set: {prop: newVal}}, callback)
```
Example: 
```js
Student
    .findById('57fb9fe1853ab747b0f692d1')
    .then((student) => { 
      student.firstName = 'Stamat'
      student.save()
    });
Student
    .findByIdAndUpdate('57fb9fe90cd76e4e2c59e1a2', {
      $set: { name: 'Stamat' }
    });
Student
    .update(
      { firstName: 'Kiril' },
      { $set: { name: 'Petar' } },
      { multi: true })
```
- Delete (Remove data)
```js
Student.findByIdAndRemove(id, callback)
Student.remove({name: studentName})

```

Remove & Count Example:
```js
Student
    .findByIdAndRemove('57fb9fe1853ab747b0f692d1')
Student
    .remove({ name: 'Stamat' })
Student
    .count()
    .then(console.log)
Student
    .count({ age: { $gt: 19 } })
    .then(console.log)
```

## 6. Mongoose Queries
Mongoose defines all queries of the native MongoDB driver in a more clear and useful way
Instead of
```js
{ 
  $or: [
    {conditionOne: true},
    {conditionTwo: true}
  ]
}

```
Do
```js
.where({ conditionOne: true }).or({ conditionTwo: true })
```

### Example for a Query

Mongoose supports many queries
- For equality/non-equality
```js
Student.findOne({'lastName':'Petrov'})
```
```js
Student.find({}).where('age').gt(7).lt(14)
```
```js
Student.find({}).where('facultyNumber').equals('12399')

```
- Selection of some properties
```js
Student.findOne({'lastName':'Kirilov'}).select('name age')
```
- Sorting
```js
Student.find({}).sort({age:-1})
```
- Limit & skip
```js
Student.find({}).sort({age:-1}).skip(10).limit(10)

```
- Different methods could be stacked one upon the other
```js
Student.find({}).where('firstName').equals('gosho').where('age').gt(18).lt(65).sort({age:-1}).skip(10).limit(10)
```

## 7. Model Population
Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s)
We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query

- Here we create two models that reference each other
```js
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  facultyNumber: String
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' }
  subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }]
});
const subjectSchema = new mongoose.Schema({
  title: String,
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});
const Student = mongoose.model('Student', studentSchema);
const Subject = mongoose.model('Subject', subjectSchema);

```

- To load all the data referenced with the entity use populate()
Will return an array of objects and NOT Id's

```js
Student.findOne({ name: 'Peter' })
  .populate('subjects')
  .then(student => {
     console.log(student.subjects)   })
```
- You can also load multiple paths
```js
Student.findOne({ name: 'Peter' })
   .populate('subjects')
   .populate('teacher')
   .then(student => {
      console.log(student.teacher)
      console.log(student.subjects)   })

```
- Populate based on a condition
```js
Subject.
  find({}).
  populate({
    path: 'students',
    match: { age: { $gte: 19 }},
    select: 'name facultyNumber',
    options: { limit: 3 }
  })

```
More on populate here - mongoosejs.com/docs/populate.html


---
# 5. Session and Authentication
## 5.1 Cookies and Sessions
### HTTP Communication
HTTP is stateless
The Server and Client don't remember each other across requests
To preserve state, cookies are stored on the Client
Session cookie - exists on the Server
It can store information about a Client
Used to persist state across requests
Matched to a Client by their cookie

### Session vs Cookie
Session is preferred when you need to store short-terminformation/values
Cookies is preferred when you need to store long-terminformation/values
Session is safer because is stored on the server
Cookies are not very safe. Expiration can be set, and they can last for years


### Using Cookie
You can use cookie-parser middleware for Express
```
npm install cookie-parser --save --save-exact
```

```js
// use in an express app
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.get('/setCookie', (req, res) => {
  res.cookie("message", "hello")
  res.end('Cookie set')
})
app.get('/readCookie', (req, res) => {
  res.json(req.cookies)
})

```

### Using Sessions
You can use express-session middleware for Express
```
npm install express-session --save --save-exact
```

```js
// use in an express app
const session = require('express-session')
app.use(session({ secret: 'my secret'},		   { httpOnly: true },
		   { secure: true}))
app.get('/setSession', (req, res) => {
  req.session.message = "hello"
  res.end('Session set')
})
app.get('/readSession', (req, res) => {
  res.json(req.session)
})

```
## 5.2. Authentication Concepts
### 5.2.1 Application Security
Authentication is an important part of application security
It serves to verify that clients can access certainresources, depending on their role
It's built on several layers of abstraction
Cookies  Sessions  Security
Authentication is a cross-cutting concern, best handled awayfrom business logic
Request  Authentication  Business Logic  Response

### 5.2.2 Bcrypt
Bcrypt is a password hashing function
Besides incorporating a salt to protect against rainbow tableattacks, bcrypt is an adaptive function
Over time, the iteration count can be increased to make itslower, so it remains resistant to brute-force search attackseven with increasing computation power
- Installation
```
npm install bcrypt --save
```
- Hash password
```
const bcrypt = require('bcrypt');
const saltRounds = 9;
const myPlainTextPassword = "password123";

bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(myPlainTextPassword, salt, (err, hash) => {
        console.log(hash);
        // $2b$09$pdhUAoT4qE0tmku.ZkXWROeLcJCy.LDRq.1I4IVImjrUTGuUbYQMi
    })});

```
- Check password
```js
const myPlainTextPassword = "password123";
const hash = "$2b$09$pdhUAoT4qE0tmku.ZkXWROeLcJCy.LDRq.1I4IVImjrUTGuUbYQMi";

bcrypt.compare(myPlainTextPassword, hash, (err, res) => {
    console.log(res); // true
});

```
- Async way is recommended to hash and check password
### Authentication
The process of verifying the identity of a user or computer
Questions: "Who are you?", "How you prove it? "
Credentials can be password, smart card, external token, etc...
### Authorization
The process of determining what a user is permitted to do on a computer or network
Questions: " What are you allowed to do?", "Can you see this page?"

## 5.3. JSON Web Token
### 5.3.1. What is JWT?
JSON Web Token (JWT) is an open standard that defines acompact and self-contained way for securelytransmitting information between parties as a JSON object
This information can be verified and trusted because it isdigitally signed
JWTs can be signed using a secret or a public/private key pair using RSA or ECDSA
### 5.3.2. When Should You Use JWT?
- JSON Web Tokens are useful for
Authorization (most common scenario) - Once the user islogged in, each subsequent request will include JWT, allowingthe user to access routes, services and resources that arepermitted with that token
Information Exchange - JSON Web Tokens are good way ofsecurely transmitting information between parties. Becausethey are signed digitally

### 5.3.3. JWT Structure
- In its compact form, JSON Web Tokens consist of three partsseparated by dots ( . )
Header 
Payload 
Signature

- Installation
```
npm install jsonwebtoken --save

```
Encode token
```js
const jwt = require(jsonwebtoken');

const payloads = { _id, username };
const options = { expiresIn: '2d'};
const secret = 'MySuperPrivateSecret';
const token = jwt.sign(payload, secret, options);

console.log(token); //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXkiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.xzK8LJQz0lDkJqsng04BYxcUQzxWngyEBP

```
Decode token
```js
const token = req.cookies['token'] || sessionStorage.getItem('token');
// Depends where you store the token..

const decodedToken = jwt.verify(token, secretKey);

console.log(decodedToken); // { _id: ..., username: ... }

```
More about JWT, you can find
https://jwt.io/
https://www.npmjs.com/package/jsonwebtoken

---
# 6. Validation and error handling
## 6.1. Validation
- Why validate?
Bigger app === more data you will need from your users atsome point of time
You should prevent the user from entering something incorrect
The validation can
either succeed and allow the data to be written to the database
reject the input and return some information
**How to validate?**
- Client-Side
Before any request is sent, we can write some JS that watchesfor input changes and approve the UX
It's optional because the user can see, change and disable thecode because, JS runs in the browser
This is not a protection that secures you against incorrect databeing sent to your server
- Server-side
The code can't be seen, change or disabled, because it happenson the server, not in the browser. This is the place where youshould add validation and filter out the invalid data
After that, you will be sure you only work with valid data andstore the correct information into the database
-- Database
For most database engines there is a build in validation whichyou can turn on
It's not required, because there should be no scenario whereyour database work with invalid data
Make sure you have proper server-side validation and your database works with correct data

### 6.1.1. validator.js - Is a library of string validators and sanitizers
Installation and Usage
```
npm install validator --save
```
Server-side usage
```js
const validator = require('validator');
const body = req.body;
validator.isEmail(body.email); // true or false
```
Client-side usage
```html
<script type="text/javascript" src="validator.min.js"></script>
<script type="text/javascript">
  validator.isEmail($('#email').val()); // true or false
</script> 

```
### 6.1.2. express-validator 
Is a set of express.js middlewares that wraps validator.js validator and sanitizer functions
Installation and usage
```
npm install express-validator --save
```
```js
const { check, validationResult } = require('express-validator'); 

check('email').isEmail()
check('password').isLength({ min: 5 });

const errors = validationResult(req);

if(!errors.isEmpty()) // Return 422 status and export errors

// Create user...
```
**Sanitizers** are functions which implement sanitization which is
Making sure that the data is in the right format
Removing any illegal character from the data
normalizeEmail: canonicalizes an email address
trim: trim characters from both sides of the input
blacklist - remove characters that appear in the blacklist
and more...
**Sanitising** input is also something that makes sense to be done
You can do it in one step with validating
```js
const { body } = require('express-validator');
body('email')
	.isEmail() // check if the string is an email (validation)
	.normalizeEmail(), // canonicalizes an email address (sanitization)
body('password')
	.isLength({ min: 5 })
	.isAlphanumeric()
	.trim() // trim characters (whitespace by default) - sanitization

```
Тhе sanitization mutates the request
This means that if req.body.email was sent
with the value "PeteR@ood.bg    "
after the sanitization its value will be "peter@ood.bg"
### 6.1.3. Custom validator
Validation is defined in the SchemaType
Validation is middleware
Mongoose registers validation as a pre('save') hook
It's asynchronously recursive
can be customizable
unique option for schemas is not validator
It's a convenient helper for building MongoDB unique indexes

Express-validators allows you to create custom validationsand that send custom messages
```js
const { body } = require('express-validator');

app.post('/user', body.('email').custom(value => {
    return User.findUserByEmail(value)
        .then(user => {
	      if(user){
                return Promise.reject('E-mail already in use');
            }
	  });
};

```
**Mongoose Save/Validate Hooks**
The save() function triggers validate() hook
all pre('validate') and post('validate') hooks get called beforeany pre('save') hook
```js
schema.pre('validate', function() {
  console.log('this gets printed first');
});
schema.post('validate', function() {
  console.log('this gets printed second');
});
schema.pre('save', function() {
  console.log('this gets printed third');
});
schema.post('save', function() {
  console.log('this gets printed fourth');
});

```
**Mongoose Built-in Validators**
All SchemaTypes have built-in required validator
Numbers have min and max validators
Strings have enum, match, minelngth and maxlength
```js
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 20,
    },
});

```
**Mongoose Custom Validators**
- If the build-in validators aren't enough, you can definecustom validators to suit your needs
```js
var userSchema = new Schema({
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  }
});

```

### 6.1.4. Custom Sanitizer
Can be implemented by using the method .customSanitizer()
```js
const { sanitizeParam } = require('express-validator');

app.post('/object/:id', sanitizeParam('id').customSanitizer(value => {
  return ObjectId(value);
}), (req, res) => {
  // Handle the request...
});

```

### 6.1.5. Mongoose Validation Errors
- Errors returned after failed validation contain an error objectwhose values are ValidatorError object
has kind, path, value and message properties
```js
toy.save((err) => {
	assert.equal(err.errors.color.message, 'Color');
	assert.equal(err.errors.color.kind, 'Invalid color');
	assert.eqial(err.errors.color.path, 'color');
	assert.equal(err.errors.color.value, 'Green');
	...
});

```
No matter which approach you choose, in the end some ofthe validations can fail
 You should always return a helpful error message to the user
Never reload the page but always keep the user data insertedbecause that is a bad user experience
More info
https://express-validator.github.io/docs/
https://mongoosejs.com/docs/validation.html


## 6.2. Error Handing
Errors in your code should be handled properly
- These errors can be different types
	- Technical/Network Errors
	MongoDB server might be down

	- "Usual"/"Expected" Errors
	File can't be reads or some database operation fails

	- Bugs/Logical Errors
	User object used when it doesn't exist
This errors are our fault
They should be fixed during development

### 6.2.1. Working with errors
An error is a technical object in a node application. This built-inerror object can be thrown
Synchronous code
try-catch
Asynchronous code
then()-catch()
In the end in both scenario, you have to choice
Directly handle the error
Use ExpressJS functionality

### 6.2.2. Error Handling
There is a scenarios where you can't continue but there is notechnical error
If some user try to login but the username does not exist
You must check the values and decide what to do
Thrown an error
Directly handle the "error"
- Handling errors synchronously
```js
const User = require('../models/User/);

async (req, res, next) => {
    const { username, password } = req.body;
    try{
	const currentUser = await User.findOne({ username });
	// Login...
    } catch (e) {
      // Handle error properly...
    }  
};

```
- Handling errors asynchronously
```js
Post.findById(postId)
 .then((post) => {
   // Delete post
 })
 .catch(error => {
   if (!error.statusCode) {
      error.statusCode = 500;
   }  
   next(error); })

```
In all cases you can: 
Return an error page
Return a response with error information
Redirect

---
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

### npm packages fail to install

- can be caused by erronous spefication of the "main" & "scripts: {"start"}" field in package.json.
For example if the starting point is index.js the file needs to be present

### Node.js Debig terminal starts evry time i execute  acommand from the terminal
- delete all terminal from the delete(bin) button near the drop down menu on the right and leave only 
```
1: powershell
```
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
