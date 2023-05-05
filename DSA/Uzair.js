var arr = [5, 4, 2, 3, 1, 7];
var n = arr.length;

// 1. Normal Comsecutive in array

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

// 2. Three Consecutive number in array also Even

var a = [8, 4, 1, 2, 6];
a.sort();

function three(a) {
  let count=0;
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] % 2 == 0 && a[i + 1] % 2 == 0 && a[i + 2] % 2 == 0) {
      count++;
    }
  }
  return count;
}

let x = three(a);
if (x>=1) {
  console.log(true);
} else {
  console.log(false);
}

// 3. All '0' in the array at the End.

let A = [5, 6, 0, 4, 6, 0, 9, 0, 8];
let n = A.length;

let j = 0;
for (let i = 0; i < n; i++) {
    if (A[i] != 0) {
        let temp = A[j];
        A[j] = A[i];
        A[i] = temp;
        j++;
    }
}
console.log(A);
