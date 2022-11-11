function additionOfMatrix(matrix1, matrix2) {
    let result = []
    for(let i = 0; i < matrix1.length; i++){
        let row = []
        for(let j = 0; j < matrix1[0].length; j++){
           row.push(matrix1[i][j] + matrix2[i][j])

        }
        result.push(row)
    }
    return result;
}




// NOTE: Please do not modify this function
function main() {
    let [n, m] = readLine();
    let matrix1 = [];
    let matrix2 = [];
    for (let i = 0; i < n; i++) {
        matrix1.push(readIntArr());
    }
    for (let i = 0; i < n; i++) {
        matrix2.push(readIntArr());
    }
    let finalMatrix = additionOfMatrix(matrix1, matrix2);
    for (const row of finalMatrix) {
        console.log(...row);
    }
}