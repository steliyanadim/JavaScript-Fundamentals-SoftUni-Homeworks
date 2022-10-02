function signCheck(numOne, numTwo, numThree) {
    let negativeCounter = 0;
    let result = 'Negative';

    if (numOne < 0) {
        negativeCounter++;
    }
    if (numTwo < 0) {
        negativeCounter++;
    }
    if (numThree < 0) {
        negativeCounter++;
    }

    if (negativeCounter === 2) {
        result = 'Positive';
    }

        console.log(result);

}
signCheck(-2, 2, 8)
signCheck(-2, -2, 8)
signCheck(-2, -2, -8)
signCheck(0, 0, -8)
