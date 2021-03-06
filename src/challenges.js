/* eslint-disable */

/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function.
  // Return the new array.
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]));
  }
  return newArray;
};

/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...args) => {
    if (count < n) {
      count++;
      return cb(...args);
    }
    return null;
  };
};

/* ======================== Prototype Practice ============================ */

// ***Prototypes do NOT have test cases built for them.  You must use the console logs provided at the end of this section.***

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides.

// Create a CuboidMaker constructor function that accepts properties for length, width, and height

// Create a seperate function property of CuboidMaker that returns the volume of a given cuboid's length, width, and height
// Formula for cuboid volume: length * width * height

// Create a seperate function property of CuboidMaker that returns the surface area of a given cuboid's length, width, and height.
// Formula for cuboid surface area of a cube: 2(length * width + length * height + width * height)

// Create a cuboid object that inherits from CuboidMaker.
// The cuboid object must contain keys for length, width, and height.

// To test your formulas, pass these key/value pairs into your constructor: length: 4, width: 5, and height: 5. When running your logs, you should get Volume: 100 with a Surface Area of 130.

// Use these logs to test your results:

// function CuboidMaker(options) {
//   this.length = options.length;
//   this.width = options.width;
//   this.height = options.height;
// }
// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// };
// CuboidMaker.prototype.surfaceArea = function() {
//   return 2*(this.length * this.width + this.length * this.height + this.width * this.height);
// };

// const cuboid = new CuboidMaker({
//   length: 4,
//   width: 5,
//   height: 5
// });
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* ======================== Class Practice ============================ */

// ***Class Practice does NOT have test cases built.  You must use the console logs provided at the end of this section.***

// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax

// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.

// Create two new methods on the Cube class to calculate the volume and surface area of a cube given the same values passed in from CuboidMaker.

// The volume of a cube is: length * width * height
// The surface area of a cube is: 6 * (length + width)

// Create a new cube object that has equal values for length, width, and height

// To test your formulas, pass these key/value pairs into your constructor: length: 2, width: 2, and height: 2. You should get Volume: 8 with a Surface Area of 24.

// Use these logs to test your results:

// class CuboidMaker {
//   constructor(options) {
//   this.length = options.length;
//   this.width = options.width;
//   this.height = options.height;
//   }
//   volume() {
//     return this.length * this.width * this.height;
//   }
//   surfaceArea() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }
// }

// class Cube extends CuboidMaker{
//   constructor(optionsCube) {
//     super(optionsCube);
//   }
//   surfaceArea() {
//     return 6 * (this.length * this.width);
//   }
// }

// const cuboid = new CuboidMaker({
//   length: 4,
//   width: 5,
//   height: 5
// });

// const cube = new Cube({
//   length: 2,
//   width: 2,
//   height: 2
// });

// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// console.log(cube.volume()); // 8
// console.log(cube.surfaceArea()); // 24

/* ======================== Stretch Challenges ============================ */

// Challenge 1: Go back to your prototype CuboidMaker and extend cube using psuedo-classical inheritance to achiveve the same results you built using the ES6 class syntax

// Use these logs to test your results:

// function CuboidMaker(options) {
//   this.length = options.length;
//   this.width = options.width;
//   this.height = options.height;
// }
// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// };
// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// };

// function Cube(optionsCube) {
//   CuboidMaker.call(this, optionsCube);
// }
// Cube.prototype = Object.create(CuboidMaker.prototype);

// Cube.prototype.surfaceArea = function() {
//   return 6 * (this.length * this.width);
// }

// const cuboid = new CuboidMaker({
//   length: 4,
//   width: 5,
//   height: 5
// });

// const cube = new Cube({
//   length: 2,
//   width: 2,
//   height: 2
// });

// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// console.log(cube.volume()); // 8
// console.log(cube.surfaceArea()); // 24

// Challenge 2: Go back to your class Cube and add the following property: isCube.
// Create a method inside of Cube that checks for isCube and if it's true, returns a string 'We have a cube!';

class CuboidMaker {
  constructor(options) {
    this.length = options.length;
    this.width = options.width;
    this.height = options.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

class Cube extends CuboidMaker {
  constructor(optionsCube) {
    super(optionsCube);
    this.isCube = optionsCube.isCube;
  }
  surfaceArea() {
    return 6 * (this.length * this.width);
  }
  checkIfCube() {
    if (this.isCube) {
      return "We have a cube!";
    }
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

const cube = new Cube({
  length: 2,
  width: 2,
  height: 2,
  isCube: true
});

// Use these logs to test your results:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 8
console.log(cube.surfaceArea()); // 24
console.log(cube.checkIfCube()); // "We have a cube!"

// Challenge 3: Recursion
const checkMatchingLeaves = obj => {
  // const array = Object.values(obj);

	// // look at first element of array
	// if (typeof array[0] !== 'object') {
	// 	shifted = array.shift();
	// }

	// // check if object
	// if (typeof array[0] === 'object') {
	// 	// check if object is single-indexed
	// 	if (Object.values(array[0]).length === 1) {
	// 		array[0] = Object.values(array[0])[0]
	// 		shifted = array[0]
	// 	} else {
	// 		array[0] = checkMatchingLeaves(array[0])
	// 	}
	// }

	// if (shifted !== array[0] && array[0] !== undefined && array[0] !== true) {
	// 	console.log('shifted:', shifted, array[0])
	// 	return false;
	// }


	// if (array.length === 0) return true;

  // return checkMatchingLeaves(array);

  /* REGEX WAY */
  array = JSON.stringify(obj).replace(/[^0-9]*/gm, ',').split(',').filter(v => v);
  while (array.length > 1) {
    if (array[0] === array[1]) {
      array.shift()
    } else {
      return false
    }
  }
  return true
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  checkMatchingLeaves
};
