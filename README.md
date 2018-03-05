### Build production

``` bash
npm i
npm run build
```

Static build in `./public/`

### Build development

Build and show errors (--display-error-details)

``` bash
npm i
npm run build:dev
```

Build and watch

``` bash
npm i
npm run build:watch
```

### Dev server

It is build for dev + watch + server + hot reload

``` bash
npm run server
```

Link: [localhost:8060](http://localhost:8060/)

You can change host and port in [config/development.json](./config/development.json)

### Test

``` bash
npm run test
```

See: 
[mochajs.org](https://mochajs.org/)
and
[chaijs.com](http://chaijs.com/)

Includes all files by pattern `./application/**/*.test.js`

### Development

Project tree

 * [application](./application)
   * [router](./application/router)
   * [vue](./application/vue)
   * [vuex](./application/vuex)
 * [config](./config)
 * node_modules
 * public

(!) In this project connected `bootstrap` and `normalize`. 
If you want to remove that then need to remove modules
 in [package.json](./package.json) and remove connected [app.scss](./application/vue/app.scss)
 
Settings [ESLint](https://eslint.org/) in [.eslintrc](./.eslintrc). 
You can disable ESLint in [webpack.config.js](./webpack.config.js).   


### Deploy
Rename [./config/ftp.example.json](./config/ftp.example.json) to `./config/ftp.json` 

After then
``` bash
npm run deploy
```
