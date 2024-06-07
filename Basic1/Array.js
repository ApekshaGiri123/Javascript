const myArr=[1,2,3,4,5]
console.log(myArr);

const newArr=new Array(6,7,8,9,10)
console.log(myArr.length);

myArr.push(2)// add element
myArr.pop()//delete element

console.log(myArr)

console.log("index of 5:",myArr.indexOf(5));
console.log("unshift of 5:",myArr.unshift(5));// add element to the first position && and return length of new array





// slice and splice

const arr=[1,2,3,4,5,6]
console.log("slice",arr.slice(1,3));//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log(arr);

console.log("splice",arr.splice(1,3));//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(arr);