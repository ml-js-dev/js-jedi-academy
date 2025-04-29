length: Get the length of a string.
toUpperCase(): Convert a string to uppercase.
toLowerCase(): Convert a string to lowercase.
substring(start, end): Extract a part of a string.
includes(searchString): Check if a string contains a substring.
trim(): Remove whitespace from both ends of a string.

TEMPLATE LITERALS

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

let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

flatWhite & latte

if (condition 1) {
   result 1
} else if (condition 2) {
   result 2
} else {
   result 3
}

const something = condition ? result 1 : result 2;



//* switch case

The break statement is crucial to prevent fall-through (executing subsequent cases).
The default case is optional and acts as a fallback if no cases match.

let day = 3; // Let's say 1 = Sunday, 2 = Monday, etc.

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}


let order = "latte"; // Change this to test different cases

switch (order) {
    case "espresso":
        console.log("You ordered an Espresso.");
        break;
    case "latte":
        console.log("You ordered a Latte.");
        break;
    case "cappuccino":
        console.log("You ordered a Cappuccino.");
        break;
    case "tea":
        console.log("You ordered Tea.");
        break;
    default:
        console.log("Sorry, we don't serve that.");
}

When to Use switch Statements
Multiple Conditions on a Single Variable:

Use a switch statement when you need to evaluate a single expression against multiple possible values. This is particularly useful when you have a variable that can take on a limited set of discrete values (like integers, strings, or enums).
Example: Checking the day of the week, menu options, or status codes.
Readability:

switch statements can be more readable than a long series of if-else statements, especially when there are many conditions to check. The structure of a switch statement makes it clear that you are evaluating the same variable against different cases.
Performance:

In some cases, switch statements can be more efficient than if-else chains, especially when there are many conditions. This is because some JavaScript engines optimize switch statements internally.
Fall-Through Behavior:

If you want to execute the same block of code for multiple cases, switch statements allow for fall-through behavior (if you omit the break statement). This can be useful in certain scenarios.

When to Use if-else Statements
Complex Conditions:

Use if-else statements when you need to evaluate complex conditions that involve logical operators (AND, OR, NOT) or when the conditions are not based on a single variable.
Example: Checking if a user is logged in and has the right permissions.
Range Checks:

If you need to check ranges or conditions that are not strictly equal (e.g., if (age >= 18)), if-else statements are more appropriate.
Boolean Expressions:

When your conditions are based on boolean expressions or require multiple variables to be evaluated together, if-else is the better choice.
Dynamic Conditions:

If the conditions are dynamic or involve calculations, if-else statements provide more flexibility.

Summary
Use switch statements when:

You are checking a single variable against multiple discrete values.
You want cleaner and more readable code for multiple conditions.
You want to leverage fall-through behavior for certain cases.
Use if-else statements when:

You have complex conditions or need to evaluate multiple variables.
You need to check ranges or perform calculations.
The conditions are dynamic or involve boolean logic.


//? LOOPS

for (let i = 0; i < array.length; i++) {
   // code to execute for each element
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