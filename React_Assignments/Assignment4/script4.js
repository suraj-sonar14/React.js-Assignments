// wirte the js code to calculate sum of all odd numbers betn 1 to 30

sum = 0;

var i;

for(i = 1;i <= 30; i++)
{
    if(i%2==1)
    {
        sum = sum + i;
    }

}

console.log("sum of odd numbers from 1 to 30:",sum);