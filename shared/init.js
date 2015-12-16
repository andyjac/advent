var readFile = require('./read_file');
var juxt = require('./juxt');
var logResults = require('./log_results');

module.exports = function(fileName, specs) {
  readFile(fileName, function(err, data) {
    if (err) {
      return console.log(err);
    }

    var input = data.toString().trim();
    var results = juxt(input, specs);

    logResults(results);
  });
};
