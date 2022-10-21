function shootForTheWin(input) {
    let i = 0;
    let targets = input[i++].split(' ').map(Number);
    let currentIndex = input[i++];
    let shortsCounter = 0;
    while (currentIndex !== 'End') {
        currentIndex = Number(currentIndex);
        if (currentIndex >= 0 && currentIndex < targets.length) {
            let temp = targets[currentIndex];
            targets[currentIndex] = -1;
            for (let j = 0; j < targets.length; j++) {
                if (targets[j] > temp && targets[j] !== -1) {
                    targets[j] -= temp;
                } else if (targets[j] <= temp && targets[j] !== -1) {
                    targets[j] += temp;
                }
            }
            shortsCounter++;
        }
        currentIndex = String(input[i++]);
    }

    console.log(`Shot targets: ${shortsCounter} -> ${targets.join(' ')}`);
}
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])