// js code that shows that the Non-primitive datatypes are copied by reference(address).

function main()
{

    var a = [1,2,3,4]

    var b = a

    console.log(a)

    console.log(b)

    

    console.log("b after performing opearation : " , b)   // output will be same of a & b because the b is also has occupied the same space . 

    console.log("a after action performed on b :",a)

}

main();