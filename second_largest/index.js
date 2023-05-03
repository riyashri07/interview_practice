// let arr = [2, 3, 5, 6, 58, 9];
// let max = -Infinity;
// let secondmax = -Infinity;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > max) {
//         secondmax = max;
//         max = arr[i];
//     }
// }
// console.log(secondmax )

// let arr = [1, 2, 3, 4, 5, 66, 6, 7,8,66,66, 66]
// arr.sort((a, b) => a - b)
// for ( let i=arr.length-1;i>=0;i--){
// 	if(arr[i]<arr[arr.length-1]){
// 		console.log(arr[i])
// 		break;
// 	}
// }

// let obj={};
// for(let i=0;i<arr.length;i++){
// 	obj[arr[i]]=1
// }
// // console.log(obj)
// let ans=[]
// for(let key in obj){
// 	ans.push(key)
// }
// console.log(+ans[ans.length-2])


// let arr = [1, 5, 66, 7,8,9,66,66, 66]
// let max= -Infinity
// let sMax=-Infinity

// for(let i=0;i<arr.length;i++){

// 	if(arr[i]>max){
// 		sMax=max  
// 		max=arr[i]
// 	}
// 	if(arr[i]>sMax&&arr[i]<max){
// 		sMax=arr[i]
// 	}
// }
// console.log(sMax,)







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

// console.log(x);
// var x = "5";

// console.log(y);
// let y = "5";


// const z = "5";
// z = "10";
// console.log(z);
// by()
// hello();


// function by() {
//     hello()
//   function hello() {
//     console.log("riya");
//   }
// }

function random(max, min) {
    return Math.floor(Math.random() * (max - min));
}
let x = random(100, 1);
console.log(x);
