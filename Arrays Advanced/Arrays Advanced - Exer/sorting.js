function sorting(arr) {
    let sortedArr = [];

    let bigToSmallNums = arr.sort((a, b) => b - a)
    let smalltToBigNums = [];

    for (let i = bigToSmallNums.length - 1; i >= 0; i--) {
        smalltToBigNums.push(bigToSmallNums[i]);
    }

    for (let i = 0; i < bigToSmallNums.length; i++) {
        sortedArr.push(bigToSmallNums[i]);
        sortedArr.push(smalltToBigNums[i]);
    }

    console.log(sortedArr.slice(0, sortedArr.length / 2).join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])