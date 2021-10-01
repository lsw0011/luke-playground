const http = require('http'),
    fs = require('fs'),
    path = require('path')

const dir = __dirname;


const server = http.createServer((req, res) => {
    if(req.url === `/build/bundle.js`) {
        res.writeHead(200, { 'Content-Type':'application/javascript'});

        readStream = fs.createReadStream( dir + '/dist/build/bundle.js' );

        readStream.pipe(res)
    }else{
        res.writeHead(200, { 'Content-Type':'text/html'});
        readStream = fs.createReadStream( dir + '/dist/index.html' );
        readStream.pipe(res)
    }
})

server.listen(1112)