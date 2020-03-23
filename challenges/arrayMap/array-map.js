// Write a function called map which takes an array and a function as arguments. Without utilizing any of the built-in methods available to your language, return an array with the function applied to each element.

function map(arr, func) {
  //create a new empty array
  let newArray = [];
  //use a for loop to iterate through arr
  for(let i = 0; i < arr.length; i++) {
    //set newArray with index i equal to the function which takes arr[i] as it's argument
    newArray[i] = func(arr[i]);
    //return the new array
  }   return newArray;
}

//export for testing
module.exports = { 
  map 
};





