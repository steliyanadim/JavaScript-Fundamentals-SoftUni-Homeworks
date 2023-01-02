function specialNumbers(num) {

    let result = 0;

    for (let i = 1; i <= num; i++) {

        let currentNum = i;
        currentNum = String(currentNum)

        for (let j = 0; j < currentNum.length; j++) {
            let currentRes = currentNum[j];
            currentRes = Number(currentRes);
            result += currentRes;
        }

        if (result === 5 || result === 7 || result === 11) {
            console.log(`${currentNum} -> True`);
        } else {
            console.log(`${currentNum} -> False`);
        }
        result = 0;
    }

}
specialNumbers(15)
