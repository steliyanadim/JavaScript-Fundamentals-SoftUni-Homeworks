function sumFirstAndLast(arr) {
let firstElement = arr[0];
let lastElement = arr.pop();

let result = Number(firstElement) + Number(lastElement);

console.log(result);
}
sumFirstAndLast(['20'])