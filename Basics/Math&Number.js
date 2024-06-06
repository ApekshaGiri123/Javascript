console.log(Math)  //Math is a Object which contain methos and constant of Math 

console.log(Math.abs(-98));// abs function give us the absolute of value ,it neglect the negative sign

console.log(Math.round(4.2));// the value 4.2 is less than 4.5 so it round up it to 4
console.log(Math.round(4.6));// same here 5

console.log(Math.ceil(4.9));//it round up the value in higher
console.log(Math.floor(4.9))// it round up the value to lower bound

console.log(Math.max(10,30));// give the max value
console.log(Math.min(10,30));// give the min value


console.log(Math.random());// give random value in range 0-1 in decimal
console.log(Math.floor(Math.random()*10));


//random value between given range
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))