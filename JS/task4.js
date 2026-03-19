// -------------------- Section 1 --------------------

// Task 1
function hello() {
    console.log("Hello World");
}
hello();

// Task 2
function welcome(name) {
    console.log("Welcome " + name);
}
welcome("Bharath");

// Task 3
function add(a, b) {
    return a + b;
}
console.log(add(2,3));

// Task 4
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(4));

// Task 5
function square(n) {
    return n * n;
}
console.log(square(5));

// Task 6
function largest(a,b,c){
    return Math.max(a,b,c);
}
console.log(largest(3,7,5));

// Task 7
function user(age = 18){
    console.log(age);
}
user();

// Task 8
function fullName(first,last){
    return first + " " + last;
}
console.log(fullName("Spider","Man"));


// -------------------- Section 2 --------------------

// Task 9
function multiply(a,b,c){
    return a*b*c;
}
console.log(multiply(2,3,4));

// Task 10
function scopeDemo(){
    if(true){
        var a=10;
        let b=20;
        const c=30;
    }
    console.log(a);
}
scopeDemo();

// Task 11
function outer(){
    function inner(){
        console.log("Inner function");
    }
    inner();
}
outer();

// Task 12
let globalVar="Global";
function test(){
    console.log(globalVar);
}
test();

// Task 13
{
    let x=10;
}
// console.log(x); // error

// Task 14
console.log(a); 
var a=5;

// console.log(b); // error
let b=10;


// -------------------- Section 3 --------------------

// Task 15
let greet=function(){
    console.log("Hello");
};
greet();

// Task 16
let addArrow=(a,b)=>a+b;
console.log(addArrow(2,3));

// Task 17
let mul=(a,b)=>a*b;
console.log(mul(3,4));

// Task 18
let sayHi=function(){
    console.log("Hi");
};
sayHi();

// Task 19
let obj1={
    name:"John",
    show:function(){
        console.log(this.name);
    }
};
obj1.show();

let obj2={
    name:"John",
    show:()=>{
        console.log(this.name);
    }
};
obj2.show();

// Task 20
(function(){
    console.log("Executed immediately");
})();


// -------------------- Section 4 --------------------

// Task 21
function execute(fn){
    fn();
}
execute(()=>console.log("Callback executed"));

// Task 22
function calc(a,b,operation){
    return operation(a,b);
}
console.log(calc(5,2,(a,b)=>a+b));

// Task 23
function message(fn){
    fn("Hello user");
}
message((msg)=>console.log(msg));

// Task 24
function delay(fn){
    setTimeout(fn,2000);
}
delay(()=>console.log("Delayed execution"));

// Task 25
function myMap(arr,fn){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i]));
    }
    return result;
}
console.log(myMap([1,2,3],x=>x*2));


// -------------------- Section 5 --------------------

// Task 26
function addCurry(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(addCurry(1)(2)(3));

// Task 27
let multiplyCurry=a=>b=>c=>a*b*c;
console.log(multiplyCurry(2)(3)(4));

// Task 28
let greetCurry=greet=>name=>time=>
    `${greet} ${name} ${time}`;
console.log(greetCurry("Hello")("John")("Good Morning"));


// -------------------- Section 6 --------------------

// Task 29
function* gen(){
    yield "Message 1";
    yield "Message 2";
    yield "Message 3";
}
let g=gen();
console.log(g.next().value);

// Task 30
for(let val of gen()){
    console.log(val);
}

// Task 31
function* infinite(){
    let i=1;
    while(true){
        yield i++;
    }
}
let inf=infinite();
console.log(inf.next().value);


// -------------------- Section 7 --------------------

// Task 32
let arr1=[1,2];
let arr2=[3,4];
let merged=[...arr1,...arr2];
console.log(merged);

// Task 33
let obj={name:"John",age:25};
let clone={...obj,age:30};
console.log(clone);

// Task 34
let arr3=[...arr1,...arr2,5,6];
console.log(arr3);


// -------------------- Section 8 --------------------

// Task 35
function sum(...nums){
    return nums.reduce((a,b)=>a+b,0);
}
console.log(sum(1,2,3,4));

// Task 36
function restDemo(...args){
    console.log(args);
}
restDemo(1,2,3,4);

// Task 37
function max(...nums){
    return Math.max(...nums);
}
console.log(max(10,50,30));


// -------------------- Section 9 --------------------

// Task 38
let day=3;
switch(day){
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
}

// Task 39
let a1=10,b1=5,op="+";
switch(op){
    case "+": console.log(a1+b1); break;
    case "-": console.log(a1-b1); break;
    case "*": console.log(a1*b1); break;
    case "/": console.log(a1/b1); break;
}

// Task 40
let marks=85;
if(marks>=90){
    console.log("A");
}else if(marks>=75){
    console.log("B");
}else if(marks>=50){
    console.log("C");
}else{
    console.log("Fail");
}