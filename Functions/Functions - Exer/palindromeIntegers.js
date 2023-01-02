function palindromeIntegers(numbers) {

    for (let el of numbers) {
        let currentNum = String(el);
        let reversed = String(el).split('').reverse().join('');

        if (reversed === currentNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeIntegers([32, 2, 232, 1010])