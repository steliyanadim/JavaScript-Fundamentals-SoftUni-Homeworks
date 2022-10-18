function memoryGame(input) {
    let sequence = input[0].split(' ');
    let movesCounter = 0;
    
    for (let i = 1; i < input.length; i++) {
        if (input[i] === 'end') {
            break;
        }
        let currentIndexes = input[i].split(' ');
        let fisrtIndex = Number(currentIndexes[0]);
        let secondIndex = Number(currentIndexes[1]);
        movesCounter++;
        let secondElementToRemove = sequence[secondIndex];

        if (fisrtIndex === secondIndex ||
            fisrtIndex > sequence.length - 1 || fisrtIndex < 0 ||
            secondIndex > sequence.length - 1|| secondIndex < 0) {
            let middleIndex = sequence.length / 2;
            let middleElement = '-' + movesCounter + 'a';
            sequence.splice(middleIndex, 0, middleElement, middleElement)
            console.log(`Invalid input! Adding additional elements to the board`);
        } else {
            if (sequence[fisrtIndex] !== sequence[secondIndex]) {
                console.log(`Try again!`);
            } else {
                console.log(`Congrats! You have found matching elements - ${sequence[fisrtIndex]}!`);

                sequence.splice(fisrtIndex, 1);
                let newSecoundIndex = sequence.indexOf(secondElementToRemove);
                sequence.splice(newSecoundIndex, 1);
            }

            if (sequence.length === 0) {
                console.log(`You have won in ${movesCounter} turns!`);
                break;
            }
        }
    }

    if (sequence.length !== 0) {
        console.log(`Sorry you lose :(`);
        console.log(sequence.join(' '));
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 -1",
    "1 0",
    "1 0",
    "1 0",
    "end"
]


)