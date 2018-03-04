const http = require('http');
const fs = require('fs');
const httpPort = 8060;
const path = require('path');
const DIR = path.join(__dirname, 'public');
const INDEX = path.join(__dirname, 'public/index.html');
const chalk = require('chalk');
const open = require("open");

//https://stackoverflow.com/questions/5823722/how-to-serve-an-image-using-nodejs
const mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript'
};

http.createServer((req, res) => {
  let reqpath = req.url.toString().split('?')[0];

  if (req.method !== 'GET') {
    res.statusCode = 501;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Method not implemented');
  }

  let file = (/\/$/.test(reqpath)) ? INDEX : path.join(DIR, reqpath);

  if (file.indexOf(DIR + path.sep) !== 0) {
    console.log(DIR);
    console.log(reqpath);
    console.log(file);
    res.statusCode = 403;
    res.setHeader('Content-Type', mime.txt);
    return res.end('Forbidden');
  }

  let type = mime[path.extname(file).slice(1)] || mime.txt;

  console.log(`> ${chalk.blue(file)}`);
  let s = fs.createReadStream(file);
  s.on('open', function () {
    res.setHeader('Content-Type', type);
    s.pipe(res);
  });
  s.on('error', function () {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 404;
    res.end('Not found');
  });

}).listen(httpPort, () => {
  let url = `http://localhost:${httpPort}`;
  console.log(`Server listening on: ${url}`);
  open(url);
});
