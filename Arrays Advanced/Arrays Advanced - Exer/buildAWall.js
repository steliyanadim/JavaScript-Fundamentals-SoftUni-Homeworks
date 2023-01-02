function buildAWall(input) {
    let currentYards = 0;
    let daysCounter = 0;
    let totalYards = 0;
    let dailyUsedYards = [];
    while (input.length !== 0) {
        input = input.map(x => x + 1)
                     .filter(x => x <= 30);
        if (input.length === 0) {
            break;
        }
        currentYards = input.length * 195;
        dailyUsedYards.push(currentYards);
        daysCounter++;
    }
    console.log(dailyUsedYards.join(', '));
    for (let el of dailyUsedYards) {
        totalYards += el;
    }
    totalYards = totalYards * 1900
    console.log(`${totalYards} pesos`);
}
buildAWall([17, 22, 17, 19, 17])