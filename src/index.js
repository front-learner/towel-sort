
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let emptyArray = [];
  if (!matrix || !matrix[0]){
    return emptyArray ;
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2) {
      matrix[i].reverse();
    }
  }
return matrix.flat();
}
