// HackerRank
// https://www.hackerrank.com/challenges/leonardo-and-prime/problem?isFullScreen=true
// test case 17 wrong
// 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19 * 23 * 29 * 31 * 37 * 41 * 43 = 614889782588491409
const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

function primeCount(n) {
    // List of the first few prime numbers (enough for this problem)
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    let product = 1;  // Product of primes
    let count = 0;    // Count of distinct primes

    // Multiply primes until the product exceeds n
    for (let i = 0; i < primes.length; i++) {
        // Check if multiplying by the next prime would exceed n
        if (product * primes[i] > n) {
            break;
        }
        product *= primes[i];
        count++;
    }

    return count;
}

// Test the function
let n = 614889782588491409;
let result = primeCount(n);
console.log(result);  // Expected output: 14