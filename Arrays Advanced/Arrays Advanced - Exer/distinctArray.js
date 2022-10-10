function distinctArray(numbers) {
    let uniqueNums = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!uniqueNums.includes(numbers[i])) {
            uniqueNums.push(numbers[i]);
        }
    }
    console.log(uniqueNums.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])