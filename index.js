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
