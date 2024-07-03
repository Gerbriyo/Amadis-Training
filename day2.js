// //for loop
for(let i=0; i<=16; i++){
    console.log(i)
}
// //for in loop
const cr ={name:"BMW", year:2024};
for(let x in cr){
    console.log(x)
}
const cars =["name","BMW", "year",2024];
for(let xx in cars){
    console.log(cars[xx])
}
// //for of
const carrs =["name","BMW", "year",2024];
for(let y of carrs){
    console.log(y)
}
const CAR ="Abish R P";
for(let u of CAR)
    console.log(u)
// for each
const Car =["name","BMW", "year",2024];
Car.forEach(myFunction);
function myFunction(values,index,array){
    console.log(values)
}
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  console.log(value) ;
}
// if else conditions
let age=16
if (age>=18){
    console.log("Ready to vote")
}
else{
    console.log("Not Ready to vote")
}
// else if
let mark=40
if (mark>=50 && mark<=100){
    console.log("Pass")
}
else if (mark<50 && mark >=0){
    console.log("Fail")
}
else{
    console.log("Enter a valid number")
}
//Switch Case
function Today(day) {
let message;
    switch (day) {
        case 'monday':
            message = "Day 1";
            break;
        case 'tuesday':
            message = "Day 2";
            break;
        case 'wednesday':
            message = "Day 3";
            break;
        case 'thursday':
            message = "Day 4";
            break;
        case 'friday':
            message = "Day 5";
            break;
        case 'saturday':
            message = "Day 6";
            break;
        case 'sunday':
            message = "Day 7";
            break;
        default:
            message = "Enter a correct day";
            break;
    }
    return message;
}
let day = 'wednesday';
console.log(Today(day));
    
// functions
function gerald (a,b)
{
    return a*b;
}
let z=gerald(2,2)
console.log(z)
