module.exports = function(input, specs) {
  var results = [];

  specs.forEach(function(spec, i) {
    if (typeof spec === 'function') {
      var fn = spec;

      return results.push(fn(input));
    }

    var fn = spec.fn;
    var args = spec.args;
    args.unshift(input);

    results.push(fn.apply(null, args));
  });

  return results;
};
