function arrayManipulations(input) {
    let arr = input[0].split(' ')
    let inputL = input.length
    for (let i = 1; i < inputL; i++) {
        let currentComand = input[i].split(' ');

        switch (currentComand[0]) {
            case 'Add':
                arr.push(currentComand[1]);
                break;

            case 'Remove':
                if (arr.includes(currentComand[1])) {
                    let index = arr.indexOf(currentComand[1]);
                    arr.splice(index, 1);
                }
                break;

            case 'RemoveAt':
                arr.splice(currentComand[1], 1);
                break;

            case 'Insert':
                arr.splice(currentComand[2], 0, currentComand[1]);
                break;

        }
    }
    console.log(arr.join(' '));
} arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']

)