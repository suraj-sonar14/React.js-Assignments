function main()
{
    //Task 2

    let num = prompt("Enter the number to check positive or negative:")

    if(num > 0)
    {
        console.log("Positive.")

    }
    else
    {
        if(num < 0)
        {
            console.log("Negative.")
        }
        else
        {
            console.log("number is zero.")
        }
    }
}

main()