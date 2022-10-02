function bitcoinMining(input) {
    let index = 0;
    let currentInput = Number(input[index++]);
    let day = 0;
    let bitcoins = 0;
    let totalMoney = 0;
    let firstDay = 0;

    for (let i = 1; i <= input.length; i++) {
        day++;

        let minedGold = currentInput;

        if (day % 3 === 0) {
            minedGold *= 0.70;
        }

        let exchancedMoney = minedGold * 67.51;
        totalMoney += exchancedMoney;
        exchancedMoney = 0;

        while (totalMoney >= 11949.16) {
            bitcoins++;
            if (bitcoins === 1) {
                firstDay = day;
            }
            totalMoney -= 11949.16;
        }

        currentInput = Number(input[index++]);
    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if(firstDay >= 1){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124])