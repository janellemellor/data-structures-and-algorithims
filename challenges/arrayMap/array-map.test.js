const { map } = require('./array-map.js');

const array = [5, 10, 15];
  
function addTwo(num) {
  return num + 2;
}

function multiplyTwo(num) {
  return num * 2;
}

describe('array-map tests', () => {
  it('adds two to each number in the array', () => {
    expect(map(array, addTwo)).toEqual([7, 12, 17]);
  });

  it('multiplies two to each number in the array', () => {
    expect(map(array, multiplyTwo)).toEqual([10, 20, 30]);
  });

});
