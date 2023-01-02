function addAndSubtract(numbers) {

    let originalNumSum = 0;
    let modifiedNumSum = 0;

    let arrLenghth = numbers.length;

    for (let i = 0; i < arrLenghth; i++) {

        originalNumSum += numbers[i];

        if (numbers[i] % 2 === 0) {
            numbers[i] += i;
        } else {
            numbers[i] -= i;
        }

        modifiedNumSum += numbers[i];
    }
    
    console.log(numbers);
    console.log(originalNumSum);
    console.log(modifiedNumSum);

}
addAndSubtract([5, 15, 23, 56, 35])