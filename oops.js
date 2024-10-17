const userdetails = {
    name : 'Abc',
    age : 123,
    id : '123expcom',
    getuserdetails: function(){
        // console.log(`username : ${this.name}`);
       console.log(this) 

    }
}
console.log(userdetails.name);
console.log(userdetails.getuserdetails())


const user = function(name,sec,id){
    this.name = name;
    this.sec = sec;
    this.id=id;

    return this;
}
const newid1 = user("abc",1,123)
console.log(newid1);
