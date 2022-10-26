function muOnline(input) {
    let rooms = input.split('|');
    let roomsCounter = 0;
    let health = 100;
    let bitcoins = 0;
    let isSuccess = true;

    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i].split(' ');
        let command = currentRoom[0];
        let number = Number(currentRoom[1]);
        roomsCounter++;
        switch (command) {
            case 'potion':
                if (health < 100) {
                    let healthToFill = 100 - health;
                    if (number < healthToFill) {
                        health += number;
                        console.log(`You healed for ${number} hp.`);
                        console.log(`Current health: ${health} hp.`);
                    } else {
                        health = 100;
                        console.log(`You healed for ${healthToFill} hp.`);
                        console.log(`Current health: ${health} hp.`);
                    }
                } else {
                    continue;
                }
                break;
            case 'chest':
                bitcoins += number;
                console.log(`You found ${number} bitcoins.`);
                break;
            default:
                health -= number;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomsCounter}`);
                    isSuccess = false;
                }
                break;
        }
        if(health <= 0){
            break;
        }
    }
    if (isSuccess) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")