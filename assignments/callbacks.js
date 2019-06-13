// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(arr.length);
}
getLength(items, function(length) {
  console.log(length);
});

function last(arr, cb) {
  return cb(arr[3]);
  // last passes the last item of the array into the callback.
}
last(items, function(last) {
  console.log(last);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
sumNums(3, 5, function(add) {
  console.log(add);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
multiplyNums(3, 5, function(multiply) {
  console.log(multiply);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (var i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return true;
    }
  }
}
contains("gum", items, function(abc) {
  console.log(abc);
});

/* STRETCH PROBLEM */

const myArray = [1, 2, 3, 4, 5, 5, 5, 5];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  helperArray = [];
  array.forEach(arrayItem => {
    if (!helperArray.includes(arrayItem)) {
      helperArray.push(arrayItem);
    }
  });
  return cb(helperArray);
}

// const someArr = [1, 2, 3, 4, 5, 5, 5, 5];function removeDuplicates(array, cb) {
//  removeDuplicates removes all duplicate values from the given array.
//  Pass the duplicate free array to the callback function.
//  Do not mutate the original array.
//  const helperArr = [...array];
//  let newArr = [];
//  newArr = [...new Set(helperArr)];
//  return newArr;
// }let q = removeDuplicates(someArr);
// console.log(someArr);
// console.log(q);
