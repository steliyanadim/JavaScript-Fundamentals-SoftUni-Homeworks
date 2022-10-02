function tseamAccount(comands) {
    let newArr = [];
    let accound = [];
    for (let el of comands) {
        newArr.push(el);
    }
    accound = newArr[0].split(' ');

    for (let i = 1; i < newArr.length; i++) {
        let currentElement = (newArr[i]).split(' ');
        let currentComand = currentElement[0];
        let currentGame = currentElement[1];
        switch (currentComand) {
            case 'Install':
                if (!accound.includes(currentGame)) {
                    accound.push(currentGame);
                }
                break;
            case 'Uninstall':
                if (accound.includes(currentGame)) {
                    let indexOfCurrentGame = accound.indexOf(currentGame);
                    accound.splice(indexOfCurrentGame, 1);
                }
                break;
            case 'Update':
                if (accound.includes(currentGame)) {
                    indexOfCurrentGame = accound.indexOf(currentGame);
                    accound.splice(indexOfCurrentGame, 1);
                    accound.push(currentGame);
                }
                break;
            case 'Expansion':
                let expansion = (currentGame).split('-');
                expansion.splice(1, 0, ':');
                if (accound.includes(expansion[0])) {
                    indexOfCurrentGame = accound.indexOf(expansion[0]);
                    let joinedExpansion = expansion.join('');
                    accound.splice((indexOfCurrentGame + 1), 0, joinedExpansion);
                }
                break;
        }
    }
    console.log(accound.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']

)