function subtract2numbers(number1,number2) {
    console.log(number1-number2);
    
}
subtract2numbers(3,2);
function subtract2numbers(number1,number2) {
    let result= number1-number2;
    return result
    
};

let result = subtract2numbers(4,3)
console.log("Result:",result)


function Loggedin(name) {
    if(!name){
        console.log("Enter a Name")
        return
    }
    return `${name} just logged in`   
}
console.log(Loggedin("Chs"))


function abscentes(val,val2,...num){
    return num
}

console.log(abscentes(2,3,4,5))


function object1(objects){
    console.log(`user name:${objects.name} id:${objects.id} `);
}
object1({
    name:"user1",
    id:1
})


const array=[1,2,3,4,5,6]

function returnarray(num){
    return  num[5 ]
}

console.log(returnarray(array));