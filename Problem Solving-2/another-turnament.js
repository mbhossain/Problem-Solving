// https://codeforces.com/problemset/problem/1783/C

const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

const oponent = 3;
const time = 1;
const timeArr = [1, 3, 2];

function findPosition(o, t, arr) {
  let totalwin = 0;
  let timeCompare = 0;

  for (let i = 1; i < o; i++) {
    totalwin += i;
  }

  let sortArr = arr.sort(function (a, b) {
    return a - b;
  });

  let length = sortArr.length;
  let index = 0;

  for (let j = 0; j < length; j++) {
    timeCompare += sortArr[j];
    index = j
    if (timeCompare >= t) {
      break
    }

  }

  const otherWin = totalwin - index;

  if (index == 0) {
    return `Position: ${o}`;
  } else if (index > otherWin) {
    return `Position: 1`;
  } else if (index < otherWin) {
    return `Position: 2`;
  } else if (index = otherWin) {
    return `Position: 1`;
  }

}

let result = findPosition(oponent, time, timeArr);
console.log(result);