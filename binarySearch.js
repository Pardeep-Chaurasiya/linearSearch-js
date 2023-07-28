// WAP to perform binary Search in JS

let arr = [2, 4, 7, 9, 12, 34, 67, 89, 90];
let searchTerm = 9;

let start = 0;
let end = arr.length - 1;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === searchTerm) {
    console.log("Search term found at index", mid);
    break;
  } else if (arr[mid] < searchTerm) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
