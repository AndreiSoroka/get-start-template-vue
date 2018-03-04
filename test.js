const glob = require('glob'), path = require('path');

glob.sync('./application/**/*.test.js').forEach(function (file) {
  require(path.resolve(file));
});
