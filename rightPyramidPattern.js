let pyramidRight = (rows) => {
  
    for(let i = 1; i <= rows; i++){
      let str = '';
      for(let k = 1; k <= rows - i; k++){
        str += ' ';
      }
      for(let j = 1; j <= i; j++){
        str += '*';
      }
      console.log(str);
    }
 }