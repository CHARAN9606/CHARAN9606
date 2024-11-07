// const desc = Object.getOwnPropertyDescriptor(Math,'PI')

// Math.PI = 5;
// console.log(desc);
// const tea = {
//     name : "nandini",
//     price : 20,
//     madewith : true 
// }

// console.log(Object.getOwnPropertyDescriptor(tea,'name'));
// Object.defineProperty(tea,'name',{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(tea,'name'));


// class userdetails{
//     constructor(name,id){
//         this.name = name,
//         this.id = id
    
//     }
//     get name(){
//         return this._name.toUpperCase()
//     }
//     set name(value){
//         this._name=value
//     }
//     get id(){
//         return this._id.toUpperCase()
//     }
//     set id(value){
//         this._id=value
//     }
// }
// const details = new userdetails("ABC",1)
// console.log(details.name);



const user = {
    _name : "ABC",
    _id : 1
    ,
    get name(){
        return this._name.toUpperCase()
    },
    set name(value){
        this._name=value
    },
    get id(){
        return this._id
    },
    set id(value){
        this._id=value
    }

}

const detail = Object.create(user)
console.log(`ID : ${detail.id}`);

