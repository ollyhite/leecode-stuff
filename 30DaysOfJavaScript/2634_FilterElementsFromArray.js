//2634. Filter Elements from Array
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

 

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10
// Example 2:

// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0
// Example 3:

// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out
 

// Constraints:

// 0 <= arr.length <= 1000
// -109 <= arr[i] <= 109


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const filterArray=[];

   for (let i = 0; i < arr.length; i++) {
     //in here do fn(arr[i],i) for Case2 need pass two argument
     //pass the value and the index as same time
    if (fn(arr[i],i)) {
      console.log("fn(arr[i], i)",fn(arr[i], i))
      filterArray.push(arr[i]);
    }
  }
  return filterArray
};

// Example 1
const arr1 = [0, 10, 20, 30];
const fn1 = function greaterThan10(n) {
  return n > 10;
};
const result1 = filter(arr1, fn1);
console.log("result1",result1); // Output: [20, 30]

// Example 2
const arr2 = [1, 2, 3];
const fn2 = function firstIndex(n, i) {
  return i === 0;
};
const result2 = filter(arr2, fn2);
console.log("result2",result2); // Output: [1]

// Example 3
const arr3 = [-2, -1, 0, 1, 2];
const fn3 = function plusOne(n) {
  return n + 1;
};
const result3 = filter(arr3, fn3);
console.log("result3",result3); // Output: [-2, 0, 1, 2]