(function testiify(){
    console.log(`Test iffy`);
})();

(
    (num,num1)=>{
        console.log(`Test iffy two${num+num1}`)
    }
)(3,4)



let v1=5
let v2=3

function mulnum(num1,num2){
    product=(num1*num2)
    return product    
}

let product1=mulnum(v1,v2)
console.log(product1);
console.log(mulnum(4,5));