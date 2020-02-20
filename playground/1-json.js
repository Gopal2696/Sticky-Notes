const fs = require('fs') // node module system module
// const book = {
//     title: 'Ego is the Enemy',
//     author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)

// fs.writeFileSync('1-json.json', bookJSON)
// const parsedata = JSON.parse(bookJSON)
// console.log(parsedata)
const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer.toString())
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)
data.name = 'gopal'
data.age= 23
stringJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', stringJSON)
