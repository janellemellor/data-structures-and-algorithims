// Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

//arr = sorted array and search = search key
function binarySearch(arr, search) {
  //iterate through the sorted array
  for(let i = 0; i < arr.length; i++) {
    //if the search key exists in the array
    if(arr[i] === search) {
      //return the index of the element
      return i;
    }
    //if the search key does not exist in the array
    else if(arr[i] !== search) {
      //return -1
      return -1;
    } 
  } 
}

module.exports = {
  binarySearch
};

