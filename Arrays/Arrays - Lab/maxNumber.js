function maxNumber(numbers) {
    topArr = [];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > numbers[i + 1]){
            topArr.push(numbers[i]);
        }
    }
    topArr.push(numbers[numbers.length - 1])
    console.log(topArr.join(' '));
}
maxNumber([1, 4, 3, 2])