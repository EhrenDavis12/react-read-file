const seed = '0123456789'

function randomString(length, chars=seed) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

export function generateMatrix({matrixSize}) {
  let matrix = [];
  for (let i = 0; i < parseInt(matrixSize); i++) {
    matrix[i] = randomString(matrixSize).split('');
  }
  return matrix;
}

function invalidMatrix(matrix) {
    return (matrix.length === 0);
}
export function getRecursiveSolutionFromMatrix(matrix) {
    let result = "";
    if (invalidMatrix(matrix)) return result;

    // get Top of matrix
    result += " " + matrix.shift().join(" ");

    // get Right side of matrix
    matrix.forEach(row => {
        result += " " + row.pop();
    })

    // get Bottom of matrix
    if (invalidMatrix(matrix)) return result;
    result += " " + matrix.pop().reverse().join(" ");

    // get Left side of matrix
    matrix.reverse().forEach(row => {
        result += " " + row.shift();
    })
    matrix.reverse()

    result += getRecursiveSolutionFromMatrix(matrix);
    return result;
}





