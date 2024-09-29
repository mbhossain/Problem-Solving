const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

// Function to generate a series of prime numbers up to a specified limit
// function generatePrimeSeries(limit) {
//     const primeSeries = [];

//     // Function to check if a number is prime
//     function isPrime(num) {
//         if (num <= 1) return false;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     for (let i = 2; i <= limit; i++) {
//         if (isPrime(i)) {
//             primeSeries.push(i);
//         }
//     }

//     let mul = 1;
//     let length = primeSeries.length;
//     if (length === 0) return 0;
//     if (length === 1) return 1;
//     for (let k = 0; k <= length; k++) {
//         mul = mul * primeSeries[k];
//         if (mul >= limit) {
//             return k;
//         }
//     }
// }

// Example: Generating prime numbers up to 50
// const result = generatePrimeSeries(1000000);
// console.log(result);


function generatePrimeSeries(limit) {
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.reduce((primes, isPrime, num) => {
        if (isPrime) {
            primes.push(num);
        }
        return primes;
    }, []);

    let mul = 1;
    let length = primeSeries.length;
    if (length === 0) return 0;
    if (length === 1) return 1;
    for (let k = 0; k <= length; k++) {
        mul = mul * primeSeries[k];
        if (mul >= limit) {
            return k;
        }
    }
}

// Example: Generating prime numbers up to 50
const result = generatePrimeSeries(50);
console.log(result);