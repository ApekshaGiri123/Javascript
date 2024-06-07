/* thier is two type of declaration of Object
1- Literal-> not create the singleton Object ,it can have multiple instances
2- constructor-> it create the singleton Object
*/

const mySym=Symbol("key")
const obj={
    name:"Apeksha",
    age:22,
    city:"Pune",
    [mySym]:"my Key"
}

console.log( obj)
obj.msg=function(){
    console.log("Hi")
}

console.log(obj.msg())//Hi undefined
console.log(obj.msg)//[Function (anonymous)]
console.log(`hi Dear,${obj.name}`);