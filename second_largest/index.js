let arr = [2, 3, 5, 6, 57, 58, 9];
let max = -Infinity;
let secondmax = -Infinity;

for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
        secondmax = max;
        max = arr[i];
    }
}
console.log(secondmax )









// function findSecondLargestNumber(arr) {
//   let max = -Infinity;
//   let secondMax = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];

//     if (num > max) {
//       secondMax = max;
//       max = num;
//     } else if (num > secondMax && num !== max) {
//       secondMax = num;
//     }
//   }

//   return secondMax;
// }

// // Example usage
// const arr = [1, 5, 2, 8, 3, 10];
// const secondLargest = findSecondLargestNumber(arr);
// console.log(secondLargest); // Output: 8
