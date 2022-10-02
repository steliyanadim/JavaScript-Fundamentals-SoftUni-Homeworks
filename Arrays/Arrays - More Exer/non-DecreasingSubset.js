function nonDecreasingSubset(nums) {
    let biggestNum = 0;
    let newArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= biggestNum) {
            biggestNum = nums[i];
            newArr.push(biggestNum);
        }
    }

    console.log(newArr.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])