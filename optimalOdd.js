function oddNumbers(N) {
    let arr = []
    for(let i = 1; i<=N; i+=2){
        if(i%2 != 0){
            arr.push(i)
        }
    }return arr
}
function main() {
    let n = parseInt(readLine());
    let arr = oddNumbers(n);
    arr.forEach( i => {
      print(i)
      print(" ")
   } );
}