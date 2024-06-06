// stack memory- use by all primitive data,and every time we get copy.
let a="tony"
b=a
console.table([a,b])
b="stark"
console.table([a,b])


// Heap memory- use by non primitive data type(Array,Objects,function).when changes are made ,it direct changes the value
const objOne={
    email:"abc@email.com",
    id:"123"
}
const objTwo=objOne
console.table([objOne.email,objOne.id,objTwo.email,objTwo.id])
objTwo.email="xyz@email.com"
console.table([objOne.email,objOne.id,objTwo.email,objTwo.id])
// 
let name="ABC"
let newString=name.slice(-1,4)
console.log(newString);