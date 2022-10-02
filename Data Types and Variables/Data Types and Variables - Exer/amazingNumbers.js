function amazingNumbers(num) {
    num = String(num);
    let numSum = 0;

    for (let i = 0; i < num.length; i++) {
        numSum += Number(num[i]);
    }

    numSum = String(numSum);
    let amazingNum = false;

    for (let i = 0; i < numSum.length; i++) {
        let currentNum = numSum[i];
        if (currentNum === '9') {
            amazingNum = true;
            break;
        }
    }

    console.log(amazingNum === true ? `${num} Amazing? True` : `${num} Amazing? False`);
}

amazingNumbers(10)