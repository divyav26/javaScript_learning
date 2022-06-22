// object destructuing


const obj1={
    key1:"divya",
    key2:"annie"
}



const{va1, var2}=obj1
console.log(obj1)



const band={
    fname:"divya",
    year:2000,
    lname:"mishra"
   }
   let{fname, year, ...res}=band
   console.log(band)
   console.log(res)

   
   