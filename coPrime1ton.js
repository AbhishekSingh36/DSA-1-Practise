function mutually_coprime(n)
{
    if (n <= 3)
    {
           
        // Loop for the numbers less
        // than the 4
        for(let j = 1; j < n + 1; j++)
           document.write(j + " " + "<br/>");
        document.write("<br/>");
    }
    else
    {
           
        // Integers 1, 2 and 3 can be
        // grouped into one group
        document.write("1 2 3" + "<br/>");
        for(let j = 4; j < n; j += 2)
        {
   
           // Consecutive even and
           // odd numbers
           document.write(j + " " + (j + 1) + "<br/>");
           if (n % 2 == 0)
           document.write(n + "<br/>");
        }
    }
}
   
     
    let n = 9;
    mutually_coprime(n);