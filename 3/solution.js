var init = require('../shared/init');

init('input.txt', [
  countHousesVisited,
  { fn: countHousesVisited, args: [2] }
]);

function countHousesVisited(input, numSanatas) {
  var numSanatas = numSanatas || 1;
  var santaTracker = buildSantaTracker(numSanatas);
  var visited = new Set();

  input.split('').forEach(function(char, i) {
    var loc = santaTracker[i % numSanatas];
    loc = directionMap[char](loc);

    visited.add(loc.join(','));
  });

  return visited.size;
}

// helpers

function buildSantaTracker(n) {
  var santaTracker = {};

  for (var i = 0; i < n; i++) {
    santaTracker[i] = [0, 0];
  }

  return santaTracker;
}

var directionMap = {
  '^': function(loc) { return [++loc[0], loc[1]]; },
  'v': function(loc) { return [--loc[0], loc[1]]; },
  '>': function(loc) { return [loc[0], ++loc[1]]; },
  '<': function(loc) { return [loc[0], --loc[1]]; }
};
