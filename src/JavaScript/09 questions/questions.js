// 1 What are the basic data types in JavaScript?
//string
let string1 = 'test'
let null1 = null;
let bool = true
let num = 1;
let big = 424723647823647236423764n
let und = undefined
let symbol = Symbol(1)

const obj = {}

// 2 How do you check if a string contains a word?
const sentence = "I love JavaScript";
// console.log(sentence.includes("love"))

// 3 How do you access and update object properties?
const person = {name: "John", age: 30};
// console.log(person["name"])
// console.log(person.name)
// person["name"] = 'Artur'

// 4 How do you loop through object properties?
const user = {name: "Alice", age: 25};
// for (let key in user) {
//     if (user.hasOwnProperty(key)) {
//         console.log(user[key])
//     }
// }

// 5 How do you define a function and call it?
function funcName(arg1, param1) {
    // body
}

const name1 = (args) => {
    //body
}

// 6 What is this keyword in JavaScript?
const person1 = {
    name: "Bob",
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};


// 7 How does if statement work?
const age = 18;
// if (age >= 18) {
//     console.log("Adult");
// }

// 8 When do you use switch over if?
// const fruit = "banana";
// switch (fruit) {
//     case "apple":
//         console.log("Apple pie!");
//         break;
//     case "banana":
//         console.log("Banana smoothie!");
//         break;
//     default:
//         console.log("Unknown fruit");
// }

// 9 How do you check the type of a variable?


// 10 How do you clone an object?
const original = {a: 1, b: 2};
const copy = {...original}

// 11 Given an array of numbers, calculate the total. Which array method would you use? reduce
const numbers1 = [1, 2, 3, 4, 5];
const total = numbers1.reduce((acc, curr) => acc + curr, 0)
// console.log(total)

// 12 How do you find the largest number in an array?
const nums = [5, 1, 22, 8, 13];
const max = Math.max(...nums)
// console.log(max)

// 13 How do you filter even numbers from an array? filter
const arr = [1, 2, 3, 4, 5, 6];
const result = arr.filter(num => num % 2 === 0)
// console.log(result)

// 14 How do you double every number in an array? map
const numbers = [1, 2, 3];
const doubles = numbers.map(num => num * num)
// console.log(doubles)

// 15 How do you check if all elements in an array are positive? every
const nums1 = [2, 4, 6];
const allPositive = nums1.every(n => n > 0)
// console.log(allPositive)

// 16 Looping through an array, вывести каждый цвет из массива for loop
const colors = ["red", "green", "blue"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

// 17 Вывести все фрукты из массива

const fruits = ["apple", "banana", "cherry"];
// for (const value of fruits) {
//     console.log(value)
// }

// 18 Вывести числа от 1 до 5 используя while loop
let n = 1;
// while (n <= 5) {
//     console.log(n)
//     n++
// }

// 19 Что будет при "5" - 2 и "5" + 2?
// console.log("5" - 2) //3 string coercion "5" => 5 - 2 = 3
// console.log("5" + 2) //"52"

// 20 Что будет при null + 1 и undefined + 1?
// console.log(null + 1) //1
// console.log(undefined + 1)

// 21 Что будет при "2" * "3"?
console.log("2" * "3") // 6

// 22 Что будет при "" == 0 и "" === 0?
console.log("" == 0) //true
console.log("" === 0) //false
console.log("2" == 2) //true
console.log("2" === 2) //false

// 23* Как можно явно привести типы?
