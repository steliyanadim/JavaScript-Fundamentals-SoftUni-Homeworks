function vacancion(numberOfPeople, groupType, day) {
    let price = 0;

    if(groupType === 'Students'){

        switch (day) {
            case 'Friday': price = numberOfPeople * 8.45; break;
            case 'Saturday': price = numberOfPeople * 9.80; break;
            case 'Sunday': price = numberOfPeople * 10.46; break;
        }

        if (numberOfPeople >= 30) {
            price *= 0.85;
        }

    }else if (groupType === 'Business'){

        if (numberOfPeople >= 100) {
            numberOfPeople = numberOfPeople - 10;
        }

        switch (day) {
            case 'Friday': price = numberOfPeople * 10.90; break;
            case 'Saturday': price = numberOfPeople * 15.60; break;
            case 'Sunday': price = numberOfPeople * 16; break;
        }

    }else if (groupType === 'Regular'){

        switch (day) {
            case 'Friday': price = numberOfPeople * 15; break;
            case 'Saturday': price = numberOfPeople * 20; break;
            case 'Sunday': price = numberOfPeople * 22.50; break;
        }
        if (numberOfPeople >= 10 && numberOfPeople <= 20) {
            price *= 0.95;
        }
        
    }
    

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacancion(100,
    "Business",
    "Sunday"

)