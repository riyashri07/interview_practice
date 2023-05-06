// 1. Recursion :- A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

// function findStep(n) {
//     if (n == 0) return 1;
//     else if (n < 0) return 0;
//     else return findStep(n - 3) + findStep(n - 2) + findStep(n - 1);
// }

// let n = 4;
// let x = findStep(n);

// console.log(x);

// 2. A matrix Transpose in D array

let arr = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    // [4, 4, 4, 4],
];

let n = arr.length - 1;
let m = arr[0].length;

for (let i = 0; i < n; i++) {
    let bag = "";
    for (let j = 0; j <= m; j++) {
        bag = bag + arr[j][i] + " ";
    }
    console.log(bag);
}


// A happy number

function isHappyNumber(n) {
  let obj = {};

  while (n !== 1) {
    let sum = 0;
    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    if (obj[sum]) {
      return false;
    }
    obj[sum] = true;
    n = sum;
  }

  return true;
}

console.log(isHappyNumber(2)); // false
console.log(isHappyNumber(19)); // true
console.log(isHappyNumber(2)); // false

