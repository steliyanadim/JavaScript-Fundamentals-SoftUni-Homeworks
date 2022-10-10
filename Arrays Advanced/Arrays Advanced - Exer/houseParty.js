function houseParty(input) {
    let tempArr = input.slice();
    let listOfGuests = [];
    for (let i = 0; i < input.length; i++) {
        let currentComand = tempArr.shift().split(' ');
        let guestName = currentComand[0];

        if (currentComand.length === 3) {
            if (!listOfGuests.includes(guestName)) {
                listOfGuests.push(guestName);
            } else {
                console.log(`${guestName} is already in the list!`);
            }
        } else {
            if (listOfGuests.includes(guestName)) {
                let index = listOfGuests.indexOf(guestName);
                listOfGuests.splice(index, 1);
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        }

    }
    listOfGuests.forEach(element => {
        console.log(element);
    });
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)