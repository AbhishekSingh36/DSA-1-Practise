function isVowel(word){
    word = word.toUpperCase();
    return(word == "A" || word == "E" || word == "I" || word == "O" || word == "U");

}

function countVowels(str,n){
    if(n == 1){
        return isVowel(str[n-1]);
    }
    return countVowels(str, n-1) + isVowel(str[n-1])
}