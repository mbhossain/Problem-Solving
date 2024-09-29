//https://www.hackerrank.com/challenges/game-with-cells/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

function gameWithCells(n, m) {
  const countPackageLineRow = Math.ceil(n / 2);
  const countPackageLineColumn = Math.ceil(m / 2);

  return countPackageLineRow * countPackageLineColumn;
}

let result = gameWithCells(1, 3);
console.log(result);