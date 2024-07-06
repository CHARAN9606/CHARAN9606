let obj={
    new:'xyz',
     newobj:{
        anotherobj:{
            mail:"xyz@gmail.com"
        }
    }
}
// console.log(obj.new)
// console.log(obj.newobj.anotherobj);

const a={ 1:'aa',2:'bb'}
const b={ 3:'cc',4:'dd'}
const c={ 5:'ee',6:'ff'}

// console.log(Object.assign({},a,b,c));


const d={...a,...b}
// console.log(d);

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

const edu={
    class:'14th',
    clg:'Engineering',
    sem:'4th'

}

const{class:currentclass

}=edu
console.log(currentclass);
console.log(edu.class);