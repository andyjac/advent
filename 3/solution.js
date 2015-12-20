var init = require('../shared/init');

init('input.txt', [
  countHousesVisited,
  { fn: countHousesVisited, args: [2] }
]);

function countHousesVisited(input, numSantas) {
  var numSantas = numSantas || 1;
  var santaTracker = buildSantaTracker(numSantas);

  input.split('').forEach(function(char, i) {
    var santa = santaTracker[i % numSantas];
    var currentLoc = santa.currentLoc;
    currentLoc = directionMap[char](currentLoc);

    santa.visited.add(currentLoc.join(','));
  });

  return zipSantas(santaTracker).size;
}

// helpers

function zipSantas(santas) {
  var keys = Object.keys(santas);

  if (keys.length === 1) {
    return santas["0"].visited;
  }

  return new Set(
    keys.reduce(function(arr, id) {
      var visited = santas[id].visited;

      return arr.concat([...visited]);
    }, [])
  );
}

function buildSantaTracker(n) {
  var santaTracker = {};

  for (var i = 0; i < n; i++) {
    santaTracker[i] = {
      currentLoc: [0, 0],
      visited: new Set()
    };
  }

  return santaTracker;
}

var directionMap = {
  '^': function(loc) { return [++loc[0], loc[1]]; },
  'v': function(loc) { return [--loc[0], loc[1]]; },
  '>': function(loc) { return [loc[0], ++loc[1]]; },
  '<': function(loc) { return [loc[0], --loc[1]]; }
};
