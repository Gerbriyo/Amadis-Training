let name ="gerald";
console.log(name);

const $a= 6;
console.log($a);

var _x=1+2+3+"5"+6+7
console.log(_x);

let a1=1;
{
    let b1=11;
    console.log(b1);
}
console.log(a1);

let x=9;
let y=99; let g="9"
//Arithmetic operator
console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(x**y);
console.log(x%y);
console.log(x++);console.log(++x);
console.log(y--);console.log(--y);

//comparision operator
console.log(x==g);
console.log(x===g);
console.log(x>y);console.log(x<y);
console.log(x>=y);console.log(x<=y);
console.log(x!=y);console.log(x!==y);
console.log(x<=10?"small":"big");

//logical operator
console.log(x < 10 && y > 1);
console.log(x < 10 || y > 1);
console.log(!(x==y));

//bitwise operator
console.log(5&1);
console.log(5|1);
console.log(5^1);
console.log(~5);
console.log(5>>1);
console.log(5>>>1);
console.log(5<<1); 

const car = ["BMW", "Swift", "Toyota"]
car[0]="Benz"
car.push("Rolls Royce")
console.log(car);