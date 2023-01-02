function magicSum(numbers, magicNum) {

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];

        for (let j = i + 1; j < numbers.length; j++) {
            let tempNum = numbers[j];
            let result = tempNum + currentNum;

            if (result === magicNum) {
                console.log(currentNum + " " + tempNum);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)