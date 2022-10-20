function arrayModifier(input) {
    let arrToModify = input[0].split(' ').map(Number);

    for (let i = 1; i < input.length; i++) {
        let currentOrder = input[i].split(' ');
        let command = currentOrder[0];
        let firstIndex = currentOrder[1];
        let secondIndex = currentOrder[2];

        switch (command) {
            case 'swap':
                let temp = arrToModify[secondIndex];
                arrToModify.splice(secondIndex, 1, arrToModify[firstIndex]);
                arrToModify.splice(firstIndex, 1, temp);
                break;
            case 'multiply':
                let multiplyResult = arrToModify[firstIndex] * arrToModify[secondIndex];
                arrToModify.splice(firstIndex, 1, multiplyResult);
                break;
            case 'decrease':
                for (let j = 0; j < arrToModify.length; j++) {
                    arrToModify[j] -= 1;
                };
                break;
        }
    }
    console.log(arrToModify.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'end',
    'swap 3 6',
    'end',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])