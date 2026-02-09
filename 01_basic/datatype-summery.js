// primitive

// 7 types: String, Number, Boolean, null, undefined, symbole, Bigint

const score = 100
const scoreValue = 100.9
const isLoggedin = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id===anotherid)

const bignumber = 32445335435n

// Reference (Non primititve)

// Array, Object, Function

const heros = ["saktiman", "NAgraj", "doga"]

let my ={
    name :"Kunal",
    class : "sex"
}

const myfun = function(){
    console.log("Hello world");
}

console.log(typeof(heros))