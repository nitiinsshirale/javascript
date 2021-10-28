//'use strict';
//import fetch from "node-fetch";
//const fetch = require('node-fetch');
console.log('Hello Js')

/**
 * var 
 * let
 * const
 * 
 */


// var index = 11
// let length = 21
// const city = "Down Street"

// //index = "Hello"

// if(index > 10){
//     console.log("Hello");
//     var reindex = 13;
//     let hash= 15;
//     const street = 'Boulevard';
//     hash = 'Yay'
// }else{
//     console.log('Oops');
// }

// console.log(reindex)
// //console.log(hash)
// //console.log(street)

// // array
// let nums = [10,"One","Two",true,15,22]
// //
// //nums = new Array("One",1,"Two");

// // access element via index of the array
// // nums[2];

// console.log(nums.length)
// nums[11] = false
// console.log(nums.length);

// // loops
// for (let index = 0; index < nums.length; index++) {
//     console.log(nums[index]);
// }

// // array.forEach(element => {
    
// // });

// // for in loop gives us the index
// for (const key in nums) {
//     // if (Object.hasOwnProperty.call(object, key)) {
//     //     const element = object[key];
//     // }
//     console.log(nums[key]);
// }

// console.log('For Of Loop...')
// for (const _num of nums) {
//     console.log(_num);
// }

// //nums[-1]= 100
// console.log('For In Loop Ends '+nums.length)
// console.log(nums)

// // add a new element at the end of the array
// nums.push(11);

// console.log(nums);

// // remove last element
// nums.pop();
// console.log(nums);

// // remove first element

// nums.shift();
// console.log(nums);

// // getting the keys of an array
// console.log(Object.keys(nums));


let x = "Hello"
let y = new String("Hello")

if(x === y){
    console.log('Both are equal')
}


// ''
// ""
// \
// \

let str = 'I am \'not\' a good student'
let str1 = 'No you are not a good "student"'

//console.log(str,str1)

// Ecmascript - es5 / es6
// Backtick = ``

//let msg = "Welcome, "+str
let msg = `Welcome "${str}"`

console.log(msg)

function callMe() {
    console.log('Call Me')
    return true
}

let result = callMe()
console.log(result)


function calculate(i,j=0){
    console.log(j)
    return i + j;
}
console.log(calculate(12))

let user = {
    id: 1,
    name : 'Mohsin',
    gender : 'male'
}

function process(user){
    console.log(JSON.stringify(user))
}

process(user)


// function add(i,j) {
//     console.log(`ADD : ${i+j}`)
// }

// function sub(i,j){
//     console.log(`DIFF : ${i-j} `)
// }

function tryMe(callback){
    let i = 12
    let j = 15
    callback(i,j)
}

tryMe(function(i,j){
    console.log(`Operation ${i*j}`)
})

let nums = [9,13,7,6,2,16]

nums = nums.filter(function(n){
    return n % 2 != 0
});


console.log(nums)

function calculator(operand) {
    let i = 0
    let j = 0;
    return function num1(num1) {
        i = num1
        return function num2(num2) {
            j = num2
            return function action() {
                switch (operand) {
                        case 'ADD':
                            console.log(`SUM IS ${i+j}`)
                            break;
                        case 'DIFF':
                            console.log(`DIFF IS ${i-j}`)
                            break;
                        default:
                            break;
                    }
            }
        }
    }
    
    // switch (operand) {
    //     case 'ADD':
    //         function add(i,j) {
    //             console.log(`SUM IS ${i+j}`)
    //         }
    //         return add;
    //     case 'DIFF':
    //         function diff(i,j) {
    //             console.log(`DIFF IS ${i-j}`)
    //         }
    //         return diff;
    //     default:
    //         break;
    // }
}

// let operation = calculator('DIFF')
// operation(12,5)

//calculator('ADD')(12,6)


calculator('DIFF')(12)(62)()


// es5 
// es6

// es5
/**
 * strict mode
 * Json.parse / stringify
 *  */ 


// x = 12;
// console.log(x)

let _usr = {
    id: 1,
    name: 'User'
}

//Object.seal(_usr)

Object.defineProperty(_usr,'salary',{
    value: 100,
    writable:false,
    configurable:true,
    enumerable:true
})
_usr.edu = 'null'
_usr.salary = 1400
console.log(_usr)

// array support

nums.forEach(function (n) {
    console.log(n)
})

nums.map(function (val) {
    return val * 3
}).forEach(function (n) {
    console.log('NUm '+n)
})


let arr = [12,
    1,
    2,
    4,
    4
]


// es6

// default params
// rest params
// arrows functions
// let & const
// 

// default params
function validate(i=9) {
    
}


// rest paras
function verify(...args) {
    for(let a of args){
        console.log(a)
    }
}

verify(1,2)
verify(12,4,5,56,6,6,6,7,777)


// convert string to object
let arr1 = Array.from("abcd")
console.log(arr1)


// literal object
let emp1 = {
    id: 1,
    name: 'techmomo'
}

// let emparr = Array.from(emp1)
// console.log(emparr)


// arrow functions

// const operation1 = ()=>{
//     console.log('Hello ')
// }

const operation1 = ()=> console.log('Welcome')

operation1()

const human = {
    firstName: 'Bob',
    lastName: 'Wilson',
    name: function () {
        return this.firstName +' '+this.lastName
    }
}

console.log(human.name())


// classes
class A{
    constructor(id,name){
        this.id = id
        this.name = name
    }
    getDetails(){
        return this.id + ' '+this.name;
    }
}

// create the object
let aa = new A(12,'Mohsin');
console.log(' '+aa.getDetails())

// class expression
let Circle = class {
    constructor(radius){
        this.radius = radius
    }

    getArea(){
        return this.radius * this.radius * Math.PI
    }
    static compute(){
        console.log('static compute')
    }
}
console.log(Circle.name)

let cir = new Circle(10)
console.log('Area is '+cir.getArea());

// static call via class name
Circle.compute();

// 

async function asTryMe() {
    setTimeout(()=>{
        for(let i=10;i>0;i--){
            console.log('********** '+i)
        }
        console.log('Time out for 2s')
    },2000);
}

asTryMe()

console.log('Hello how r u')

for(let i=0;i<10;i++){
    console.log('Sy Hello '+i)
}


// Promise 
// 3 states : fulfilled , rejected , pending

const mypromise = new Promise((success,error)=>{
    setTimeout(()=>{
        success('Hello')
    },300);
});

//console.log(mypromise);

// mypromise
// .then(data=>{
//     console.log('SUCCESS '+data)
// })
// .catch(err=> console.log(err))


// get / post data to / fro via REST APIs
// fetch api method

// function getData() {
//     fetch('https://api.github.com/users/techmomo')
//         .then(data=>console.log(data))
//         .catch(err=> console.log(err))    
// }

//getData()