// 1. Recursion :- A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

function findStep(n) {
    if (n == 0) return 1;
    else if (n < 0) return 0;
    else return findStep(n - 3) + findStep(n - 2) + findStep(n - 1);
}

let n = 4;
let x = findStep(n);

console.log(x);

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

// 3. A happy number

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

console.log(isHappyNumber(19));

// 4. Happy Number (Accepted) Suhail ne dia

input=input.split("\n")
 let tc=+input[0];
 let line=1;
 for(let i=0;i<tc;i++){
     let n=Number(input[line++])
     let arr=[];
     while(n!==1 && !arr.includes(n)){
         arr.push(n)
         let sum=0
         while(n>0){
             let digit=n%10;
             sum=sum+digit*digit
             n=Math.floor(n/10)
         }
         n=sum
     }
    //   console.log(n)
     console.log(n===1?"Yes":"No")
 }

// 5. A Transform in education

let str = "A Transformation in education";

let str1 = str.split(" ");
console.log(str1)
let bag = " ";
for (let i = str1.length - 1; i >= 0; i--) {
  bag = bag + str1[i] + " ";
}
console.log(bag);

// 6. Merge two arrays

// let a = [3, 5, 10];
// let b = [7, 9, 11 , 4];
// let n = a.length;
// let m  = b.length
// let arr = [];
// for (let i = 0; i < n; i++) {
//   arr.push(a[i]);
// }

// for (let i = 0; i < m; i++) {
//   arr.push(b[i]);
// }

// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr.join(","))
// -------------------------------------------------------------------

// 7. convert 0 to 1 in binary 2D Array

let matrix = [
  [0, 0, 0, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [1, 0, 1, 0]
]

for (let i = 0; i < matrix.length; i++) {

  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] == 0) {
      matrix[i][j] = 1
    } else {
      matrix[i][j] = 0;
    }
  }
}
console.log(matrix);

// 8. Rahul gauravs questions

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = [];
  for (let i = 1; i < input.length; i++) {
    let x = input[i].trim().split(" ");
    let z = x[0];
    let y = +x[1];
    arr.push(z, y);
  }
 rahul(arr);
}

let arr = ["ankit", 10, "amit", 40, "shivam", 25, "shubham", 33];

function rahul(arr) {
  let max = -Infinity;
  let name;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      if (arr[i] > max) {
        max = arr[i];
        name=arr[i-1]
      }
    }
  }
  console.log(name);
}
rahul(arr);

// 9. roman numbers

let N = 2085;
let obj = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M:1000,
}
let bag = "";
const keys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]); // sort the keys in descending order
console.log(keys);
for (let key of keys) {
    while (N >= obj[key]) {//2085>=1000
        bag += key; //MMLXXXV
        N -= obj[key]; //2085-1000
    }
}
console.log(bag);


// 10. Factorial of given number


let N = 5;

let x = 0;
for (let i = N; i >= 0; i--) {
    x = x + N * (N - 1);
}
console.log(x);

// 11. merging two array and sorting them with two pointer

const arr1 = [1, 3, 4, 6];
const arr2 = [2, 5, 7, 8];

const mergeSortedArrays = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    const arr = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }

        while (i < arr1.length) {
        arr.push(arr1[i]);
        i++;
      }

      while (j < arr2.length) {
        arr.push(arr2[j]);
        j++;
      }

    return arr;
};

console.log(mergeSortedArrays(arr1, arr2));



// 12. subarray contigous 1 integer suhail ne diya h



// ***********************subarraywala******** tc=o(n^2)

function maxProductSubarray(arr) {
  if (!arr || !arr.length) {
    return 0;
  }

  let maxProduct = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let product = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      product *= arr[j];

      maxProduct = Math.max(maxProduct, product);
    }
  }

  console.log(maxProduct);
}


// 13. suhail ne diya h merged two sorted array


// const arr1 = [1, 3, 4, 6];
// const arr2 = [2, 5, 7, 8];
// function SortArray () {
//     let n = arr1.length
//     let m = arr2.length
//     let l = arr1.length + arr2.length;
//     let i = 0;
//     let j = 0;
//     let k = 0;
//     let arr3 = new Array(l)
//     while (i < n && i < m) {
//         if (arr1[i] < arr2[j]) {
//             arr3[k] = arr1[i]
//             i++;
//             k++;
//         }
//         else if (arr2[j] < arr1[i]) {
//             arr3[k] = arr2[j]
//             j++
//             k++
//         } else if (arr1[i] === arr2[j]) {
//             arr3[k] = arr1[i]
//             i++
//             k++
//             arr3[k] = arr2[j]
//             j++;
//             k++
//         }
//     }
//     while (i < n) {
//         arr3[k] = arr1[i]
//         i++;
//         k++;
//     }
//     while (j < m) {
//         arr3[k] = arr2[j]
//         j++;
//         k++;
//     }

//     console.log(arr3.join(" "))

// }
// SortArray();


// 14. Palindrome linked list


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    let current = head;
    let obj = {};
    while (current !== null) {
        if (obj[current.data] === undefined) {
            obj[current.data] = 1;
        } else {
            obj[current.data]++;
        }
        current = current.next;
    }
    let count = 0;

    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
            count++;
        }
    }
    if (count <= 1) {
        return true;
    } else {
        return false;
    }
};