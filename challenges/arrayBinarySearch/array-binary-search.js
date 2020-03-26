// Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

// arr = sorted array and search = search key
function binarySearch(arr, search) {
  //set the returned value to be -1
  let returnValue = -1;
  //iterate through the sorted array
  for(let i = 0; i < arr.length; i++) {
    //if the search key exists in the array
    if(arr[i] === search)
      //return the index of the element
      returnValue = i;
    //return the value
  } return returnValue;
} 


module.exports = {
  binarySearch
};

