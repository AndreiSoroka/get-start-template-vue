const express  = require('express');
const path  = require('path');
const configApp = require('./config');

const NODE_ENV = process.env.NODE_ENV || 'development';
console.log('NODE_ENV', NODE_ENV);

const configServer = configApp(NODE_ENV)['expressServer'];

const app = express();
const host = process.env.HOST || configServer.host;
const port = process.env.PORT || configServer.port;

app.set('port', port);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('*', express.static(path.join(__dirname, 'public')));

app.listen(port, host);

console.log('Server listening on ' + host + ':' + port);
