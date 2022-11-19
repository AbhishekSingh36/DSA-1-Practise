
function patternPrintingII(n){
    let arr = []
    let rows = "*"
    arr.push(rows);
    let add = " *"
    for(let i = 1; i<n; i++){
        rows += add
        arr.push(rows)
    }
    for(let j = n-2; j >= 0; j--){
        arr.push(arr[j])
    }
    return arr  
}
