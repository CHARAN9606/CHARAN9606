// const user={
//     name:"ABC",
//     id : 123,
//     welcome: function(){
//         console.log(`${this.name},welcome dude`)
//         console.log(this);
//     }
// }
// //  user.welcome()
// //  user.name="BCD"
// //  user.welcome()

// console.log(this)


// function learn(){
//     console.log(this)
// }
// learn()


// const user = ()=>{
//    let username="Learner"
//     console.log(this);
// }

// user()

// const user=(num1,num2)=>{
//     return num1+num2

// }
// console.log(user(2,3));



// const user2=(num3,num4)=> num3/num4

// console.log(user2(10,4));


const user3=(num1,num2)=>({username:"ABC"})

console.log(user3(1,2))



