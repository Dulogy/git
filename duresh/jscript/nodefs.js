// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);

const express = require('express')

const app = express()

app.get('/',(req,res)=>res.send('hello world'))

app.listen(3000,()=> console.log('server running on port 3000'));