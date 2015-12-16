var init = require('../shared/init');
var FILE_NAME = 'input.txt';

init(FILE_NAME, [
  countNiceStrings
]);

// part 1

function countNiceStrings(input) {
  var strings = input.split('\n');
  var numNiceStrings = 0;

  strings.forEach(function(string) {
    isNiceString(string) ? ++numNiceStrings : null;
  });

  return numNiceStrings;
}

function isNiceString(string) {
  var numVowels = 0;
  var foundTwoInARow = false;

  for (var i = 0; i < string.length; i++) {
    var charA = string[i];
    var charB = string[i + 1];

    if (charA && charB) {
      if (disallowedSeqMap[charA + charB]) {
        return false;
      }

      if (charA === charB) {
        foundTwoInARow = true;
      }
    }

    vowelMap[charA] ? ++numVowels : null;
  }

  return foundTwoInARow && numVowels >= 3;
}

// helpers

var vowelMap = {
  'a': true,
  'e': true,
  'i': true,
  'o': true,
  'u': true
};

var disallowedSeqMap = {
  'ab': true,
  'cd': true,
  'pq': true,
  'xy': true
};
