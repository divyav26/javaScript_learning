//sort method

const array1=[22,43,21,2]
array1.sort()
console.log(array1)


const string=["priti","divya", "motii"]
string.sort()
console.log(string)



const number=[22,12,43,20]
const Anumber=number.sort((a,b)=>
{
    return a-b
})
console.log(Anumber)


const product=[
    {productId:1, productName:"mobile", price:12000},
    {productId:2, productName:"laptop", price:40000},
    {productId:3, productName:"tv", price:3000},
    {productId:4, productName:"mobile", price:5000},
    {productId:5, productName:"laptop", price:40000},
    {productId:6, productName:"tv", price:22000}
   ]

   const lowprice=product.sort((a,b)=>
   {
       return a.price-b.price
   })
   console.log(lowprice)


   const highprice=product.sort((a,b)=>
   {
       return b.price-a.price
   })
   console.log(highprice)