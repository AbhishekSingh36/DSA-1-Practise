//Given an array of n integers, find the maximum element in the given array.

function maxInArray(n, arr) {
    let maxVar = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxVar){
            maxVar = arr[i]
        }
    }return maxVar

}
// NOTE: Please do not modify this function
function main() {
    let n = parseInt(readLine(), 10);
    let arr = readIntArr();
    let result = maxInArray(n, arr);
    console.log(result);
}