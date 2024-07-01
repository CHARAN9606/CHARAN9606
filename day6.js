const arr=new Array(1,2,'String')
console.log(arr)

arr.push('element')
arr.push('3')
arr.pop()
arr.unshift(5)
arr.shift()
console.log(arr)

console.log(arr.includes(9));
console.log(arr.includes(2));
console.log(arr.indexOf(2));
const newarr=arr.join()
console.log(newarr);
console.log(arr);

const arr1= new Array(0,1,2,3,4,5)
console.log(arr1);

const s1=arr1.slice(1,3)
console.log('A ',s1);
console.log(arr1);


const sp=arr1.splice(1,3)
console.log('B ',sp)
console.log(arr1);