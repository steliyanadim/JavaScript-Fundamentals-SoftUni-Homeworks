function arrayManipulator(numbers, commands) {
    let i = 0;
    let currentCommand = commands[i++].split(' ');
    let operation = currentCommand.shift()
    let index;
    let element;
    let rotations;

    while (operation !== 'print') {
        switch (operation) {
            case 'add':
                index = Number(currentCommand.shift());
                element = Number(currentCommand.shift());
                addOperation(index, element);
                break;
            case 'addMany':
                index = Number(currentCommand.shift());
                let elements = currentCommand;
                addManyOperation(index, elements);
                break;
            case 'contains':
                element = Number(currentCommand.shift());
                containsOperation(element);
                break;
            case 'remove':
                index = Number(currentCommand.shift());
                removeOperation(index);
                break;
            case 'shift':
                rotations = Number(currentCommand.shift());
                shiftOperation(rotations);
                break;
            case 'sumPairs':
                sumPairsOperation()
                break;
        }
        currentCommand = commands[i++].split(' ');
        operation = currentCommand.shift();

    }

    function addOperation(index, element) {
        numbers.splice(index, 0, element);
    }


    function addManyOperation(index, elements) {
        let endIndex = index + elements.length - 1;
        for (let j = index; j <= endIndex; j++) {
            let elementToAdd = Number(elements.shift());
            numbers.splice(j, 0, elementToAdd);
        }
    }


    function containsOperation(element) {
        if (numbers.includes(element)) {
            console.log(numbers.indexOf(element));
        } else {
            console.log(-1);
        }
    }


    function removeOperation(index) {
        numbers.splice(index, 1);
    }


    function shiftOperation(rotations){
        for(let k = 0; k < rotations; k++){
            let firstElement = numbers.shift()
            numbers.push(firstElement)
        }
    }

    function sumPairsOperation() {
        let endIndex = numbers.length / 2;
        for(let l = 0; l < endIndex; l++){
            let firstNum = Number(numbers.splice(l,1));
            let secondNum = Number(numbers.splice(l,1));
            let sum = firstNum + secondNum
            numbers.splice(l, 0, sum);

        }
    }
    console.log(`[ ${numbers.join(', ')} ]`);
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    
)