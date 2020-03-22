// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

function insertShiftArray(arr, val) {
  //find the middle of the array. Should account for arrays that contain an odd number of values by rounding up to nearing whole number. 
  const middleIndexPosition = Math.ceil(arr.length / 2);

  //use a for loop to iterate through the array
  for(let i = 0; i < arr.length; i++) {
  
    //if the index is less than the middleIndexPosition, do nothing
    if(arr[i] < middleIndexPosition) {
      return arr[i];
    }
    //if the index is equal to the middleIndexPosition, insert the value
    if(arr[i] === middleIndexPosition) {
      return val;
    }
    //if the index is greater than the middleIndexPosition, move it to the next index position
    else {
      return arr[i] + 1;
    }
  } 
  //return the insetShiftArray
  return insertShiftArray;
} 

module.exports = {
  insertShiftArray
};
