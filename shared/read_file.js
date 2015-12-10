var fs = require('fs');

module.exports = function(fileName, cb) {
  fs.readFile(fileName, function(err, data) {
    if (err) {
      cb(err);
    }

    cb(null, data);
  });
};
