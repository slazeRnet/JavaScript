const http = require('http');
const PORT = 5000;

http.createServer((req, res) => {
    res.write('Hello world from browser');
    if (req.method === 'POST') {
        let body = '';
        req.on('data', data => { body += data });
        req.on('end', () => {
            console.log(body);
        });
    }
    res.end();
}).listen(PORT);

console.log(`Server started successfully on port ${PORT}`);