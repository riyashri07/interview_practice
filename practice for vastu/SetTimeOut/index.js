// setTimeout(() => {
//     alert("Hello")

// }, 5000)


// const sub = (a,b) => {
//     console.log(a - b)

// }

// let a = setTimeout(sub, 5000, 7, 4)
// console.log(a);
// clearTimeout(a)

// const sentence = (x) => {
//     alert(x)
// }

// setInterval(sentence , 5000 ,"please hurry up!")



// let arr = [1, 2, 3, 4, 5];

// let x=arr.map((ele, index) => {
//     return ele * 2

// })
// console.log(x)



// let arr = [2, 5, 8, 4, 5, 9, 6, 3];
// let x = arr.filter((e) => {
//     if (e < 7) {
//     return e
// }
// })
// console.log(x);



// function consoleNum() {
//     console.log(num);
//     var num = 10;
// }
// consoleNum();

//----------------------------------------------------------------

// if (true) {
//     let a = b = 12;
//     console.log(a);
//     console.log(b);

// }
// console.log(b);
// console.log(a);

//----------------------------------------------------------------


// let arr = [1, 2, 3, 4];
// delete arr[1];
// console.log(arr.length);
// console.log(arr);

//----------------------------------------------------------------


//use Strict
// "use strict";
// var a=b=20


//----------------------------------------------------------------


// function fun() {
//     console.log(this);
// }
// fun();
// new fun();

//----------------------------------------------------------------


// var a = 20;
// var fun = () => {

//     console.log(a);
//     var a = 30;
// }
// fun();

// var a = 20;
//  function fun(){
//     console.log(a);
//     var a = 30;
// };
// fun();


//----------------------------------------------------------------

// function x() {
//     const a = "riya";

// function y(){
//         console.log(a);
//     }
//     return y
// }
// const z = x();
// z();

//----------------------------------------------------------------

// var sum = (a, b, c) => {
//     return {
//         getsumtwo: function () {
//             return a + b;
//         },
//         getsumthree: function () {
//             return a + b + c;

//         }
//     }
// }

// var output = sum(2, 4, 8);
// console.log(output.getsumthree())

var sum = (a,b) => {
    return a+b
}
 console.log(sum(2, 5));


