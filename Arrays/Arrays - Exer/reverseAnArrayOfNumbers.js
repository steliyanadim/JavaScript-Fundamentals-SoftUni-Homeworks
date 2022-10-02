function reverseAnArrayOfNumbers(num, arr){
let newArr = [];
    for(let i = num - 1; i >= 0; i--){
        newArr.push(arr[i])
    }
    console.log(newArr.join(' '));
}
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])