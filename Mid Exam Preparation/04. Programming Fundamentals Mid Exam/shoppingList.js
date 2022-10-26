function shoppingList(input) {
    let list = input[0].split('!');

    function urgentCommand(item) {
        if (!list.includes(item)) {
            list.unshift(item);
        }
    }

    function unnecessaryCommand(item) {
        list = list.filter(x => x != item)
    }

    function correctCommand(oldItem, newItem) {
        if (list.includes(oldItem)) {
            let index = list.indexOf(oldItem);
            list.splice(index, 1, newItem);
        }
    }

    function rearrangeCommand(item) {
        if (list.includes(item)) {
            let index = list.indexOf(item);
            list.splice(index, 1);
            list.push(item);
        }
    }

    for (let i = 1; i < input.length; i++) {
        if(input[i] === "Go Shopping!"){
            break;
        }
        let currentCommand = input[i].split(' ')
        let typeCommand = currentCommand.shift();
        let item = currentCommand.shift();
        let itemToAdd = currentCommand.shift();
        switch (typeCommand) {
            case 'Urgent': urgentCommand(item); break;
            case 'Unnecessary': unnecessaryCommand(item); break;
            case 'Correct': correctCommand(item, itemToAdd); break;
            case 'Rearrange': rearrangeCommand(item); break;
        }
    }

    console.log(list.join(', '));
}
shoppingList(["Milk!Pepper!Water!Banana",
    "Rearrange Pepper",
    "Go Shopping!"])
