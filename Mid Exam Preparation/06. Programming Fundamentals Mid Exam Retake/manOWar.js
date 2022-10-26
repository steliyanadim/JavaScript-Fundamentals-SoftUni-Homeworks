function manOWar(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift())
    
    let repairCounter = 0;
    let stalemate = true;

    let warShipTotalSum = 0;
    let pirateShipTotalSum = 0;

    for (let i = 0; i < input.length; i++) {
        if(input[i] === 'Retire'){
            break;
        }
        let currentCommand = input[i].split(' ');
        let command = currentCommand[0];
        let index = Number(currentCommand[1]);
        let damage = Number(currentCommand[2]);

        if (command === 'Fire') {
            if (index >= 0 && index < warShip.length) {
                warShip[index] -= damage;
                if (warShip[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    stalemate = false;
                    break;
                }
            }
        } else if (command === 'Defend') {
            let endIndex = Number(currentCommand[2]);
            damage = Number(currentCommand[3]);
            if ((index >= 0 && index < pirateShip.length) &&
                (endIndex >= 0 && endIndex < pirateShip.length)){
                for (let j = index; j <= endIndex; j++) {
                    pirateShip[j] -= damage;
                    if (pirateShip[j] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        stalemate = false;
                        break;
                    }
                }
            }
        } else if (command === 'Repair') {
            let health = Number(currentCommand[2]);
            if(index >= 0 && index < pirateShip.length){
                if(pirateShip[index] < maxHealth){
                    pirateShip[index] += health;
                    if(pirateShip[index] > maxHealth){
                        pirateShip[index] = maxHealth;
                    }
                }
            }

        } else if (command === 'Status') {
            for(let el of pirateShip){
                if(el < maxHealth * 0.2){
                    repairCounter++;
                }
            }
            console.log(`${repairCounter} sections need repair.`);
            repairCounter = 0;
        }
    
    }
    if(stalemate){
        for(let el of pirateShip){
            pirateShipTotalSum += el;
        }
        for(let el of warShip){
            warShipTotalSum += el;
        }
        console.log(`Pirate ship status: ${pirateShipTotalSum}`);
        console.log(`Warship status: ${warShipTotalSum}`);
    }
}
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Status",
"Retire"])



