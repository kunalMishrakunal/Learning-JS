const name = "krishna"
const repoCount = 50

//string concatenation
//console.log(name + repoCount + "value")

console.log(`my name is ${name} and my repo count is ${repoCount}`)

//create another method to create a string
const anotherString = new String("hello world")
console.log(anotherString)

console.log(anotherString.__proto__)


//methods in string
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(0))
console.log(name.indexOf("s"))
console.log(name.split("i"))