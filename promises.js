// const PromiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Asynch task ");
//         resolve();
        
//     },1000)
// })
// PromiseOne.then(function(){
//     console.log("Promise consumed");
    
// })

// new Promise(function(resolve,reject){
//     console.log("Asynch task 2");
//     resolve()
    
// }).then(function(){
//     console.log("Promise consumed  for task2");
    
// })
//  const PromiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({user : "ABC" , email: "abc@ex.com"})
//     },1000)
//  })
//  PromiseThree.then(function(user){
//     console.log(user)
//  })

//  const Promisefour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username : "Abc", Pass : "123"})
//          }
//          else{
//             reject('Error occured')
//          }
//     },1000)

//  })
//  Promisefour.then((user) =>{
//     console.log(user);
//      return user.username
// })
//  .then((username)=>{
//     console.log(username); 
//  })
//  .catch(function(error){
//     console.log(error)
//  })
//  .finally(()=>console.log("Promise is rejected or either resolved"))

 const Promisefive = new Promise(function(resolve,reject){
    setInterval(function(){
        let error = false;
        if(!error){
            resolve({name:"ddddd",pass:"11111"});
        }
        else{
            reject('error occured');
        }
    },1000)
 })
 async function consumefive(){
try {
    const response = await Promisefive
    console.log(response)
 } catch (error) {
    console.log("error occur");    
    } 
}
 consumefive()