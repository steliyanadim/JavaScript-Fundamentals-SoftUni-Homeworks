function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenShield = 0;
    let neededMoney = 0;

    for (let i = 1; i <= lostFights; i++) {
        let currentLostFight = i;

        if (currentLostFight % 2 === 0) {
            neededMoney += helmetPrice;
        }
        if (currentLostFight % 3 === 0) {
            neededMoney += swordPrice;
        }

        if (currentLostFight % 3 === 0 && currentLostFight % 2 === 0) {
            neededMoney += shieldPrice;
            brokenShield++;
        }

        if (brokenShield % 2 === 0 && brokenShield > 0) {
            neededMoney += armorPrice;
            brokenShield = 0;
        }
    }
    console.log(`Gladiator expenses: ${neededMoney.toFixed(2)} aureus`);
}
gladiatorExpenses(23, 12.50, 21.50, 40, 200)