
function sumDigits(num) {
    num = String(num);
    let result = 0;

    for (let i = 0; i < num.length; i++) {
        let cuurentNum = Number(num[i]);
        result += cuurentNum;
    }

    console.log(result);
}
sumDigits(245678)