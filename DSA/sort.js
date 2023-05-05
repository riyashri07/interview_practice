// Bubble sort default primary/outer loop run in reverse && less then 1 of length of array.

let arr = [8, 5, 6, 9, 4, 1];

let N = arr.length;
let i = 5;
while (i >= 0) {
  let j = 0;
  while (j <= i) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
    j++;
  }
  i--;
}
console.log(arr);

for (let i = arr.length - 1; i >= 0; i--) {
  for (let j = 0; j <= i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

//Selection Sort

let A = [7, 4, 10, 8, 3, 1];

let n = A.length;
for (let i = 0; i < n - 1; i++) {
  let min = i;
  for (let j = i + 1; j < N; j++) {
    if (A[j] < A[min]) {
      min = j;
    }
  }
  if (min != i) {
    let swap = A[i]; //shantanu=uzair
    A[i] = A[min]; //uzair=suhail
    A[min] = swap; //suhail=shantanu
  }
}
console.log(A);


//Insertion Sort

// let A = [7, 4, 10, 8, 3, 1];
// let n = 6

for (let i = 1; i < n; i++) {
  // 4 10 8 3 1
  let temp = A[i]; // 4
  let j = i - 1; // 0
  while (j >= 0 && A[j] > temp) {// 0>=0 && 7>4
    A[j + 1] = A[j]; // 4=7 7=7
    j--; // -1
  }
  A[j + 1] = temp; // A[-1+1]=4
                    //A[0]=4
}

console.log(A);
