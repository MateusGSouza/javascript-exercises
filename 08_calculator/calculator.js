const add = function(...args) {
  let count = 0;

	args.forEach(item => {
    count += item
  });
  return count
};

const subtract = function(...args) {
  const result = args.reduce((accumulator, number) => accumulator - number);
  return result
};

const sum = function(...args) {
  let count = 0;

  args.forEach(function(item) {
    if (item.length == 0) {
      return 0;
    } else {
      count += item.reduce((accumulator, number) => accumulator + number);
    }
  });
  return count
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  // multiply,
  // power,
  // factorial
};
