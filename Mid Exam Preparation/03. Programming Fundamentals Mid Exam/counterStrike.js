function counterStrike(input) {
    let energy = Number(input[0]);
    let wonBattlesCounter = 0;
    let lostGame = false;
    for (let i = 1; i < input.length; i++) {
        let currentDistance = input[i]
        if (currentDistance === 'End of battle') {
            break;
        }
        currentDistance = Number(input[i]);
        energy -= currentDistance;
        if (energy < 0) {
            energy += currentDistance;
            lostGame = true;
            break;
        } else {
            wonBattlesCounter++;
            if (wonBattlesCounter % 3 === 0) {
                energy += wonBattlesCounter;
            }
        }
    }

    if (lostGame) {
        console.log(`Not enough energy! Game ends with ${wonBattlesCounter} won battles and ${energy} energy`);
    } else {
        console.log(`Won battles: ${wonBattlesCounter}. Energy left: ${energy}`);
    }
}
counterStrike(["60","20","20","20","10"])