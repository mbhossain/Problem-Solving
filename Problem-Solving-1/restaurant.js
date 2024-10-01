// HackerRank
// https://www.hackerrank.com/challenges/restaurant/problem?isFullScreen=true

const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

function restaurant(l, b) {
    // Function to calculate GCD using Euclid's algorithm
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    // Step 1: Find the side length of the largest square (GCD of length and width)
    let sideLength = gcd(l, b);
    // Step 2: Calculate the number of such squares
    let numberOfSquares = (l * b) / (sideLength * sideLength);
    return numberOfSquares;
}

let result = restaurant(12, 8);
console.log(result);