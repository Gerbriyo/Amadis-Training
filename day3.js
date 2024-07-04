// functions
function a(name){
    console.log("My name is "+name)
}
a("gerald")

//Arrow function
myFunction =() =>{
    console.log("Gerald")
}
myFunction()

 // Area using function
 let z;
 function area(l,b){
    return z=l*b
 }
 area(5,4)
 console.log(z)

 // operator
 function op(a,b){
    return a+b
 }
 console.log(op())
 
 function op(a,b){
    return a+b
 }
 console.log(op)
// function using backtick
 function name(n){
    console.log(`Hi, I am ${n}, How are you?`)
    console.log("Hi, I am " + n +", How are you?")
 }
 name("Gerald")
 // function inside a variable
 let ger=function (name){
    console.log(`I am ${name}, How are you?`)
 }
 ger("briyolan")
 // recurssion function
 function RE(Name,number){
    console.log(Name,number)
    number++
    if(number<=10)
    RE(Name,number)
 }
 RE("Gerald", 1)

 //objects

 //simple object
 let be={}
 console.log(be)

//object 
let car={
    name:"BMW", year:2022, model:"High" 
}
console.log(car)
console.log(car.name) //dot notation
console.log(car['model']) //bracket notation

//Complex object
let Bike={
    name:"BMW", 
    year:2020, 
    model:"High",
    period:{
        service:"early access",
        date:"june",
        day:24,
        years:2021
    } 
}
console.log(Bike.period) //dot notation
console.log(Bike.period.date)
console.log(Bike['period']['day']) //bracket notation
console.log(Bike.periodd?.date) //if the parameter is not available it shows undefined
delete (Bike.period.date) //delete a value from the object
console.log(Bike.period)

//function and object
var laptop={
    generation:"i7",
    ram:16,
    storage:"SSD",
    card:function(){console.log("It's RTX 3050")},
    Disk:()=>{console.log("Only Nvme SSD, No Hard disk")}
}
console.log(laptop.generation)
laptop.card()
laptop.Disk()

//this keyword
var sales={
    Monday:"High",
    Tuesday:"Medium",
    Wednesday:"Low",
    Thursday:"Loss",
    Friday:"Profit",
    total:function(){console.log(this.Friday)}
}
sales.total()

//constructor
function comp(gen,version){
    this.gen=gen,
    this.version=version
}
let full=new comp('i7',5)
let dull=new comp('mac',9)
console.log(full)
console.log(dull)

//Arrays
let values =[1,2,3,4,5]
console.log(values) 
console.log(values.length) //length
console.log(values[3]) //index value 
values.push(88) //inserting a new value
console.log(values) 
values.pop() //remove the last value
console.log(values) 
values.shift() //left shift
console.log(values) 
values.unshift(6) //right shift
console.log(values)  
values.sort()
console.log(values) 
values.splice(2,2,"orange","apple") //index, no of elements to remove
console.log(values)

//data  types
let data=["gerald", 21, {text:'daily'}, function(){console.log("It's an happy progress")}]
console.log(data)
data[3](); // printing a function

//for loop in array
 hello=[1,2,3,4,5,6,7,8]
 for(let x of hello){
    console.log(x)
 }

 //Destructuring of array
 B1=[1,2,3,4,5]
 let [A1,A2,A3,A4] =B1;
console.log(A3)

// swapping of elements
let r=20;
let t=90;
[r,t]=[t,r];
console.log(r,t);
 
//using Split
let words ="My name is Gerald Briyolan".split(' ');
let[a1,b1,c1, ...d1]=words;
console.log(d1)

//for each
let NUM=[33,44,5,676,33]
NUM.forEach(function myFunction(values){
    console.log(values)
})

//filter
var Numb = [22,33,44,55,66]
console.log(Numb.filter(n => n%2==0))

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
 var map = new Map()
 map.set ("gen","i7")
 map.set ("Brand","hp")
 map.set ("storage","ssd")
 map.set ("gen","i3") // it is updating the value
 console.log(map.keys())
 console.log(map.has("gen")) // if value is entered it shows false
 for (let [x,y] of map)(
    console.log(x + " : "+ y)
 )
