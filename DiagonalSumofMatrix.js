
function diagonalSum(n, matrix) {
    let principal = 0;
    for (let i = 0; i<n; i++){
        for(let j = 0; j < n; j++){
            if (i == j){
                principal = principal + matrix[i][j]
            }
        }
    }
    return principal
}

// NOTE: Please do not modify this function
function main() {
    let n = parseInt(readLine(), 10);
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(readIntArr());
    }
    let result = diagonalSum(n, matrix);
    print(result);
}
// Given a matrix of dimensions n x n, find the sum of elements along the principal diagonal of the matrix.

// Principal diagonal is the diagonal that starts at top left(0,0),(1,1) and goes to the bottom right (n-1,n-1).