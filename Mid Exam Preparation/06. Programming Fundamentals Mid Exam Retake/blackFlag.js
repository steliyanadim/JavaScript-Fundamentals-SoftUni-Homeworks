function blackFlag(input) {
    input = input.map(Number)
    let days = input.shift();
    let dailyPlunder = input.shift();
    let expectedPlunder = input.shift();
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 === 0) {
            totalPlunder += dailyPlunder / 2;
        }
        if (i % 5 === 0) {
            totalPlunder *= 0.70;
        }
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((totalPlunder / expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["10",
    "20",
    "380"])
