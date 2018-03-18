### Build production and start server

``` bash
npm i
npm start
```

Static build in `./public/`

Express server listen [0.0.0.0:3000](http://0.0.0.0:3000/) 
or you can send PORT and HOST

```bash
HOST=example.loc PORT=3001 npm start
```

### Configs

You can change in [config/production.json](./config/production.json) and  [config/development.json](./config/development.json)

Information about FTP config below

### Build
All static is building in path: `./public`.

Use production config:

```bash
npm run build:prod
```

Use development config and show errors (--display-error-details):

``` bash
npm run build
```

Use development config and enable watcher (--watch)

``` bash
npm run build:watch
```

### Dev server

It is build for dev + watch + server + hot reload

Use production config:

``` bash
npm run devserver:prod
```
Link: [0.0.0.0:3000](http://0.0.0.0:3000/)

Use development config:

``` bash
npm run devserver
```

Link: [localhost:8060](http://localhost:8060/)

You can change host and port in [config](./config/) in field `devServer`.

And you can send env HOST and PORT. For example:

```bash
HOST=127.0.0.1 PORT=3001 npm run devserver
```

### Express server

It is only server.

Use production config:

``` bash
npm run server:prod
```

Link: [0.0.0.0:3000](http://0.0.0.0:3000/)

Use development config:

``` bash
npm run server
```


Link: [localhost:8060](http://localhost:8060/)

You can change host and port in [config](./config/) in field `expressServer`.

And you can send env HOST and PORT. For example:

```bash
HOST=127.0.0.1 PORT=3001 npm run server
```

If you want use express server and build watch then open two terminals:
```bash
# terminal 1:
npm run build:watch
 
# termitanl 2:
npm run server
```
or use devServer

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
