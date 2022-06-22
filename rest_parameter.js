//rest parameters

function num(a,b,...c){
    console.log(`value of a is ${a}`)
    console.log(`value of b is ${b}`)
    console.log(`value of c is ${c}`)
}
num(2,4,5,6,4,2,7,8,)
// C me rest value ayega 

function myapp(...numbers)
{
    let total=0
    for(let number of numbers)
    {
        total=total+number
    }
    return total
    
}
// console.log(myapp(2,4,5,6,7,))
const ans=myapp(2,4,5,6,7)
console.log(ans)
