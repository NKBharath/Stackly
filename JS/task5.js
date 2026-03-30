//1
let a=[10,20]
let a2=[30,40]
let a3=[...a,...a2+50]
console.log(a3)

//2
let original = [1, 2, 3];

let clone = [...original];
clone.push(4);
console.log("Clone:", clone);
//3
let a4={
    salary:344,
    name:"sa"

}
let a5={
    salary:23,
    name:"k7"
}
let merge={...a4,...a5}
console.log(merge)
//4
function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30));
//5
function re(a,b,...rest){

    console.log(rest)
}
re(10,20,30,40)
//6
let ar=[10,20,30]
let [first,,last]=ar
console.log(first)
console.log(last)
//7
let c = 10;
let b = 20;

[c, b] = [b, c];

console.log(c);
console.log(b);
//8
let arr = [1, [2, [3, [4]]]];

let [ , [ , [ , [value]]]] = arr;

console.log(value);
//9
let obj = { name: "John", age: 25 };

let { name: userName, age } = obj;

console.log(userName);
console.log(age);
//10
let obj1 = { name: "John" };

let { name, agee = 18 } = obj;

console.log(name);
console.log(agee);
//11
let d=[10,20,30]
d.push(40,50)
console.log(d)
//12
let d1=[10,20,30]
let lastt=d1.pop()
console.log(lastt)
//13
let d2=[10,20,30]
d2.shift()
console.log(d2)
//14
let d3=[10,20,30]
d3.unshift(5)
console.log(d3)
//15
let d4=[10,20,30,40]
d4.splice(2,1)
console.log(d4)
//16
let arr1 = [1000, 2000, 3000, 4000, 5000, 6000, 7000];

let result = arr1.slice(3, 6);

console.log(result);
//17
let e=[10,20,30,40]
e.splice(1,2)
console.log(e)
//18
let arr2 = [1, [2, [3, [4]]]];

let resultt = arr.flat(Infinity);

console.log(resultt);
//19
let arr3 = [1, [2, [3, [4]]]];

let resulttt = arr.flat(1);

console.log(resulttt);
//20
let e1=[10,20,30,40]
e1.splice(1,2,45)
console.log(e1)
//21
let f=[10,20,30,40]
let f1=f.includes(10)
console.log(f1)
//22
let f2 = [1, 2, 3, 4, 3, 5];

let index = f2.indexOf(3, 2);

console.log(index);
//23
let f3=[1,5,3,5,2]
let f4=f3.lastIndexOf(5)
console.log(f4)
//24
let arr5= [10, 20, 30];

let res = arr5.every(function(num) {
    return num > 0;
});

console.log(res);
//25
let arr6 = [10, 20, 30];

let ress = arr6.some(function(num) {
    return num > 50;
});

console.log(ress);
//26
let arr7 = [10, 5, 100, 1];

arr7.sort(function(a, b) {
    return a - b;
});

console.log(arr7);
//27
let arr8 = [10, 5, 100, 1];

arr8.sort(function(a, b) {
    return b - a;
});

console.log(arr8);
//28
let employees = [
    { name: "A", salary: 3000 },
    { name: "B", salary: 1000 },
    { name: "C", salary: 2000 }
];

employees.sort(function(a, b) {
    return a.salary - b.salary;
});

console.log(employees);
//29
let ar2 = [1, 2, 3, 4];

arr.reverse();

console.log(ar2);
//30
let ar3 = [10, 5, 100, 1];

arr.sort();

console.log(ar3);
//31
let ele = [10, 20, 30];

ele.forEach(function(value) {
    console.log(value);
});
//32
let ele1 = [1, 2, 3];

let rr = ele1.forEach(function(num) {
    return num * 2;
});

console.log(rr);
//33
let ele2=[1,2,3]
let rr1=ele2.map(function(num1)
{
    return num1*2;
})
console.log(rr1)
//34
let ele3=["sai","sanjay"]
let rr2=ele3.map(function(name){
    return name.toUpperCase()
}
)
console.log(rr2)
//35
let employees1 = [
    { name: "A", salary: 1000 },
    { name: "B", salary: 2000 }
];

let rt = employees1.map(function(emp) {
    return emp.salary;
});

console.log(rt);
//36
let employees2 = [
    { name: "A", salary: 1000 },
    { name: "B", salary: 2000 }
];

let rtt = employees2.filter(function(emp) {
    return emp.salary>1000
});

console.log(rtt);
//37
let numbers=[2,4,5,7,8]
let rrr=numbers.filter(function (num){
    return num%2==0
})
console.log(rrr)
//38
let ss=["sai","sanjau","ssw"]
let rrr1=ss.filter(function (num){
    return num.length>5;
})
console.log(rrr1)
//39
let num=[10,50,55,60]
let v=num.find(function(num){
    return num>50
})
console.log(v)
//40
let employees3 = [
    { name: "A", salary: 1000 },
    { name: "B", salary: 2000 }
];

let r = employees3.filter(function(emp) {
    return emp.salary<2000
});
console.log(r)
//41
let arr9 = [10, 20, 30];

let summ = arr9.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(summ);
//42
let ar4= [10, 50, 30];

let max = ar4.reduce(function(a, b) {
    return a > b ? a : b;
});

console.log(max);
//43
let ar5 = [1, 2, 3, 4];

let count = ar5.reduce(function(total) {
    return total + 1;
}, 0);

console.log(count);
//44
let ar6 = ["a", "b", "c"];

let rttt = ar6.reduce(function(obj, value) {
    obj[value] = value;
    return obj;
}, {});

console.log(rttt);
//45
let employeess = [
    { name: "A", salary: 1000 },
    { name: "B", salary: 2000 }
];

let total = employeess.reduce(function(sum, emp) {
    return sum + emp.salary;
}, 0);

console.log(total);
//46
let aa = [1, 2, 3];

let tt = aa.toString();

console.log(tt);
//47
let bb=[1,2,3]
let ee=bb.join(" -")
console.log(ee)
//48
let str = "1,2,3";

let cc = str.split(",");

console.log(cc);
//49
let r1 = [1, [2, [3, 4]]];

let t = r1.flat(Infinity).join(",");

console.log(t);
//50
let words = ["hello", "world"];

let sentence = words
    .map(function(word) {
        return word.toUpperCase();
    })
    .join(" ");

console.log(sentence);
//51
let cart = [
    { item: "Pen", price: 10 },
    { item: "Book", price: 50 },
    { item: "Bag", price: 100 }
];

let t1 = cart.reduce(function(sum, product) {
    return sum + product.price;
}, 0);

console.log(t1);
//52
let cart1 = [
    { item: "Pen", price: 10 },
    { item: "Book", price: 50 },
    { item: "Bag", price: 100 }
];

let t2=cart1.filter(function(sum){
    return sum.price>50
})
console.log(t2)
//53
let products = ["pen", "pencil", "book"];

let search = "pen";

let t3 = products.filter(function(item) {
    return item.includes(search);
});

console.log(t3);
//54
let d5 = [1, 2, 2, 3, 3, 4];

let t4 = [...new Set(d5)];

console.log(t4);
//55
let employeesss = [
    { name: "A", salary: 10000 },
    { name: "B", salary: 30000 },
    { name: "C", salary: 60000 }
];

let sss = {
    Low: [],
    Medium: [],
    High: []
};

employeesss.forEach(function(emp) {

    if (emp.salary < 20000) {
        sss.Low.push(emp);
    }
    else if (emp.salary < 50000) {
        sss.Medium.push(emp);
    }
    else {
        sss.High.push(emp);
    }

});

console.log(sss);