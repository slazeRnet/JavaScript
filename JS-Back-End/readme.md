
# 1. Intro to NodeJS (TODO)
### 1. Creating a NPM package
run the following command in the cmd:
```
npm
npm init //to initialise the package creation
```

this will generate a `package.json` file.

### 2. Create a web Server
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

# 2. Node.js Streams and Utilities

__DEFINITIONS__
### 1. Isomorphic/Universal Routing

Reusing code with Isomorphic/Universal Routing
Isomorphic/Universal provides routing for the web app both on the server and the client

Suppose you create a web app in the latest technology i.e. React only to find that the user has to wait for the entire JS to be downloaded and rendered before the user can see anything in the browser window.

React provides Server Side Rendering - SSR which can be used to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

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

The fs module gives you access to the file system
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
