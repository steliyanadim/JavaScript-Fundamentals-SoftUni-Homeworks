function spiceMustFlow(startingYield) {
    let dayCounter = 0;
    let totalSpices = 0;

    for (let i = startingYield; i >= 100; i -= 10) {
        let currentYield = i;
        dayCounter++;
        let minedSpices = currentYield - 26;
        totalSpices += minedSpices;
    }

    console.log(dayCounter);

    if (dayCounter !== 0) {
        console.log(totalSpices - 26);
    } else {
        console.log(totalSpices);
    }

}
spiceMustFlow(450)