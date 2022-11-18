function checkPrime(n) {
    if(n<=1){
      return false
    }else{
      for(let i = 2; i<n; i++){
        if(n%i == 0){
          return false
        }
      }
    }
    return true
  }
  
  function main() {
    let tests = parseInt(readLine(), 10);
    while (tests--) {
      let n = parseInt(readLine(), 10);
      let result = checkPrime(n);
      console.log(result);
    }
  }