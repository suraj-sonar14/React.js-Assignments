// js code to reverse number 

var num  = prompt("enter number to reverse:")

console.log("entered Number:",num)

var array = num.split("")

var i ;

var rev=[]

 var j=0;

for(i=array.length-1; i >= 0; i--)
{
 
    rev[j]=array[i];

    j++;

}

var rev_num = rev.join("");

console.log("reverse number:",rev_num);

