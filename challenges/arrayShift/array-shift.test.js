const { insertShiftArray } = require('./array-shift.js');

const array1 = [2, 4, 6, 8];
const array2 = [4, 8, 15, 23, 42];

const val1 = 5;
const val2 = 16;
  


describe('arrayShift tests', () => {
  it('should insert 5 into the middle', () => {
    expect(insertShiftArray(array1, val1)).toEqual([2, 4, 5, 6, 8]);
  });

  it('should insert 16 into the middle', () => {
    expect(insertShiftArray(array2, val2)).toEqual([4, 8, 15, 16, 23, 42]);
  });

});
