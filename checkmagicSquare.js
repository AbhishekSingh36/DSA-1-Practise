// Given a matrix of dimensions n x n having elements 1 to n*n distinct elements, check whether the matrix is magic square or not.

// Magic square is a square that has the same sum along all rows, columns and diagonals.

function checkMagicSquare(n, matrix) {
    //for diagonals
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for(let i = 0; i<matrix.length; i++){
        primaryDiagonal += matrix[i][i]
        secondaryDiagonal += matrix[i][n-1-i]
    }

    for(let i = 0; i < matrix.length; i++){
        let columnSum = 0;
        let rowSum = 0;
        for(let j = 0; j<matrix.length; j++){
            rowSum += matrix[i][j]
            columnSum += matrix[j][i]
        }
        if(rowSum != columnSum || columnSum != primaryDiagonal){
            return false
        }
    
    }return true
}


function main() {
    let n = parseInt(readLine(), 10);
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(readIntArr());
    }
    let result = checkMagicSquare(n, matrix);
    if (result == true) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

