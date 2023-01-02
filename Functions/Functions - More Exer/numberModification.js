function numberModification(number) {
    let numberToString = String(number);
    let divider = numberToString.length;
    let sumOfNumbers = 0;

    for (let num of numberToString) {
        let currentNum = Number(num);
        sumOfNumbers += currentNum;
    }

    let avarigeSum = sumOfNumbers / divider;

    while (avarigeSum <= 5) {
        sumOfNumbers += 9;
        numberToString += 9;
        divider++;
        avarigeSum = sumOfNumbers / divider;
    }
    console.log(numberToString);
}
numberModification(101)