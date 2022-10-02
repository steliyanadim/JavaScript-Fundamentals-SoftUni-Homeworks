function dungeonestDark(array) {
    let arrayLength = array.length;
    let currentRomm = '';
    let currentNumber = '';
    let currentChart = '';
    let index = 0;
    let comand = array[0];
    let health = 100;
    let coinsCounter = 0;
    let roomsCounter = 0;

    for (let i = 0; i < comand.length; i++) {
        while (currentChart !== '|'&& i < comand.length) {
            currentChart = comand[i++];
            if (currentChart === ' ') {
                continue;
            }

            if (Number(currentChart) || currentChart === '0') {
                currentNumber += currentChart;
            } else if (!Number(currentChart) && currentChart !== '|' && currentChart !== '0') {
                currentRomm += currentChart;
            }
            
        }
        roomsCounter++;
        currentChart = comand[i];
        i--;
        currentNumber = Number(currentNumber);

        if(currentRomm === 'potion'){
 
            health += currentNumber;
            if(health > 100){
                health = 100;
            }

            console.log(`You healed for ${currentNumber} hp.`);
            console.log(`Current health: ${health} hp.`);


        }else if(currentRomm === 'chest'){
            coinsCounter += currentNumber;
            console.log(`You found ${coinsCounter} coins.`);
        }else{
            health -= currentNumber;
        }

        if(health <= 0 && currentRomm !== 'chest'&& currentRomm !== 'potion'){
            console.log(`You died! Killed by ${currentRomm}.`);
            console.log(`Best room: ${roomsCounter}`);
            break;
        }else if (health > 0 && currentRomm !== 'chest' && currentRomm !== 'potion'){
            console.log(`You slayed ${currentRomm}.`);
        }

        currentRomm = '';
        currentNumber = '';
    }


}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])