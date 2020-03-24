const { binarySearch } = require('./array-binary-search.js');

describe('array binary search tests', () => {
  const array1 = [4, 8, 15, 16, 23, 42];
  const array2 = [11, 22, 33, 44, 55, 66, 77];
  
  const val1 = 15;
  const val2 = 90;


  it('should give the index of the value in the array', () => {
    expect(binarySearch(array1, val1)).toEqual(2);
  });

  it('should not find the value in the array', () => {
    expect(binarySearch(array2, val2)).toEqual(-1);
  });

});


