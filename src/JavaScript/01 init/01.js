//? IDE Setup

//? console

//? ПЕРЕМЕННЫЕ

let variable //перезаписываемая переменная
const variable1 = true
let age = 11
const test1 = true //константа

//? namingConventions
//camelCase emailIsVerified
//kebab-case email-is-verified
//snake_case email_is_verified
//PascalCase EmailIsVerified

//? ТИПЫ ДАННЫХ
//* Примитивные(По значению)
const number = 42.6 //number often
const bool = true || false //often
const string = '1' //often
const singleQuotes = "Hello's" //often
let nullValue = null //often
let undefinedValue = undefined //rare

const bigInt = 7832567823456783456e6 //Big Int rare
const symbol = Symbol('symbol') // almost never

//* Ссылочные (Объекты)
const object = {
   name: 'John',
   age: 15,
   hobbies: {
      sport: true,
      reading: false,
   },
}


//? КОММЕНТАРИИ
// строчный комментарий
/*
БЛОЧНЫЙ КОММЕНТАРИЙ
dsadfsadfsadf
sadfasddfhfgdff
const arr = []
*/

//? ОПЕРАТОРЫ
//* Унарные
// let increment = 5++ // => 6 increment
// let decrement = 5-- // => 4 decrement

//* Бинарные
const addition = 2 + 2
const subtraction = 5 - 2
const multiplication = 5 * 2
const division = 10 / 2
// += , -=, *=, /=, %=, **=
const exponentiation = 2 ** 3
const modulus = 14 % 3

//!Логические операторы приводящие к булеву true / false
const equality = 5 === 5 //* Строгое сравнение - по значению и по типу данных
const nonStringEquality = 5 == '5' //* Нестрогое сравнение - по значению, но не по типу данных COERCION "5" => value => value без кавычек это число? => yes => 5

const inequality = 5 !== 5 СТРОГО НЕРАВНО false
const nonStringInequality = 5 != '5' НЕСТРОГО НЕРАВНО

const greaterThan = 5 > 3 
const lessThan = 5 < 3
const greaterThanOrEqual = 5 >= 5
const lessThanOrEqual = 5 <= 3
const logicalAnd = true && true 

const objPolina = {
   name: "Polina",
   age: 25
}

(nameIs: Polina && ageIs: 25) => true => doSomething

const logicalOr = false || false
(nameIs: Polina || ageIs: 22) => true => doSomething
(nameIs: Polina1 || ageIs: 25) => true => doSomething


const logicalNot = !true

const falsyArr = [false, 0, "", undefined, null, NaN ] => false

//* Тернарный
const ops = 10 === 11 ? "Hello" : "NotHello"

//? ОПЕРАТОР typeof

const typeOfNumber = typeof 5
const typeOfString = typeof 'hello'
const typeOfBoolean = typeof true
const typeOfNull = typeof null
const typeOfUndefined = typeof undefined
const typeOfSymbol = typeof Symbol('symbol')
const typeOfObject = typeof {}