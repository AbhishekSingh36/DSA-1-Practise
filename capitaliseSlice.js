function capitalise(paragraph) {
    let n = paragraph.length;
    let j = 0;
      
    if(paragraph[j] === " ") {
      j++;
      }
      
    paragraph = paragraph.charAt(j).toUpperCase() + paragraph.slice(j+1);
      
    if(n>1 && n<100) {
      for(let i=j+1; i<n; i++) {
        if(paragraph[i] === " ") {
          paragraph = paragraph.slice(0,i+1) + paragraph.charAt(i+1).toUpperCase() + paragraph.slice(i+2);
        }
      }
    }
    return paragraph;
  }
  
  // NOTE: Please do not modify this function
  function main() {
    let paragraph = readLine();
    let result = capitalise(paragraph);
    print(result);
  }

  //cap without split function