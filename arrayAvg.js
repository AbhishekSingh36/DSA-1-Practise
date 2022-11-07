//Given the heights of n students of a class, find the average height. Your answer should be accurate upto 5 decimal places.

function averageHeight(n,arr) {
    //sum of Array
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum = sum + arr[i]
    }
    return parseFloat(sum /n)

}

function main() {
    let n=parseInt(readLine(),10);
    let arr=readFloatArr();
    let result=averageHeight(n,arr);
    print(result);
}