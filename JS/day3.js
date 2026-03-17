// Task 1
let num = prompt("Enter a number");
let result = Number(num) + 10;
console.log(result);

// Task 2
let n1 = Number(prompt("Enter first number"));
let n2 = Number(prompt("Enter second number"));
console.log(n1 + n2);

// Task 3
let value = prompt("Enter any value");
console.log(Boolean(value));

// Task 4
let num1 = Number("123");
console.log(num1 * 5);

// Task 5
console.log(Number(true));
console.log(Number(false));

// Task 6
let str = prompt("Enter a string");
console.log(Boolean(str));

// Task 7
let a = Number("100");
let b = Number("50");
console.log(a - b);

// Task 8
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(""));

// Task 9
console.log("10" + 20); 
// because string + number = string concatenation

// Task 10
let num2 = Number("25");
console.log(num2 > 20);


// Task 11
let age = Number(prompt("Enter age"));
if(age >= 18){
    console.log("Eligible to vote");
}else{
    console.log("Not eligible");
}

// Task 12
let number = Number(prompt("Enter number"));
if(number >= 0){
    console.log("Positive");
}else{
    console.log("Negative");
}

// Task 13
let n = Number(prompt("Enter number"));
if(n % 2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
}

// Task 14
let x = Number(prompt("Enter number 1"));
let y = Number(prompt("Enter number 2"));
let z = Number(prompt("Enter number 3"));

let largest = x;
if(y > largest) largest = y;
if(z > largest) largest = z;
console.log("Largest:", largest);

// Task 15
let temp = Number(prompt("Enter temperature"));
if(temp > 35){
    console.log("Hot day");
}else if(temp < 20){
    console.log("Cold day");
}else{
    console.log("Normal weather");
}

// Task 16
let marks = Number(prompt("Enter marks"));
if(marks >= 35){
    console.log("Pass");
}else{
    console.log("Fail");
}

// Task 17
let username = prompt("Enter username");
let password = prompt("Enter password");

if(username === "admin" && password === "1234"){
    console.log("Login success");
}else{
    console.log("Invalid login");
}

// Task 18
let year = Number(prompt("Enter year"));
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log("Leap year");
}else{
    console.log("Not leap year");
}

// Task 19
let time = Number(prompt("Enter time (0-24)"));
if(time < 12){
    console.log("Morning");
}else if(time < 17){
    console.log("Afternoon");
}else if(time < 20){
    console.log("Evening");
}else{
    console.log("Night");
}

// Task 20
let salary = Number(prompt("Enter salary"));
if(salary >= 50000){
    console.log("Tax:", salary * 0.20);
}else if(salary >= 30000){
    console.log("Tax:", salary * 0.10);
}else{
    console.log("No tax");
}


// Task 21
for(let i=1;i<=10;i++){
    console.log(i);
}

// Task 22
for(let i=10;i>=1;i--){
    console.log(i);
}

// Task 23
for(let i=1;i<=50;i++){
    if(i % 2 === 0) console.log(i);
}

// Task 24
for(let i=1;i<=50;i++){
    if(i % 2 !== 0) console.log(i);
}

// Task 25
let table = Number(prompt("Enter number"));
for(let i=1;i<=10;i++){
    console.log(table + " x " + i + " = " + table*i);
}

// Task 26
let sum = 0;
for(let i=1;i<=100;i++){
    sum += i;
}
console.log(sum);

// Task 27
let fact = Number(prompt("Enter number"));
let factorial = 1;
for(let i=1;i<=fact;i++){
    factorial *= i;
}
console.log(factorial);

// Task 28
let count = 0;
for(let i=1;i<=100;i++){
    if(i % 5 === 0) count++;
}
console.log(count);

// Task 29
for(let i=1;i<=10;i++){
    console.log(i*i);
}

// Task 30
let num3 = Number(prompt("Enter number"));
let rev = 0;

while(num3 > 0){
    let digit = num3 % 10;
    rev = rev * 10 + digit;
    num3 = Math.floor(num3 / 10);
}
console.log(rev);


// Task 31
let fruits = ["apple","banana","orange"];
for(let fruit of fruits){
    console.log(fruit);
}

// Task 32
console.log(fruits.length);

// Task 33
let arr = [10,50,30,90,20];
let max = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i] > max) max = arr[i];
}
console.log(max);

// Task 34
let numbers = [2,4,6,8];
let total = 0;
for(let num of numbers){
    total += num;
}
console.log(total);

// Task 35
let arr2 = [2,5,8,11,20];
for(let num of arr2){
    if(num % 2 === 0){
        console.log(num);
    }
}


// Task 36
let person = {
    name:"John",
    age:25,
    city:"Chennai"
};

for(let key in person){
    console.log(key, person[key]);
}

// Task 37
console.log(Object.keys(person).length);

// Task 38
if("salary" in person){
    console.log("Salary exists");
}else{
    console.log("Salary not found");
}

// Task 39
for(let key in person){
    console.log(person[key]);
}

// Task 40
let employee = {
    name:"Arun",
    role:"Developer",
    salary:50000,
    department:"IT"
};

console.log(employee.name);
console.log(employee.role);
console.log(employee.salary);
console.log(employee.department);