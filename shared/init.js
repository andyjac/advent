var readFile = require('./read_file');
var juxt = require('./juxt');
var logResults = require('./log_results');

module.exports = function(fileName, fns) {
  readFile(fileName, function(err, data) {
    if (err) {
      return console.log(err);
    }

    var results = juxt(data.toString(), fns);

    logResults(results);
  });
};
