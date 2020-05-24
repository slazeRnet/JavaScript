
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

Writeable - can only be written to (process.stdout)
Duplex - both Readable and Writeable (TCP sockets)
Transform - the output is computed from the input (zlib, crypto)








