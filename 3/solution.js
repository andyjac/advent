var init = require('../shared/init');

init('input.txt', [
  countHousesVisited
]);

// part 1

function countHousesVisited(input) {
  var loc = [0, 0];
  var visited = {};
  var count = 0;

  input.split('').forEach(function(char) {
    var direction = char.toLowerCase();

    if (direction === '^') {
      loc[0] += 1;
    } else if (direction === '>') {
      loc[1] += 1;
    } else if (direction === 'v') {
      loc[0] -=1;
    } else if (direction === '<') {
      loc[1] -=1;
    }

    if (!visited[loc.join(',')]) {
      visited[loc.join(',')] = 1;
      count++;
    }
  });

  return count;
}
