function patternPrintingI(n){
    let star = [];
    let rows = "*";
    star.push(rows);
    let add = " *";
    for(let i=1; i<n; i++) {
        rows += add; 
        star.push(rows);
    }
    return star;
}
// NOTE: Please do not modify this function
function main() {
    let n = parseInt(readLine());
    let arr = patternPrintingI(n);
    arr.forEach( line => console.log(line, "\n"))
}

//with O(n) complexity, and using single loop