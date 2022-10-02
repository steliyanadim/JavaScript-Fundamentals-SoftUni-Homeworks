function evenSubtraction(num) {
    let result = 0;

    for (let i = 1; i <= num.length; i++) {
        let currentNum = Number(num[i - 1]);

        if (currentNum % 2 === 0) {
            result += currentNum;
        }

    }

    console.log(result);
}
evenSubtraction(['3', '5', '7', '9'])