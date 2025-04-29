// console.log('data request')

// setTimeout(() => {
//    console.log('data preparation')
//    const backendData = {
//       server: 'iCloud',
//       port: 8080,
//       status: 'connected',
//    }
//    setTimeout(() => {
//       backendData.modified = true
//       console.log('data received', backendData)
//    }, 2000)
// }, 3000)

const request = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('data preparation')
        const backendData = {
            server: 'iCloud',
            port: 8080,
            status: 'connected',
        }
        resolve(backendData)
    })
})

request
    .then((data) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                data.modified = true
                res(data)
            }, 2000)
        })
    })
    .then((clientData) => {
        console.log('data received', clientData)
        clientData.updated = true
        return clientData
    })
    .then((dataPatch) => {
        console.log('updated data', dataPatch)
    })
    .catch((error) => console.error('Critical error', error))
    .finally(() => console.log('Finally'))

//! async/await

// const fetchData = async () => {
//     try {
//         const backendData = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('data preparation')
//                 resolve({
//                     server: 'iCloud',
//                     port: 8080,
//                     status: 'connected'
//                 })
//             }, 2000)
//         })
//
//         const clientData = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(backendData)
//             }, 2000)
//         })
//
//         console.log('data received', clientData)
//         clientData.updated = true
//         console.log('updated data', clientData)
//     } catch (error) {
//         console.error('critical error', error)
//     } finally {
//         console.log('finally')
//     }
// }
//
// fetchData()

// const timer = (ms) => {
//    return new Promise((resolve) => setTimeout(() => resolve(), ms))
// }

// timer(2000).then(() => console.log('after 2 seconds'))
// timer(4000).then(() => console.log('after 4 seconds'))

// Promise.all([timer(2000), timer(4000)]).then(() => console.log('All'))
// Promise.race([timer(2000), timer(4000)]).then(() => console.log('Race'))

