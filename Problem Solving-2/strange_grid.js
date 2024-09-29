//https://www.hackerrank.com/challenges/p1-paper-cutting/problem?isFullScreen=false

const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

// const row = 689715240;
// const column = 759842301;

// function solve(row, column) {
//   let rowNo = BigInt(row);
//   let colNo = BigInt(column);
//   let totalCut = BigInt(rowNo * colNo);
//   let cutM= BigInt(1);
//   let totalCutNo = BigInt(totalCut - cutM);
//   return totalCutNo;

// }

function restaurant(l, b) {
  // Write your code here
  const n = l * b;
  const nSqrt = Math.sqrt(n);
  const ntrunc = Math.trunc(nSqrt)
  let arr = [];
  let result = 0;

  if (nSqrt == ntrunc) {
    return 1;
  } else {
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        arr.push(i);
      }
    }
    arr.reverse();
    console.log(arr);
    let length = arr.length;

    for (let j = 0; j < length; j++) {
      const nSqrt2 = Math.sqrt(arr[j]);
      const ntrunc2 = Math.trunc(nSqrt2)
      if ((nSqrt2 == ntrunc2) && (arr[j] < n)) {
        result = n / arr[j]
        break
      }
    }

    return result;
  }

}


// let result = solve(row, column);
// console.log(result);

let result = restaurant(344, 734);
console.log(result);