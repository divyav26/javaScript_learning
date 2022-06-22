
    const Emp=[
        {id1:1, fname:"divya", lname:"mishra"},
        {id2:2, fname:"annie", lname:"mishra"},
        {id3:3, fname:"priti", lname:"yadav"}
    ]
let[user1,user2,user3]=Emp
console.log(Emp)
console.log(user1)
const[{fname:user1fname}, {lname:user3lname}]=Emp
console.log(user1fname)
console.log(user3lname)


//
const users=[
    {userid1:1, firstname:"divya", gender:"female"},
    {userid2:2, firstname:"laxmi", gender:"female"},
    {userid3:3, firstname:"pk", gender:"female"},
   ]
   const[userid1, userid2, userid3]=users
   console.log(userid1)
   console.log(users)
   