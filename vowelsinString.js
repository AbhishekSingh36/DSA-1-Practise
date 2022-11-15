function countVowels(word) {
    let count = 0;
    for(let i = 0; i<word.length; i++){
      if(isVovel(word[i]))
      ++count
    }
    return count
  }
  function isVovel(vo) {
    vo = vo.toLocaleUpperCase();
    return vo == "A" || vo == "E" || vo == "I" || vo == "O" || vo == "U";
  }
  
  function main() {
    let word = readLine();
    let result = countVowels(word);
    print(result);
  }