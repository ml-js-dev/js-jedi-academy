//? STRING METHODS
let str = '   Hello, World!   '
console.log('Original String:', str)
console.log('Length:', str.length)
console.log('Uppercase:', str.toUpperCase())
console.log('Lowercase:', str.toLowerCase())
console.log('Substring (0, 5):', str.substring(0, 5))
console.log("Includes 'World':", str.includes('World'))
console.log('Trimmed String:', str.trim())

//? CONDITIONS
//* if statement

if (condition) {
   // code to execute if condition is true
} else {
   // code to execute if condition is false
}
3
let age = 16
if (age >= 18) {
   console.log('You are an adult')
} else {
   console.log('You are a minor')
}

// const something = condition ? result 1 : result 2

if (condition 1) {
   return 1
} else if (condition 2) {
   return 2
} else {
   return 3
}

//* switch case
switch (a) {
   case 'value 1':
      // Выполняем что-то для/с значением value 1
      break
   case 'value 2':
   case 'value 3':
      // Выполняем что-то для/с значением value 2 и value 3
      break
   case 'value x':
      // Выполняем что-то для/с значением value x
      break
   default:
      // Дефолтная инструкция
      break
}

// default используется для инструкций по-умолчанию, альтернатива else.
// break необходим для остановки выполнения инструкции.

let day = 'Monday'

switch (day) {
   case 'Monday':
      console.log('Sunday')
      break
   case 2:
      console.log('Monday')
      break
   case 3:
      console.log('Tuesday')
      break
   case 4:
      console.log('Wednesday')
      break
   case 5:
      console.log('Thursday')
      break
   case 6:
      console.log('Friday')
      break
   case 7:
      console.log('Saturday')
      break
   default:
      console.log('Invalid day')
}

//? LOOP FOR

let arr = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < arr.length; i++) {
   arr[i] += 2
}

let fruits = ["🍏", "🍌", "🍒"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

Прервать цикл можно с помощью директивы break. Переход к следующей итерации с помощью директивы continue.

for (let i = 0; i < 10; i++) {
   if (i === 7) {
      break
   }
   // Тело цикла.
}

for (let i = 0; i < 10; i++) {
   if (i === 7) {
      continue
   }
   // Тело цикла.
}

let arr = [1, 2, 3, 4, 5, 6, 7]

// Using a for loop to increment each element by 2
for (let i = 0; i < arr.length; i++) {
   arr[i] += 2 // Increment the current element by 2
}

console.log(arr) // Output: [3, 4, 5, 6, 7, 8, 9]
