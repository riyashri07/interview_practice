let s = "shantanu";
// let char = "a";
//  let c = 0;
// for (let i = 0; i < s.length; i++){
   
//     if (s[i] == char) {
//         c++;
//     }
// }
// console.log(c)



let obj = {};
for (let i = 0; i < s.length; i++){
    if (obj[s[i]] === undefined) {
        obj[s[i]] = 0;
    } else {
        obj[s[i]] = 1;
    }
   
}
console.log(obj);
let count = 0;
for (key in obj) {
    if (obj[key] == 1) {
        count++;
     }
}
console.log(count);