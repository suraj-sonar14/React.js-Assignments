// primitive datatypes that shows that  the primitive datatypes are copied by value.

function main()
{
  
       var a = 9;

       var b = a;

       console.log("a = ",a)   

       console.log("b = ",b)

       b = 8;

       console.log("b after performing action = ", b)       // output b = 8

       console.log("a = ", a)                               // output a = 9



}


main()