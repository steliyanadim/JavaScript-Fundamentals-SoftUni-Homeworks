function processOddNumbers(numbers) {
    let result = numbers
    .filter((element, i) => i % 2 !== 0)
    .map(element => element * 2)
    .reverse()
    .join(' ')
    console.log(result);
}
processOddNumbers([10, 15, 20, 25])