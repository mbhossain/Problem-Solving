const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

const number = 7000045869;

function findExcelIndex(n) {
  const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let index = '';

  if (n > 26) {
    let newArr = [];

    while (n > 26) {
      let childN = Math.trunc(n / 26);
      let nextN = n % 26;

      if (nextN == 0) {
        childN = childN - 1;
        nextN = 26
      }

      newArr.unshift(nextN);

      if (childN < 27) {
        newArr.unshift(childN);
      }

      n = childN;
    }

    const length = newArr.length;

    for (let i = 0; i < length; i++) {
      index += arr[newArr[i] - 1];
    }

    return index;
  } else {
    return arr[n - 1];
  }

}

let result = findExcelIndex(number);
console.log(result);