function condenseArrayToNumber(numbers) {
    let condenser = [];

    for (let el of numbers) {
        condenser.push(el);
    }
    while (condenser.length > 1) {
        let tempArr = [];
        for (let i = 0; i < condenser.length - 1; i++) {
            tempArr[i] = condenser[i] + condenser[i + 1];
        }
        condenser = tempArr;
    }
    console.log(condenser.join());
}
condenseArrayToNumber([5, 0, 4, 1, 2])