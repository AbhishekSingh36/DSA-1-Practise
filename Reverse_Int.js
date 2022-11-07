function reverseNum(n) {
    if(n<10 && n>=0){
      return n;
    }
    let sum=0;
    while(n>=10){
      sum= sum*10+(n%10)*10;
      n= Math.floor(n/10);
      if(n<10){
        return sum+n;
        }
    }
    return sum;
}