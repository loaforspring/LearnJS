'use strict'

// import '/learn_function.js';

console.log('Hello World');

var numbers = [1, 7, 2, 9, 10, 5, 4];
console.log(numbers);

// for (var i=0; i < numbers.length; i++) {
//     console.log(i + ':' + numbers[i]);
// }
function print_array(arr) {
    for (var i=0; i < arr.length; i++) {
        console.log(i + ':' + arr[i]);
    }
}


print_array(numbers);

numbers.sort();
console.log('after sort:');
print_array(numbers);

// Map
var myMap = new Map([['k1','v1'], ['k2','v2']]);
myMap.set('k3', 'v3');
myMap.has('k3');
myMap.get('k3');
console.log('map:' + myMap);

// Set-自动过滤重复元素
var mySet = new Set([1, 2, 3]); // 含1, 2, 3
mySet.add(2);
console.log('set:' + mySet);


// object
var obj = {
    name: 'zhangsan',
    age: 18
};

console.log('name:' + obj.name + ', age:' + obj.age);
