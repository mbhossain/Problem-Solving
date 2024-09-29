// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

const a = [1, 2, 3];
const b = [3, 2, 1];

function compareTriplets(a, b) {
  const length = a.length;
  let alicePoint = 0;
  let bobPoint = 0;
  const finalPointAr = [];
  let index = 0;

  for (let i = 0; i < length; i++) {
    for (let j = index; j < length; j++) {
      if (a[i] > b[j]) {
        alicePoint += 1;
      } else if (a[i] < b[j]) {
        bobPoint += 1;
      }
      index += 1;
      break;
    }
  }

  finalPointAr.push(alicePoint);
  finalPointAr.push(bobPoint);
  return finalPointAr;
}

let result = compareTriplets(a, b);
console.log(result);