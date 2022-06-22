function users(firstName, lastname,age, email, address)
 {
 const user=Object.create(users.prototype)
 user.firstName=firstName,
 user.lastname=lastname,
 user.age=age,
 user.email=email,
 user.address=address
 
 
 return user
 
 }
 
 users.prototype.about=function()
 {
 return (`${this.firstName} is ${this.age} year old`)
 }
 users.prototype.isage=function()
 {
 return this.age>=18 
 }
 users.prototype.sing=function()
 {
 return "toona na na la la"
 }
 const user1=users("divya","mishra",16,"divya34@gmail.com","myadd")
 const user2=users("moti","mishra",16,"divya34@gmail.com","myadd")
 const user3=users("pk","mishra",19,"divya34@gmail.com","myadd")
 console.log(user3.about())
 console.log(user2.about())
 console.log(user2.sing())
 console.log(user1)
