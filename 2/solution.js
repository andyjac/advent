var init = require('../shared/init');
var FILE_NAME = 'input.txt';

init(FILE_NAME, [
  calculateWrappingPaperSum,
  calculateRibbonSum
]);

// part 1

function calculateWrappingPaperSum(input) {
  var presents = parsePresents(input);
  var wrappingPaperSum = 0;

  presents.forEach(function(present) {
    var presentSpec = parsePresentDimensions(present);

    wrappingPaperSum += calculateWrappingPaperPerPresent(presentSpec)
  });

  return wrappingPaperSum;
}

function calculateWrappingPaperPerPresent(spec) {
  var sideOne = spec.length * spec.width;
  var sideTwo = spec.width * spec.height;
  var sideThree = spec.height * spec.length;
  var smallestSide = Math.min(sideOne, sideTwo, sideThree);

  return (2 * sideOne) + (2 * sideTwo) + (2 * sideThree) + smallestSide;
}

// part 2

function calculateRibbonSum(input) {
  var presents = parsePresents(input);
  var ribbonSum = 0;

  presents.forEach(function(present) {
    var presentSpec = parsePresentDimensions(present);

    ribbonSum += calculateRibbonPerPresent(presentSpec);
  });

  return ribbonSum;
}

function calculateRibbonPerPresent(spec) {
  var sides = [spec.length, spec.width, spec.height];
  var smallestTwoSides = findSmallestTwoSides(sides);
  var smallestPerimeter = calculateSmallestPerimeter(smallestTwoSides);
  var bow = spec.length * spec.width * spec.height;

  return smallestPerimeter + bow;
}

function findSmallestTwoSides(sides) {
  var sorted = sides.sort(function(a, b) {
    return a - b;
  });

  return [sorted[0], sorted[1]];
}

function calculateSmallestPerimeter(sides) {
  var sideOne = sides[0];
  var sideTwo = sides[1];

  return sideOne + sideOne + sideTwo + sideTwo;
}

// helpers

function parsePresents(input) {
  var presents = input.trim().split('\n');

  return presents;
}

function parsePresentDimensions(present) {
  var presentDimensions = present.split('x');

  return {
    length: +presentDimensions[0],
    width: +presentDimensions[1],
    height: +presentDimensions[2]
  };
}
