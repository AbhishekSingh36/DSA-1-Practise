//Given an array of n elements and an integer x,find the index where x is present in the array. If there are multiple occurrences, find the leftmost one. If x is not present, return -1.

function findElement(n, arr, x) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === x){
            return i
        }
    }return -1
}

function main() {
    let n = parseInt(readLine(), 10);
    let arr = readIntArr();
    let x = parseInt(readLine(), 10);
    let result = findElement(n, arr, x);
    print(result);
}