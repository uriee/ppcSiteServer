const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const favicon = require('serve-favicon');
const compression = require('compression');

const app = express()

port = 5000

server = http.createServer(app).listen(port) 

// compress all requests
app.use(compression());
app.use(express.static(path.join(__dirname, '../ppcsite/dist')));
app.use((req, res) => res.sendFile(__dirname + '../ppcsite/dist/index.html'));
// Switch off the default 'X-Powered-By: Express' header
app.disable('x-powered-by');
