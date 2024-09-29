const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

let num = 3888311265122983;

function summingSeries(n) {
  // Write your code here
  return (BigInt(n) * BigInt(n)) % BigInt(1000000007);

}

let res = summingSeries(num);
console.log(res);