function maxSequenceOfEqualElements(numbers) {
    let maxSequence = [];
    for (let i = 0; i < numbers.length; i++) {
        let currentmSequence = [];
        for (let j = i; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                currentmSequence.push(numbers[i]);
            } else {
                break;
            }
        }
        if (currentmSequence.length > maxSequence.length) {
            maxSequence = currentmSequence;
        }
    }
    console.log(maxSequence.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])