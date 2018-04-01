#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const ghdownload = require('github-download');

const PWD = process.env.PWD;
const APP_DIR = process.argv[2];
const URL = 'https://github.com/AndreiSoroka/get-start-template-vue/archive/master.zip';

if (process.argv.length <= 2) {
  console.log("Need select directory. See https://github.com/AndreiSoroka/get-start-template-vue");
  process.exit(-1);
}

start().then(() => {
  console.log(`cd ${APP_DIR}`);
});


async function start() {
  let pathFowApplication = path.join(PWD, APP_DIR, '/');
  try {
    await createPath(pathFowApplication);
    await download(URL, pathFowApplication);
  } catch (e) {
    console.log(e);
  }
}


function createPath(p) {
  if (!fs.existsSync(p)) {
    console.log('path created:', p);
    return fs.mkdirSync(p);
  }

  console.log('path is already created:', p);
}

function download(url, dest) {
  console.log('download app');
  return new Promise((resolve, reject) => {

    ghdownload({
      user: 'AndreiSoroka',
      repo: 'get-start-template-vue',
      ref: 'master'
    }, dest).on('end', function () {
      resolve();
    }).on('error', function (err) {
      reject(err);
    })

  });
}
