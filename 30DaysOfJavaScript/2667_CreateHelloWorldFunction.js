//2667. Create Hello World Function
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".


/**
 * @return {Function}
 */
var createHelloWorld = function (args) {
  return function (...args) {
    return "Hello World";
  };
};

//imporve code
const createHelloWorld2 = () => () => "Hello World";

 Input: args = [];
 console.log(createHelloWorld(args));
 console.log(createHelloWorld2(args));

 Input: args = [{}, null, 42];
 console.log(createHelloWorld(args));
 console.log(createHelloWorld2(args));