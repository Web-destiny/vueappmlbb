const { randInt, randArr } = require('./random')

const fs = require('fs')
const path = require('path')

console.log( randInt(), randArr())

function f01(){
    const pathName = 'random'
    console.log(fs.existsSync(pathName))
}
f01();

function f02(){
    const pathName = 'random/rand_arr.js'
    const fileInfo = fs.statSync(pathName)
    console.log(fileInfo.size)
}
f02();

function f03(){
    const pathName = 'random/rand_arr.js'
    console.log(path.basename(pathName))
    console.log(path.dirname(pathName))
    console.log(path.extname(pathName))
    console.log(path.parse(pathName))
}

f03();

function f04(){
    const pathName = 'random'
    console.log(fs.readdirSync(pathName))
}

f04();

function f05(){
    const pathName = 'random'
    const dirArr = fs.readdirSync(pathName)
    let out = ''
    dirArr.forEach(item => out += item + '\n')
    console.log(out)
}

f05();

function f06(){
    const pathName = 'random/rand_int.js'
    // const dirArr = fs.readdirSync(pathName)
    let absolutePath = path.join(__dirname, pathName)
    console.log(absolutePath)
}

f06();
