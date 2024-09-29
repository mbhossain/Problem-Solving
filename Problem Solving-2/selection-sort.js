const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

let arr = [4, 7, -3, 4, 25, 8, -12, 70, 30, -56, 17];

function selectionSort(arr) {
  let length = arr.length;
  let temp;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      debugger
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;

}

// let res = selectionSort(arr);
// console.log(res);


//https://www.hackerrank.com/challenges/connecting-towns/problem?isFullScreen=false
function connectingTowns(n, routes) {
  // Write your code here
  let p = 1;
  for (let r of routes) {
    debugger
    p = (r * p) % 1234567;
  }
  return p % 1234567;
}

let res = connectingTowns(3, [1, 3]);
console.log(res);