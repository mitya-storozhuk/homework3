// task1
const arr = [2, 3, 4, 5];
let res1 = 1;
let res2 = 1;
let j = 0;

for (let i = 0; i < arr.length; i++){
    res1 *= arr[i];
};
console.log(res1);

while (j < arr.length) {
    res2 *= arr[j];
    j++;
};
console.log(res2);

// task2
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    };
};

// task3
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++){
        arr.push(getRandomInt(1, 500));
    }; 
    return console.log(arr);
};
randArray(10);

// task4
function isInteger(num) {
    return (num ^ 0) === num;
};

function raiseToDegree (a,b) {
    let result = a ** b;
    return console.log(result);
};

const a = +prompt("Введіть число, яке потрібно підняти в ступінь", "1");
const b = +prompt("Введіть ступінь, у яку підняти число", "1");

if ((isInteger(a) === false) || (isInteger(b) === false)) {
    alert("Введіть цілі числа");
} else raiseToDegree (a,b);

// task5
function findMin() {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] <= min) {
            min = arguments[i];   
        };
    };
    console.log(min);
};

findMin(12, 14, 4, -4, 0.2);

// task6
function findUnique(array) { 
    let obj = {};
    for (let i = 0; i < array.length; i++) { 
        if (obj[array[i]]) return false;
        obj[array[i]] = true;
    };
    return true;
};
console.log(findUnique([1, 2, 3, 3, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));

// task7 
function lastElem (arr, num) {
    if (num === undefined) return arr[arr.length - 1];
    if (num < arr.length) return arr.slice(-num);
    else return arr;
};

console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

// task8
function toUpperCase(str){
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    };
    let result = arr.join(" ");
    console.log(result);
};
toUpperCase("i love java script");
