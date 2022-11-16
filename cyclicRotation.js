//Given an array of n integers and an integer k, rotate the array k times in clockwise order.
//1. We will first take mod of K by N (K = K % N) because after every N rotation array will become the same as the initial array.



function cyclicRotation(n,arr,k){
    //if rotation is greater than size of arr
    k = k%n
    let newArr = []
    for(let i = 0; i< n; i++){
        if(i < k){
            // printing right most kth Element
            newArr.push(arr[n+i-k])
        }
        else{
            //arr after k elements
            newArr.push((arr[i-k]))
        }
    }
    return newArr
}

function main() {
    let n = parseInt(readLine(), 10);
    let arr = readIntArr();
    let k = parseInt(readLine(), 10);
    let result = cyclicRotation(n, arr, k);
    console.log(...result);
}