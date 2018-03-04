### Build production

``` bash
npm i;
npm run build;
```

Static build in `./public/`

### Build development

Build and show errors (--display-error-details)

``` bash
npm i;
npm run build:dev;
```

Build and watch

``` bash
npm i;
npm run build:watch;
```


### Test

``` bash
npm run test;
```

See: 
[mochajs.org](https://mochajs.org/)
and
[chaijs.com](http://chaijs.com/)

Includes all files by pattern `./application/**/*.test.js`

### Dev server

``` bash
npm run server;
```

Link: [localhost:8060](http://localhost:8060/)

### Deploy
Rename [./config/ftp.example.json](./config/ftp.example.json) to `./config/ftp.json` 

After then
``` bash
npm run deploy;
```
