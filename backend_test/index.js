const { randInt, randArr } = require('./random')

const fs = require('fs')
const path = require('path')

// console.log( randInt(), randArr())

function f01(){
    const pathName = 'random'
    console.log(fs.existsSync(pathName))
}
// f01();

function f02(){
    const pathName = 'random/rand_arr.js'
    const fileInfo = fs.statSync(pathName)
    console.log(fileInfo.size)
}
// f02();

function f03(){
    const pathName = 'random/rand_arr.js'
    console.log(path.basename(pathName))
    console.log(path.dirname(pathName))
    console.log(path.extname(pathName))
    console.log(path.parse(pathName))
}

// f03();

function f04(){
    const pathName = 'random'
    console.log(fs.readdirSync(pathName))
}

// f04();

function f05(){
    const pathName = 'random'
    const dirArr = fs.readdirSync(pathName)
    let out = ''
    dirArr.forEach(item => out += item + '\n')
    console.log(out)
}

// f05();

function f06(){
    const pathName = 'random/rand_int.js'
    // const dirArr = fs.readdirSync(pathName)
    let absolutePath = path.join(__dirname, pathName)
    console.log(absolutePath)
}

// f06();


// read file
const pathToFile = 'random/rand_arr.js'
const data = fs.readFileSync(pathToFile, {encoding: 'utf8', flag: 'r'});
// console.log(data)
// console.log(typeof data)

//split file line by line
let dataArr = data.split('\r\n')
dataArr = dataArr.filter((line)=> line.trim() !== '');
// console.log(dataArr)

//write to file
const text = 'Lorem ipsum dolor и надо же  sit amet, consectetur adipisicing  придумать было elit.\r\n Consequuntur corporis такой совершенно eum excepturi \r\nfuga ut. Aspernatur, explicaboreiciendis. глупый и несуразный Accusamus consequuntur \r\ndoloribus dolorum incidunt itaque libero\r\n officia пример текста officiis placeat божи quibusdam, saepe, ullam!'
const pathFile = 'random/example_text.txt'
// fs.writeFileSync( pathFile, text, {encoding: "utf8", flag: 'a'} );


//write file from array
 const text2 = [
     '-ghbdtn xt rfr ltkf? - молвил Бернер',
     '-Бернер ты что глупий? - ответил я ему резко',
     '-d cvsckt ukegbq f xnj yt nfr nj? - отвечал он мне',
     '-может хватит базарить со мной на английской раскладке? - сказал я'
 ];

fs.writeFileSync('random/example_array_text.txt', text2.join('\r\n'), {encoding: 'utf8', flag: 'w'} );
