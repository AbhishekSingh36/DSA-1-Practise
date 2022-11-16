let n = 9;
let string = ""
//outerLOOP
for(let i = 1; i< n; i++){
    //printing Spaces
    for(let j = 0; j<n-i; j++){
        string += ""

    }
    for(let k = 0; k<2*i-2; k++){
        string += "*"
    }string += "\n"
}
console.log(string)