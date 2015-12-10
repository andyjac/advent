module.exports = function(input, fns) {
  var results = [];

  fns.forEach(function(fn) {
    if (typeof fn !== 'function') {
      throw new Error('fn must be a function!');
    }

    results.push(fn(input));
  });

  return results;
};
