function theLift(arr) {
    let tourists = Number(arr[0]);
    let wagons = arr[1].split(" ").map(Number);
    let checkforEmptySpots = false;

    for (let i = 0; i < wagons.length; i++) {
        let freeSpaces = 4 - wagons[i];
        for (let j = 0; j < freeSpaces; j++) {
            if (tourists > 0) {
                wagons[i]++;
                tourists--;
            } else {
                if (wagons[i] < 4) {
                    checkforEmptySpots = true;
                }
                break;
            }
        }

    }
   
    if (checkforEmptySpots) {
        console.log(`The lift has empty spots!`);
    } else if (wagons.includes(0)) {
        console.log(`The lift has empty spaces!`);
    } else if (tourists !== 0) {
        console.log(`There isn't enough space! ${tourists} people in a queue!`);
    }
    console.log(wagons.join(" "));
}
theLift([
    "15",
    "0 0 0 0 0"
])