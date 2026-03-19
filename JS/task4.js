//task1

function print(){
    console.log("Hello World");
}
print();

// Task 2
function name(name){
    console.log(name);
    
}
name("Bharath");

// Task 3
function add(num1, num2){
    return num1+num2;
}

console.log(add(2,3));

// Task 4   
function evenorodd(num){
    if(num %2 === 0){
        console.log(even);
    } else{
        console.log(odd);
    }
}

evenorodd(4);

//task5

function square(num){
    console.log(num * num);
}
square(5);

// Task 6
function largeof3(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        console.log(num1);
    } else if(num2 >= num1 && num2 >= num3){
        console.log(num2);
    } else {
        console.log(num3);
    }
}

// Task 7
function age(age = 18){
    console.log(age);
}
age();

//task8
function fullname(fname, lname){
    console.log(fname + " " + lname);
}
fullname("Bharath", "Kumar");

// Task 9
function mul0f3(num1, num2, num3){
    return num1 * num2 * num3;
}
console.log(mul0f3(2, 3, 4));

// Task 10
function scopeDemo() {
    if (true) {
        var a = 10;   // function scoped
        let b = 20;   // block scoped
        const c = 30; // block scoped
    }

    console.log("var:", a); // works

    // console.log("let:", b);   // error
    // console.log("const:", c); // error
}
scopeDemo();
// console.log(a); // error

// Task 11
var globalvar = "I am global";
function globalDemo(){
    console.log(globalvar); // works
}
globalDemo();

// Task 12

function nestedFunction(){
    function innerFunction(){
        console.log("Hello from inner function");
    }
    innerFunction();
}
nestedFunction();

// Task 13

{
    let x = 100;
    console.log(x); // works
}
// console.log(x); // error

// Task 14
console.log(a); // undefined (hoisted)
var a = 5;

// console.log(b); // ReferenceError (temporal dead zone)
let b = 10;

// Task 15

