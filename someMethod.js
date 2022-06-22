// some method

const number=[2,5,6,7,8]
const ans=number.some((num)=>
{
    return num%2==0
})
console.log(ans)


const userCart=[
    {productId:1, productName:"mobile", price:12000},
    {productId:1, productName:"laptop", price:4000},
    {productId:1, productName:"tv", price:22000}
]

const Cart=userCart.some((cartItem)=>
{
    return cartItem.price<0// less than zero nhi h isy false ayega
})
console.log(Cart)
