var init = require('../shared/init');

init('input.txt', [
  countHousesVisited
]);

// part 1

function countHousesVisited(input) {
  var currentCoord = [0, 0];
  var housesVisited = {};
  var count = 0;

  input.split('').forEach(function(char) {
    var direction = char.toLowerCase();

    if (direction === '^') {
      currentCoord[0] += 1;
    } else if (direction === '>') {
      currentCoord[1] += 1;
    } else if (direction === 'v') {
      currentCoord[0] -=1;
    } else if (direction === '<') {
      currentCoord[1] -=1;
    }

    if (!housesVisited[currentCoord.join(':')]) {
      housesVisited[currentCoord.join(':')] = 1;
      count++;
    }
  });

  return count;
}
