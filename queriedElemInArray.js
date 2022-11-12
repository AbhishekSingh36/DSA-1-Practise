function findElementQuery(n, arr, x) {
    for(let p = 0; p < n; p++){
        if(arr[p] === x){
            return p            
        }
    }return -1
}


// NOTE: Please do not modify this function
function main() {
    let n = parseInt(readLine(), 10);
    let arr = readIntArr();
    let q = parseInt(readLine(), 10);
    while (q--) {
        let x = parseInt(readLine(), 10);
        let result = findElementQuery(n, arr, x);
        console.log(result);
    }
}

// Problem Description
// Given a sorted array containing n elements and q queries. Each query is an integer x. Find the index at which x is present in the array. If there are multiple occurrences then find the leftmost one. If x is not present, return -1.