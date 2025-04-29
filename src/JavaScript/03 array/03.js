//? ARRAY

//* WAYS TO CREATE AN ARRAY
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
const arrProto = Array(1, 2, 3)
const sandwich = ['peanut butter', 'jelly']

//* multidimensional array
const teams = [
   ['Bulls', 23],
   ['White Sox', 45],
]

//* access elems using index
const array = [50, 60, 70]
console.log(array[0])
const sixty = array[1]

//* access multidimensional arrays by index
const arr = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [[10, 11, 12], 13, 14],
]

// const subArray = arr[3] => [[10, 11, 12], 13, 14]
// const nestedSubArray = arr[3][0] => [10, 11, 12]
// const element = arr[3][0][2] => 12

//? MAIN ARRAY METHODS
//* push() - adds one or more elements to the end of an array (mut)
const arr1 = [1, 2, 3]
arr1.push(4, 5)
console.log(arr1)

const arr2 = ['Stimpson', 'J', 'cat']
arr2.push(['happy', 'joy'])

const food = ['🍏', '🍌', '🥕', '🍩']
food.push('🍆') >> ['🍏', '🍌', '🥕', '🍩', '🍆']

//* pop() - removes the last element from an array and returns it (mut)
const foodPop = ['🍏', '🍌', '🥕', '🍩']
foodPop.pop() >> ['🍏', '🍌', '🥕']

//* unshift() - добавляет элемент / элементы в начало массива
const ourArray1 = ['Stimpson', 'J', 'cat']
// ourArray1.unshift('Happy') => ['Happy', 'Stimpson', 'J', 'cat']

const foodUnshift = ['🍏', '🍌', '🥕', '🍩']
foodUnshift.unshift('🍆') >> ['🍆', '🍏', '🍌', '🥕', '🍩']

//* shift() - removes the first element from an array and returns it (mut)
const ourArray = ['Stimpson', 'J', ['cat']]
const removedFromOurArray = ourArray.shift()

const foodShift = ['🍏', '🍌', '🥕', '🍩'] >> ['🍌', '🥕', '🍩']

console.log(Array.isArray(ourArray))

let vegetables = ['🍅', '🍄', '🥕']
let tomatoSingle = vegetables[0]
let mushroomSingle = vegetables[1]
let carrotSingle = vegetables[2]

let [tomato, mushroom, carrot] = vegetables

//* CONCAT
const first = [1, 2, 3]
const second = [4, 5, 6]
const third = [7, 8, 9]

const merged = first.concat(second, third)

//* JOIN
//? Returns string and accepts separator as argument. If no argument provided uses comma by default [1, 2, 3] join "!" => "1!2!3"
const emotions = ['🙂', '😍', '🙄', '😟']
const joined = emotions.join("-")

//* FINDING INDEX POSITION OF AN ELEMENT
const names = ['Max', 'Manu', 'Stephanie', 'Randy', 'Max']
names.indexOf('Max') => 0 //? returns the index of the value
names.lastIndexOf('Max') => 4

//* REVERSE
const letters = ['a', 'b', 'c', 'd', 'e']
letters.reverse() >> ['e', 'd', 'c', 'b', 'a']

//* SPLICE
//! MODIFIES THE ORIGINAL ARRAY
.splice()
//accepts 3 arguments:
//1. index position (affected items start after this index)
//2. number of items to remove
//3. items to add

const yummies = ['🍕', '🍔', '🍣', '🍦', '🍩']
yummies.splice(1, 2, '🌮', '🍜') => ['🍕', '🌮', '🍜', '🍦', '🍩']

// Start at index 1 (which is the second item, '🍔').
// Remove 2 items ('🍔' and '🍣').
// '🌮', '🍜': Add these two new items in their place.
// modified array: after the splice operation, the array becomes ['🍕', '🌮', '🍜', '🍦', '🍩'].

//? MUTATING METHODS
Array.prototype.pop()
Array.prototype.push()
Array.prototype.shift()
Array.prototype.unshift()
Array.prototype.reverse()
Array.prototype.sort()
Array.prototype.splice()

//? RETURN NEW ARRAY
Array.prototype.slice()
Array.prototype.concat()
Array.prototype.map()
Array.prototype.filter()

