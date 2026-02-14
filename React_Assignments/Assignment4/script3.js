// find factorial of a number using for loop;

var n = prompt("Enter a number:");

var i;

var result = 1;

function fact(n)
{
      if(n===0 || n===1)
      {
        return 1;
      }

      for(i = 2; i <= n; i++)
      {  
        result = result * i;
      }

      return result;
}

console.log(fact(n));