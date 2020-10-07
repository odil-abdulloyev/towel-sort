
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  let result = [];
  let i = 0;
  matrix.map(arr => {
    if (i % 2 !== 0) {
      arr = arr.reverse();
    }
    arr.map(x => result.push(x));
    ++i;
  });
  return result;
}
