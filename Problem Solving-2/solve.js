// JavaScript program to generate binary numbers from 1 to n
// This function uses queue data structure to print binary numbers
const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

function generatePrintBinary(n) {

  // Create an empty queue of strings
  let smallestNumber;
  var q = [];

  // Enqueue the first binary number
  q.push("9");

  // This loops is like BFS of a tree with 1 as root
  // 0 as left child and 1 as right child and so on
  while (true) {

    // print the front of queue
    var s1 = q[0];
    q.shift();

    console.log(s1);

    if (s1 % n == 0) {
      smallestNumber = s1;
      break
    }

    var s2 = s1; // Store s1 before changing it

    // Append "0" to s1 and enqueue it
    q.push(s1 + "0");

    // Append "1" to s2 and enqueue it. Note that s2
    // contains the previous front
    q.push(s2 + "9");

  }

  return smallestNumber;
}


// var n = 5831;
// let result = generatePrintBinary(n);
// console.log(result);




// JavaScript program to find smallest multiple of
// a given number made of digits 0 and 9 only
let vec = [];

// Preprocessing function to generate
// all possible numbers formed by 0 and 9


function generateNumbersUtil(n) {
  let MAX_COUNT = 100000

  // Create an empty queue of strings
  let q = []

  // enqueue the first number
  q.push("9")

  // This loops is like BFS of a tree
  // with 9 as root, 0 as left child
  // and 9 as right child and so on
  for (var count = MAX_COUNT; count > -1; count--) {
    s1 = q[0]
    q.shift()

    // storing the front of queue
    // in the vector
    vec.push(s1)

    s2 = s1

    // Append "0" to s1 and enqueue it
    s1 += "0"
    q.push(s1)

    // Append "9" to s2 and enqueue it. Note
    // that s2 contains the previous front
    s2 += "9"
    q.push(s2)
  }

}

// function to find smallest number made
// up of only digits 9’s and 0’s, which
// is a multiple of n.

function findSmallestMultiple(n) {

  // traverse the vector to find
  // the smallest multiple of n
  for (var i = 0; i < vec.length; i++)

    // int is used for string to
    // conversion
    if (parseInt(vec[i]) % n == 0)
      return vec[i]
}

// Driver Code

// Maximum number of numbers
// made of 0 and 9


// stack to store all numbers that
// can be formed using digits 0 and
// 9 and are less than 10^5

generateNumbersUtil()
let n = 7
console.log(findSmallestMultiple(n));