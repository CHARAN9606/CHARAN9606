const user = {
    name: "ABC",
    id:1
}

const student  = {
    batch: 1,
    attendence: true 
}

const clg ={
    holiday: false,
    __proto__ : student 
}
let anotherusername = "abc   "


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`Ture length: ${this.trim().length} `);
    
    
}
anotherusername.trueLength()
"Channel1".trueLength()

function setname(username){
    this.username = username
}
function details(username,email,idno){
    setname.call(this,username)
    this.email = email,
    this.idno = idno
}
const print = new details("aaaaa","abc@ex.com","123")
console.log(print);

