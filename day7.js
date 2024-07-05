// const arr=[1,2,3,[2,3,4,[4,5]]]
// const newarray=arr.flat(Infinity)
// console.log(newarray);

// console.log(Array.isArray("google"));
// console.log(Array.from("google"));


// const sc1=100
// const sc2=300
// const sc3=400
// console.log(Array.of(sc1,sc2,sc3));

const sym= Symbol("symex")

let obj={
    name:"Chs",
    [sym]:'symex',
    no:12345,
    mail:"Chs@example.com.",
    loggedin:false
}
// console.log(obj.name);
// console.log(obj['no'])
// console.log(obj.mail);
// console.log(obj.loggedin);
// console.log(obj[sym])

// obj.email="Chs@adbode.com"
// console.log(obj.email);
// Object.freeze(obj)
// obj.email='Chs@modi.com'

// console.log(obj);



obj.greeting=new function(){
    console.log('hello')
}

obj.greetingtwo=function(){
    console.log(`hello from${this.name}`);
}
console.log(obj.greetingtwo())