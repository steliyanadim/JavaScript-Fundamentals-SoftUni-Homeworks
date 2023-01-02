
function evenSubtraction(num) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 1; i <= num.length; i++) {
        let currentNum = num[i - 1];

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(evenSum - oddSum);
}
evenSubtraction([1, 2, 3, 4, 5, 6])
