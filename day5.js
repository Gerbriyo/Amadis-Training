//ES6
const Myfunction = () => {  //arrow function
    let a=3 //let
    const b=55 //const
    return a+b 
}
console.log(Myfunction())  //function call

// object Destruction
let Detail={
    Name:"gerald",
    age:21,
    Dob:2002
}
let {Name,Dob}= Detail //destructuring
console.log(Name)
console.log(Detail.age)

//Array Destructuring
let A=[11,22,"Orange","Mango",66]
let [a,b,c,d,e]=A //destructuring
console.log(d,a)

//Spread operator
let A1=[11,22,"Orange","Mango",66]
let [...values]=A1 //destructuring
console.log(A1)

//Max value
let numbers=[11,22,"555",53,66]
let maxValue = Math.max(...numbers);
console.log(maxValue)
  
//for of
arr=["gerald",12,45,'briyolan']
for(let x of arr) //looping over array
    console.log(x)
Fname="Gerald"
for(let x of Fname) //looping over string
    console.log(x)

//set
let jo = new Set("Book Store");
console.log(jo)
jo.add(5)   // adding elements
jo.add("five")
jo.add(75)
jo.add("one")
console.log(jo)
let so =jo.forEach(val=>{     // using for each
    console.log(val)
})
console.log(jo.has(5)); //value is present or not 
console.log(jo.has(576))

 // map
 const map = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
let numb = map.get("apples");
console.log(numb)
 map.set ("gen","i7")
 map.set ("Brand","hp")
 map.set ("storage","ssd")
 map.set ("gen","i3") // it is updating the value
 console.log(map.keys())
 console.log(map.has("gen")) // if value is entered it shows true
 for (let [x,y] of map)(
    console.log(x + " : "+ y)
 )

 //class
 class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
  console.log(myCar1)

 //Promises
 let name = new Promise((resolvee, reject)=>{
    let status = false;
    if(status)
      resolvee()
    else
      reject()
  })
  name.then(() => console.log("Succcess"))
      .catch(() => console.log("Fail"))

//Default Parameter Values
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
console.log(myFunction(55))

//Rest parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
console.log(sum(4, 9, 16, 25, 29, 100, 66, 77))

//string functions
let text = "Hello world, welcome to the universe.";
console.log(text.includes("world"))    //string include        Returns true
console.log(text.startsWith("Hello"))  //String startWith      Returns true
console.log(text.endsWith("one"))     //string endsWith       Returns False

//Array Functions
let array=["orange", "apple",33,32,332]
const f = array.entries(); //Array entries
for (let x of f) {
  console.log(x)
}
const keys = array.keys(); //array keys
for (let x of keys) {
    console.log(x)
}
const integers = [4, 9, 16, 25, 29];
let first = integers.findIndex(myFunction); //find the index of greater number than 18
let second = integers.find(myFunction); //find the value of greater number than 18
function myFunction(value, index, array) {
  return value > 18;
}
console.log(first)
console.log(second)

let aaaa= Array.form("ABCDEFG")   // array form Returns [A,B,C,D,E,F,G]
console.log(aaaa)

//Math functions
console.log(Math.trunc(4.7))   // returns 4
console.log(Math.sign(-4),   // returns -1
Math.sign(0),   // returns 0
Math.sign(4))  //return 1
console.log(Math.cbrt(64))  // returns 4.
console.log(Math.log2(2))   // returns 1
console.log(Math.log10(10))  // returns 1

//New number properties
console.log(Number.EPSILON)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.isInteger(10))     // returns true
console.log(Number.isInteger(10.5))     // returns false)
console.log(Number.isSafeInteger(10))   // returns true 

//Global Method
console.log(isFinite(10/0))       // returns false
console.log(isFinite(10/1))       // returns true
console.log(isNaN("Hello"))       // returns true


