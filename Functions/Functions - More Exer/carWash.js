function carWash(comands) {
    let cleanPercentage = 0;
    for (let el of comands) {
        switch (el) {
            case 'soap': cleanPercentage += 10; break;
            case 'water': cleanPercentage *= 1.2; break;
            case 'vacuum cleaner': cleanPercentage *= 1.25; break;
            case 'mud':  cleanPercentage *= 0.9; break;
        }
    }

    console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])