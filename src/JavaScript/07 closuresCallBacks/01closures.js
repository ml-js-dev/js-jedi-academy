// if (true) {
//    let firstBlock = 'firstBlock'
//    // переменные secondBlock, thirdBlock не доступны. firstBlock доступна
//    if (true) {
//       let secondBlock = 'secondBlock'
//       // переменные thirdBlock не доступна. firstBlock secondBlock доступны
//       if (true) {
//          const thirdBlock = 'thirdBlock'
//          // secondBlock, firstBlock, thirdBlock доступны
//       }
//    }
// }
//
// // переменные firstBlock, secondBlock, thirdBlock не доступны
//
// for (let i = 0; i < 5; i++) {
//    console.log(i) // 0, 1, 2, 3, 4
// }
// console.log(i) // ReferenceError: i is not defined
//
// while (true) {
//    const hello = 'hello world'
//    break
// }
// console.log(hello) // ReferenceError: hello is not defined


var message = 'a'
console.log(messageInBlock) // undefined

if (true) {
    var messageInBlock = 'b'
}
console.log(message, messageInBlock) // a, b