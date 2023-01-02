function gladiatorInventory(data) {
    let inventory = data.shift().split(' ');
    for (let i = 0; i < data.length; i++) {
        let currentCommand = data[i].split(' ');
        let operation = currentCommand[0];
        let equipment = currentCommand[1];
        let index;
        switch(operation){
            case 'Buy':
                if(!inventory.includes(equipment)){
                    inventory.push(equipment);
                };
                break;
            case 'Trash':
                if(inventory.includes(equipment)){
                    index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                };
                break;
            case 'Repair':
                if(inventory.includes(equipment)){
                    inventory.push(equipment)
                    index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                };
                break;
            case 'Upgrade':
                equipment = equipment.split('-');
                if(inventory.includes(equipment[0])){
                    index = (inventory.indexOf(equipment[0])) + 1;
                    let upgrade = equipment[0] + ':' + equipment[1];
                    inventory.splice(index, 0, upgrade);
                }   
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

)