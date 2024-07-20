// For //

const { Console } = require("console");

for (let i = 1; i <=10; i++) {
    console.log(`loop values: ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(`multiplication of ${i} * ${j}: ${i*j}`);
        
    }
    
}

let arrayex=['abc','bcd',1,2,3,4]
console.log(arrayex.length);

for (let z = 0; z < arrayex.length; z++) {
    const elements = arrayex[z];
    console.log(elements);

    
 }

for (let index = 0; index <10; index++) {
    if(index==6){
        console.log("Got 6");
        break

    }
    console.log(`values are ${index}`);
    
}


for (let index = 0; index <10; index++) {
    if(index==6){
        console.log("Got 6");
        continue

    }
    console.log(`values are ${index}`);
    
}



// WHILE //

let v=0;
while (v<=20) {
    console.log(`value of v is ${v}`)
    v=v+3
    
}

let arr=["a",'b','c']

let arra=0
while (arra<arr.length) {
    console.log(`elements are   ${arr[arra]}`);
    arra = arra+1
    
}


let marks=100

do{
console.log(`Marks is ${marks}`)
marks =marks+10
}while (marks<=101);