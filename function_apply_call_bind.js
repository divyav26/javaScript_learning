// apply bind, call

function about(hobby, favffood)
{
    console.log(this.firstname, this.lastename, hobby, favffood)
}

const user1={
    firstname:"anita",
    lastename:"mishra"
}


const user2={
    firstname:"priti",
    lastename:"yadav"
}

about.call(user1, "guiter", "pasta")
about.apply(user2,["guiter2", "pasta2"])
const funny=about.bind(user1,"guiter0", "pasta0")
funny()


//we can not use arraow function 
// const person={
//     name:"diivya",
//     age:"21",
//     about:()=>
//     {
//         console.log(this.name, this.age)
//     }
// }
// about.person.call()
