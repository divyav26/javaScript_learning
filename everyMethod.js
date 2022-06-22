//every method

const number=[2,4,5.7,2]
const num=function(number)
{
    return number%2==0 
}
console.log(number.every(num))


const userCart=[
    {productId:1, productName:"mobile", price:12000},
    {productId:1, productName:"laptop", price:4000},
    {productId:1, productName:"tv", price:22000}
]

const Cart=userCart.every((cart)=>// koi bhi name de sakte h 
{
    cart.price<36000

})
console.log(Cart)


const UserCart=[
    {productId:1, productName:"mobile", price:12000},
    {productId:1, productName:"laptop", price:4000},
    {productId:1, productName:"tv", price:22000}
   ]
   const cart=UserCart.every((cartItem)=>cartItem.price<36000)
   console.log(cart)