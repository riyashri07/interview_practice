var arr = [5, 4, 2, 3, 1, 7];
var n = arr.length;

// 1. Normal Comsecutive in array----------------------------------------------------------

function normal(arr, n) {
    arr.sort();
    for (var i = 1; i < n; i++)
        if (arr[i] != arr[i - 1] + 1) {
            return false;
        }
    return true;
}

let y = normal(arr);
console.log(y);

// 2. Three Consecutive number in array also Even -------------------------------------------------

var a = [8, 4, 1, 2, 6];
a.sort();//1 2 4 6 8

function three(a) {
    let count = 0;
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] % 2 == 0 && a[i + 1] % 2 == 0 && a[i + 2] % 2 == 0) {
            count++;
        }
    }
    return count;
}

let x = three(a);
if (x >= 1) {
    console.log(true);
} else {
    console.log(false);
}

// 3. All '0' in the array at the End. ----------------------------------------------------------

let A = [5, 6, 0, 4, 6, 0, 9, 0, 8];

let j = 0;
for (let i = 0; i < n; i++) {
    if (A[i] != 0) {
        let temp = A[j];
        A[j] = A[i];
        A[i] = temp;
        j++;
    }
}
console.log(A.join(" "));

// 4. Spiral Traversal in 2D Array ----------------------------------------------------------

let arr = [
    ["A", "B", "C", "D"], //0
    ["E", "F", "G", "H"], //1
    ["I", "J", "K", "L"], //2
    ["M", "N", "O", "P"], //3
];

let result = [];

let top = 0;
let bottom = arr.length - 1;
let left = 0;
let right = arr[0].length - 1;

while (left <= right && top <= bottom) {

    for (let i = left; i <= right; i++) {
        result.push(arr[top][i]); // A B C D (F G)

    }
    top++; //0 + 1 = 1
    for (let i = top; i <= bottom; i++) {
        result.push(arr[i][right]); // H L P (K)

    }
    right--;

    for (let i = right; i >= left; i--) {
        result.push(arr[bottom][i]); // O N M (J)

    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
        result.push(arr[i][left]); // I E

    }
    left++;
}

console.log(result);
