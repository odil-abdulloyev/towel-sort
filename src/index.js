module.exports = function towelSort(matrix = []) {
  return matrix.reduce((acc, arr, i) => acc.concat(i % 2 ? arr.reverse() : arr), []);
}
