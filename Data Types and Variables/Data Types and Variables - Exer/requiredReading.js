function requiredReading(pages, pagesPerHour, days) {
    let totaHours = pages / pagesPerHour;
    let hoursPerDay = totaHours / days;

    console.log(hoursPerDay);

}
requiredReading(212, 20, 2)