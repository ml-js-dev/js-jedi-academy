/*
Callback - функция переданная в качестве параметра другой функции
 */

// // setTimeout(() => {
// //     console.log('after 5 seconds')
// // }, 5000)
//
// const log3 = () => console.log("after 3 seconds");
// setTimeout(log3, 3000)

// console.log(1);
// setTimeout(() => console.log(2), 0)
// console.log(3);

// const languages = ['JavaScript', 'Java', 'Python', 'C#']
// languages.forEach((language) => console.log(language))

// const personalForEach = (arr, cb) => {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i]
//         cb(element)
//     }
// }
//
// personalForEach(languages, (name) => console.log(name))

const loadPokemon = (id, cb) => {
   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => cb(data))
}

loadPokemon(25, (pokemon) => console.log(`Pokemon's name: ${pokemon}`))
