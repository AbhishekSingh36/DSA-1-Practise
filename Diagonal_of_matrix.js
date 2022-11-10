//concept for Diagonal
let MAX = 100;
  
    // Function to print the Principal Diagonal
    function PrincipalDiagonal(mat, n)
    {
        console.log("Principal Diagonal: ");
  
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
  
                // Condition for principal diagonal
                if (i == j) {
                    console.log(mat[i][j] + ", ");
                }
            }
        }
    
    }
  
    // Function to print the Secondary Diagonal
    function SecondaryDiagonal(mat, n)
    {
        console.log("Secondary Diagonal: ");
  
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
  
                // Condition for secondary diagonal
                if ((i + j) == (n - 1)) {
                    console.log(mat[i][j] + ", ");
                }
            }
        }
    
    }
     
    let n = 4;
    let a = [ [ 1, 2, 3, 4 ],
              [ 5, 6, 7, 8 ],
              [ 1, 2, 3, 4 ],
              [ 5, 6, 7, 8 ] ];
 
    PrincipalDiagonal(a, n);
    SecondaryDiagonal(a, n);