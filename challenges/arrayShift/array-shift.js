// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

function insertShiftArray(arr, val) {
  //find the middle of the array. Should account for arrays that contain an odd number of values by rounding up to nearing whole number. 
  const middleIndexPosition = Math.ceil(arr.length / 2);
  let shiftedArray = [];

  //use a for loop to iterate through the array
  for(let i = 0; i < arr.length; i++) {
  
    //if the index is less than the middleIndexPosition, set the index of the new array equal to the index of the old array
    if(i < middleIndexPosition) {
      shiftedArray[i] = arr[i];
    }
    //if the index is equal to the middleIndexPosition, insert the value at that index
    else if(i === middleIndexPosition) {
      shiftedArray[i] = val;
    }
    //if the index is greater than the middleIndexPosition, move it to the next index position
    else {
      shiftedArray[i] = arr[i - 1];
    }
  } 
  //return the insetShiftArray
  return shiftedArray;
}

module.exports = {
  insertShiftArray
};
