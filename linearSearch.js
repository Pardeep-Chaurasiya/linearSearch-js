// WAP to perform linear Search in JS

let arr = [12, 443, 65, 5, 32, 1, 4, 5, 6, 3];
let searchTerm = 65;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === searchTerm) {
    console.log("Search term found at index", i);
    break;
  } else {
    console.log("Search term not found at index", i);
  }
}
