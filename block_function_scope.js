// block VS function scope


{
    var fname="divya"
    console.log(fname)
}


{
    let lname="mishra"
    console.log(lname)
}



//we can access the =>var
console.log(fname)
 
//we can not access =>let
//console.log(lname)

// const 

// const num=5
function myapp()
{
    const num=5
    var fname="divya"
    console.log(fname)
    console.log(num)

    function app2()
    {
        // const num=5
        let lastname="mishra"
        console.log(lastname)
        console.log(fname)
        console.log(num)
    }
    app2()
}

myapp()


