function capitalise(paragraph) {
    let arr = paragraph.split(" ");
    //console.log(arr)
    for(let i=0; i<arr.length; i++) {
      //console.log(arr[i], "1")
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
      //console.log(arr[i], "2")
    }
    return arr.join(" ");
  }
  capitalise("fill the details here")