function computerStore(comands) {
    let totalSum = 0;
    let currentComand = ''
    for (let i = 0; i < comands.length; i++) {
        currentComand = comands[i]

        if (currentComand === 'regular' || currentComand === 'special') {
            break;
        }

        currentComand = Number(currentComand)

        if (currentComand < 0) {
            console.log('Invalid price!');
        } else {
            totalSum += currentComand;
        }
    }

    let sumWithTaxes = totalSum * 1.2;
    let taxes = sumWithTaxes - totalSum;

    if (totalSum === 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        if (currentComand === 'regular') {
            console.log(`Total price: ${sumWithTaxes.toFixed(2)}$`);
        } else {
            console.log(`Total price: ${(sumWithTaxes * 0.90).toFixed(2)}$`);
        }

    }
}
computerStore(([
    'regular'
])
)