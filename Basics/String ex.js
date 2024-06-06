//to access specifieed range
let name="          my-name-is-xyz"
let newString=name.slice(0,4)
console.log(newString);


// convert string into array based on condition split(condition,limit)
let s=name.split('-')
console.log(s)

// it remove whitspaces trim
console.log(name.trim())

// replace
let r=name.replace('-','*')
console.log(r)

// include present of absent

console.log(name.includes('m'))