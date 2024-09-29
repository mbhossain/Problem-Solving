//https://www.hackerrank.com/challenges/handshake/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

let number = 4;

function handshake(n) {
  let totalShaksHands = 0;

  // while (n > 0) {
  //   totalShaksHands += (n - 1);
  //   --n;
  // }

  for (let i = 1; i < n; i++) {
    totalShaksHands += i;
  }

  return totalShaksHands;
}

let result = handshake(number);
console.log(result);