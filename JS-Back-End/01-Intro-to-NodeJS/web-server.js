const http = require('http')
const PORT = 4000;

http.createServer((req, res) => {
res.write('Hello world from browser');
res.end();
}).listen(PORT);

console.log(`Server started successfully on port ${PORT}`);