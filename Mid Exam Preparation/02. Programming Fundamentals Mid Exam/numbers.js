function numbers(sequence) {
    let nums = sequence.split(' ').map(Number);
    let avaregeNum = 0;

    for (let el of nums) {
        avaregeNum += el;
    }

    avaregeNum = avaregeNum / nums.length;
    let greaterNums = nums.filter(x => x > avaregeNum)

    if (greaterNums.length !== 0) {
        greaterNums.sort((a, b) => b - a).splice(5)
        console.log(greaterNums.join(' '));
    }else{
        console.log('No');
    }

}
numbers('1')