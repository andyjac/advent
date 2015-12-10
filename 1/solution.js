var init = require('../shared/init');
var FILE_NAME = 'input.txt';

init(FILE_NAME, [
  getCurrentFloor,
  findBasementPosition
]);

// part 1

function getCurrentFloor(chars) {
  var currentFloor = 0;

  chars.split('').forEach(function(char) {
    if (char === '(') {
      currentFloor++;
    } else if (char === ')') {
      currentFloor--;
    }
  });

  return currentFloor;
}

// part 2

function findBasementPosition(chars) {
  var currentFloor = 0;
  var position = 0;

  chars.split('').some(function(char, i) {
    if (char === '(') {
      currentFloor++;
    } else if (char === ')') {
      currentFloor--;
    }

    position = i + 1;

    return currentFloor === -1;
  });

  return position;
}
