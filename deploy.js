const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();
const ftpConfig = require('./config/ftp.json');

let config = {
  username: ftpConfig.user,
  password: ftpConfig.password,
  host: ftpConfig.host,
  port: ftpConfig.port,
  localRoot: __dirname + "/public/",
  remoteRoot: ftpConfig.remoteRoot,
  // include: ['build/version.txt'],
  exclude: ['.DS_Store']
};

ftpDeploy.deploy(config, function (err) {
  if (err) console.log(err);
  else console.log('status (100%) > finished');
});

ftpDeploy.on('uploading', function (data) {
  console.log(`status: ${data.transferredFileCount}/${data.totalFileCount} files (${data.percentComplete}%) > uploading "${data.filename}"`);
});
