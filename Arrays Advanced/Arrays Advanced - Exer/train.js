function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = input.shift();

    for (let i = 0; i < input.length; i++) {
        let currentComand = input[i].split(' ');

        if (currentComand[0] === 'Add') {
            wagons.push(Number(currentComand[1]));
        } else {
            for (let j = 0; j < wagons.length; j++) {
                let addedPassengers = Number(currentComand[0]) + wagons[j];
                if (addedPassengers <= maxCapacity) {
                    wagons.splice(j, 1, addedPassengers);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)