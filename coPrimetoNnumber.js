function coprimeNumbers(n) {
    let result = 1;
    for(let i = 2; i<n; i++){
      if(gcd(i,n) == 1){
        result++
      }
    }return result
  }
  function gcd(a,b){
    if(a==0){
      return b
    }else{
      return gcd(b%a,a)
    }
  }
  
  // NOTE: Please do not modify this function
  function main() {
    let n = parseInt(readLine(), 10);
    let result = coprimeNumbers(n);
    print(result);
  }