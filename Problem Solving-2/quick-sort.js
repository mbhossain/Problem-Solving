const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

// Javascript implementation of QuickSort
// A utility function to swap two elements
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
function partition(arr, low, high) {

  // pivot
  let pivot = arr[high];

  // Index of smaller element and
  // indicates the right position
  // of pivot found so far
  let i = (low - 1);

  for (let j = low; j <= high - 1; j++) {

    // If current element is smaller
    // than the pivot
    if (arr[j] < pivot) {

      // Increment index of
      // smaller element
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return (i + 1);
}

/* The main function that implements QuickSort
    arr[] --> Array to be sorted,
    low --> Starting index,
    high --> Ending index
*/
function quickSort(arr, low, high) {

  if (low < high) {

    // pi is partitioning index, arr[p]
    // is now at right place
    let pi = partition(arr, low, high);

    // Separately sort elements before
    // partition and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

// Function to print an array
function printArray(arr, size) {
  for (let i = 0; i < size; i++)
    document.write(arr[i] + " ");

  document.write("<br>");
}

// Driver Code

let arr = [20, 123, 45, -2, 0, 6, 98];
let n = arr.length;

quickSort(arr, 0, n - 1);
document.write("Sorted array: <br>");
printArray(arr, n);

// This code is contributed by Saurabh Jaiswal




// Won code

function wonPartition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  let temp;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;

}

function onQuickSort(arr, low, high) {
  if (low < high) {
    let pi = wonPartition(arr, low, high);
    onQuickSort(arr, low, pi - 1);
    onQuickSort(arr, pi + 1, high);
  }

}

let testArray = [4, 7, -3, 4, 25, 8, -12, 70, 30, -56, 17];
let low = 0;
let high = testArray.length - 1;

onQuickSort(testArray, low, high);
document.write("Sorted array: <br>");
printArray(testArray, testArray.length);