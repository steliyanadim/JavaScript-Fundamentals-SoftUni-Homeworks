function printAndSum(startNum, endNum) {
    let numSum = 0;
    let printLine = '';
    for (let num = startNum; num <= endNum; num++) {
        numSum += num
        printLine += `${num} `
    }
    console.log(printLine);
    console.log('Sum: ' + numSum);
}
printAndSum(0, 26)