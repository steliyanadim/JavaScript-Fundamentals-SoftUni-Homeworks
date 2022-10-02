function equalSums(numbers) {
    let equal = false;
    let arrLength = numbers.length;

    for (let i = 0; i < arrLength; i++) {
        let rigthSide = 0;
        let leftSide = 0;

        for (let l = i - 1; l >= 0; l--) {
            leftSide += numbers[l]
        }

        for (let r = i + 1; r < arrLength; r++) {
            rigthSide += numbers[r]
        }

        if (rigthSide === leftSide) {
            equal = true;
            console.log(i);
            break;
        }

        rigthSide = 0;
        leftSide = 0;
    }

    if (equal === false) {
        console.log('no');
    }
}
equalSums([1, 2, 3])