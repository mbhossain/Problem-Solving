// https://www.hackerrank.com/challenges/leonardo-and-prime/problem?isFullScreen=false

const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

const number = BigInt(500);

function primeCount(n) {

  // let store = [], i, j, primes = [], maxPrime = 1, index = 0;

  // for (i = 2; i <= n; ++i) {

  //   if (!store[i]) {
  //     primes.push(i);
  //     maxPrime *= primes[index];

  //     if (maxPrime > n) {
  //       maxPrime = maxPrime / primes[index];
  //       break;
  //     }

  //     index++

  //     for (j = i << 1; j <= n; j += i) {
  //       store[j] = true;
  //     }

  //   }
  // }

  // return maxPrime;






  // let maxPrime = 1;
  // let numberOfPrime = 0;

  // for (let i = 2; i <= n; i++) {
  //   let flag = 0;

  //   // looping through 2 to user input number
  //   for (let j = 2; j < i; j++) {
  //     if (i % j == 0) {
  //       flag = 1;
  //       break;
  //     }
  //   }

  //   // if number greater than 1 and not divisible by other numbers
  //   if (i > 1 && flag == 0) {

  //     maxPrime *= i;
  //     numberOfPrime++;

  //     if (maxPrime > n) {
  //       numberOfPrime = numberOfPrime - 1;
  //       break;
  //     }
  //     console.log(i);
  //   }


  // }
  // return numberOfPrime;


  let maxPrime = 1;
  let numberOfPrime = 0;

  for (let counter = 0; counter <= n; counter++) {
    let notPrime = false;

    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
      }
    }

    if (counter > 1 && notPrime === false) {

      maxPrime *= counter;
      numberOfPrime++;

      if (maxPrime > n) {
        numberOfPrime = numberOfPrime - 1;
        break;
      }
      console.log(counter);
    }

  }

  return numberOfPrime;

}

let result = primeCount(number);
console.log(result);