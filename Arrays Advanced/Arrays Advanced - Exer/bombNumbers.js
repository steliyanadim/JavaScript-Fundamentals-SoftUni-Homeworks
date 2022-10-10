function bombNumbers(numbers, param) {
    let numsSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];
        let specialNum = param[0];
        let power = param[1];

        if (currentNum === specialNum) {
            let startIndex = Math.max(0, i - power);
            let endIndex = (power * 2) + 1;
            numbers.splice(startIndex, endIndex);
            i = 0;
        }
    }
    for (el of numbers) {
        numsSum += el;
    }

    console.log(numsSum);
}
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]


)