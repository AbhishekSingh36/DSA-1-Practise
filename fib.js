function nthFibonacciNumber(n) {
    if(n<=1){
        return n
    }else{
        return nthFibonacciNumber(n-1) + nthFibonacciNumber(n-2)
    }
}
// NOTE: Please do not modify this function
function main() {
    let n = parseInt(readLine(), 10);
    const result = nthFibonacciNumber(n);
    console.log(result);
}