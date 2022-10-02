function nextDay(year, month, day) {

    if ((month === 1 || month === 3 || month === 5 || month === 7 || month === 8
        || month === 10 || month === 12) && (day === 31)) {
        day = 1;
        if (month === 12) {
            month = 1;
        } else {
            month += 1;
        }
    } else if ((month === 1 || month === 3 || month === 5 || month === 7 || month === 8
        || month === 10 || month === 12) && (day < 31)) {
        day += 1;
    }

    if ((month === 4 || month === 6 || month === 9 || month === 11) && (day === 30)) {
        day = 1;
        if (month === 12) {
            month = 1;
        } else {
            month += 1;
        }
    } else if ((month === 4 || month === 6 || month === 9 || month === 11) && (day < 30)) {
        day += 1;
    }

    if ((year % 4 === 0) && (month === 2)) {
        if (day === 29) {
            day = 1;
            month += 1;
        } else {
            day += 1;
        }
    }else if ((year % 4 !== 0) && (month === 2)){
        if (day === 28) {
            day = 1;
            month += 1;
        } else {
            day += 1;
        }
    }

    if(year === 1){
        year += 1900;
    }
    if (month === 1 && day === 1) {
        year += 1
    }

    console.log(`${year}-${month}-${day}`)
}
nextDay(2017, 2, 28)