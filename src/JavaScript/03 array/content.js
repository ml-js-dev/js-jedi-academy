//? ARRAY

//* WAYS TO CREATE AN ARRAY
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
const arrProto = Array(1, 2, 3)

//* regular array
const sandwich = ['peanut butter', 'jelly', 'bread']

//* multidimensional array
const teams = [
   ['Bulls', 23],
   ['White Sox', 45],
]

//* access elems using index
const array = [50, 60, 70]
console.log(array[0])
const data = array[1]

//* modify array using index
const ourArray = [50, 40, 30]
ourArray[0] = 15

//* access multidimensional arrays by index
const arr = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [[10, 11, 12], 13, 14],
]

const subarray = arr[3]
const nestedSubarray = arr[3][0]
const element = arr[3][0][1]

//? MAIN ARRAY METHODS
//* push() - adds one or more elements to the end of an array (mut)
const arr1 = [1, 2, 3]
arr1.push(4, 5)
const arr2 = ['Stimpson', 'J', 'cat']
arr2.push(['happy', 'joy'])
const food = ['🍏', '🍌', '🥕', '🍩']
food.push('🍆') >> ['🍏', '🍌', '🥕', '🍩', '🍆']

//* pop() - removes the last element from an array and returns it (mut)
const threeArr = [1, 4, 6]
const oneDown = threeArr.pop()
console.log(oneDown)
console.log(threeArr)
const foodPop = ['🍏', '🍌', '🥕', '🍩']
food.pop() >> ['🍏', '🍌', '🥕']

//* shift() - removes the first element from an array and returns it (mut)
const ourArray = ['Stimpson', 'J', ['cat']]
const removedFromOurArray = ourArray.shift()

const foodShift = ['🍏', '🍌', '🥕', '🍩']
foodShift.shift() >> ['🍌', '🥕', '🍩']

//* unshift() -
const ourArray1 = ['Stimpson', 'J', 'cat']
ourArray1.shift()
ourArray1.unshift('Happy')

const foodUnshift = ['🍏', '🍌', '🥕', '🍩']
foodUnshift.unshift('🍆') >> ['🍆', '🍏', '🍌', '🥕', '🍩']

//* CHECK IF VALUE IS ARRAY
Array.isArray(value) //? returns true or false

//* ARRAY DESTURCTURING
let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕']

//* OR THE SAME W/O DESTRUCTURING
let vegetables = ['🍅', '🍄', '🥕']
let tomatoSingle = vegetables[0]
let mushroomSingle = vegetables[1]
let carrotSingle = vegetables[2]

//* CONCAT
const first = [1, 2, 3]
const second = [4, 5, 6]
const third = [7, 8, 9]
const merged = first.concat(second, third)

//* SPREAD & REST
//? For the rest parameter, the ... appears on the left side of the destructuring syntax.
const [car, plane, ...transport] = ['🚘', '✈️', '🚀', '🚀', '🚀']
//? For the spread syntax, the ... appears on the right side of the destructuring syntax.
const people = ['🤓', '🤓', '🤓', '🤓', '🤓']
const newPeople = [...people]

//* JOIN
//? Returns string and accepts separator as argument. If no argument provided uses comma by default
const emotions = ['🙂', '😍', '🙄', '😟']
const joined = emotions.join()
console.log(joined) // "🙂,😍,🙄,😟"

//* FINDING INDEX POSITION OF AN ELEMENT
const names = ['Max', 'Manu', 'Stephanie', 'Randy', 'Max']
indexOf() //? returns the index of the value
names.indexOf('Max') //? 0
lastIndexOf() //? returns the last index of the value
names.lastIndexOf('Max') //? 4

//* REVERSE
//! MODIFIES THE ORIGINAL ARRAY
const letters = ['a', 'b', 'c', 'd', 'e']
letters.reverse() //reverses the order of the array

//* SPLICE
//! MODIFIES THE ORIGINAL ARRAY
splice() //? removes and/or adds items to the array
//accepts 3 arguments:
//1. index position (affected items start after this index)
//2. number of items to remove
//3. items to add

const yummies = ['🍕', '🍔', '🍣', '🍦', '🍩']
yummies.splice(1, 2, '🌮', '🍜')
// Start at index 1 (which is the second item, '🍔').
// Remove 2 items ('🍔' and '🍣').
// '🌮', '🍜': Add these two new items in their place.
// modified array: after the splice operation, the array becomes ['🍕', '🌮', '🍜', '🍦', '🍩'].

//* Original array: [ '🍕', '🍔', '🍣', '🍦', '🍩' ]
//! Modified array: [ '🍕', '🌮', '🍜', '🍦', '🍩' ]

//? MAIN SORTING ARRAY METHODS
//? The filter() method creates a new array with all the elements that satisfies the condition mentioned in the function.
//? The map() method creates a new array with the results of calling a function for every array element.
//? The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
//? The some() method tests whether at least one element in the array passes the test implemented by the provided function.
//? The find() method returns the value of the first element in the array that satisfies the provided testing function.
//? The every() method tests whether all elements in the array pass the test implemented by the provided function.
//? The forEach() method calls a function for each array element.

let students = [
   {
      id: 1001,
      f_name: 'Alex',
      l_name: 'B',
      gender: 'M',
      married: false,
      age: 22,
      paid: 250,
      courses: ['JavaScript', 'React'],
   },
   {
      id: 1002,
      f_name: 'Ibrahim',
      l_name: 'M',
      gender: 'M',
      married: true,
      age: 32,
      paid: 150,
      courses: ['JavaScript', 'PWA'],
   },
   {
      id: 1003,
      f_name: 'Rubi',
      l_name: 'S',
      gender: 'F',
      married: false,
      age: 27,
      paid: 350,
      courses: ['Blogging', 'React', 'UX'],
   },
   {
      id: 1004,
      f_name: 'Zack',
      l_name: 'F',
      gender: 'M',
      married: true,
      age: 36,
      paid: 250,
      courses: ['Git', 'React', 'Branding'],
   },
]

const femaleStudents = students.filter((e) => e.gender === 'F')
const fullNames = students.map((e) => {
   return {
      fullNames: `${e.f_name} ${e.l_name}`,
   }
})
const total = students.reduce((acc, elem) => acc + elem.paid, 0)
const studentBelow30 = students.some((e) => e.age > 30)
const findStudent = students.find((e) => e.age > 30)
const atLeastTwoCourses = students.every((e) => e.courses.length >= 2)

console.log(atLeastTwoCourses)

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
