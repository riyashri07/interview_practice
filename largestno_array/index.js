let arr = [23 , 45 , 6677 , 43 ,345 ,789];
let largest = -Infinity;
for (let i = 0; i < arr.length; i++){
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);