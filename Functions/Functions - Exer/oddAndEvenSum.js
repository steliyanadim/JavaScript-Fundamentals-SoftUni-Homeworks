function oddAndEvenSum(number) {
    let numberToString = number.toString();
    let evenNumbersSum = 0;
    let oddNumbresSum = 0;

    for (let el of numberToString) {
        let currentNum = Number(el);

        if (currentNum % 2 === 0) {
            evenNumbersSum += currentNum;
        } else {
            oddNumbresSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddNumbresSum}, Even sum = ${evenNumbersSum}`);
}
oddAndEvenSum(1000435)