function inventory(input) {
    let collection = input.shift().split(', ')
    let i = 0;
    while (input[i] !== 'Craft!') {
        let currentLine = input[i].split(' - ');
        let command = currentLine[0];
        let item = currentLine[1];
        
        switch (command) {
            case 'Collect':
                if (!collection.includes(item)) {
                    collection.push(item);
                }
                break;
            case 'Drop':
                if (collection.includes(item)) {
                    let index = collection.indexOf(item);
                    collection.splice(index, 1);
                }
                break;
            case 'Combine Items':
                item = item.split(':');
               let oldItem = item[0];
               let newItem = item[1];
               if(collection.includes(oldItem)){
                let oldItemIndex = collection.indexOf(oldItem);
                collection.splice(oldItemIndex + 1, 0, newItem);
               }
                break;
            case 'Renew':
                if (collection.includes(item)) {
                    let index = collection.indexOf(item);
                    collection.splice(index, 1);
                    collection.push(item);
                }
                break;
        }
        i++;
    }
    console.log(collection.join(', '));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )