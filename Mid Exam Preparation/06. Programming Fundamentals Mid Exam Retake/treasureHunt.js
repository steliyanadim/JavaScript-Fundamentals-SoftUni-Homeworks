function treasureHunt(input) {
    let treasureChest = input.shift().split('|');
    let treasureGain  = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i] === 'Yohoho!'){
            break;
        }
        let currentCommand = input[i].split(' ');
        let command = currentCommand[0];
        let number = currentCommand[1];

        if(command === 'Loot'){
            for(let j = 1; j < currentCommand.length; j++){
                if(!treasureChest.includes(currentCommand[j])){
                    treasureChest.unshift(currentCommand[j]);
                }
            }

        }else if(command === 'Drop'){
            if(number >= 0 && number < treasureChest.length){
                treasureChest.push(treasureChest[number])
                treasureChest.splice(number, 1); 
            }
        }else{
            let startIndex = treasureChest.length - number;
            if(startIndex < 0){
                startIndex = 0;
            }
            let stealedItems = treasureChest.splice(startIndex, number);
            console.log(stealedItems.join(', '));
        }
    }

    for(let el of treasureChest){
        treasureGain += el.length;
    }
    let averageTreasureGain = treasureGain / treasureChest.length;
    if(treasureGain !== 0){
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    }else{
        console.log(`Failed treasure hunt.`);
    }  
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Steal 6",
"Yohoho!"])
