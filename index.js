console.log('Hello Js')

/**
 * var 
 * let
 * const
 * 
 */


var index = 11
let length = 21
const city = "Down Street"

//index = "Hello"

if(index > 10){
    console.log("Hello");
    var reindex = 13;
    let hash= 15;
    const street = 'Boulevard';
    hash = 'Yay'
}else{
    console.log('Oops');
}

console.log(reindex)
//console.log(hash)
//console.log(street)

// array
let nums = [10,"One","Two",true,15,22]
//
//nums = new Array("One",1,"Two");

// access element via index of the array
// nums[2];

console.log(nums.length)
nums[11] = false
console.log(nums.length);

// loops
for (let index = 0; index < nums.length; index++) {
    console.log(nums[index]);
}

// array.forEach(element => {
    
// });

// for in loop gives us the index
for (const key in nums) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
    // }
    console.log(nums[key]);
}

console.log('For Of Loop...')
for (const _num of nums) {
    console.log(_num);
}

//nums[-1]= 100
console.log('For In Loop Ends '+nums.length)
console.log(nums)

// add a new element at the end of the array
nums.push(11);

console.log(nums);

// remove last element
nums.pop();
console.log(nums);

// remove first element

nums.shift();
console.log(nums);

// getting the keys of an array
console.log(Object.keys(nums));
