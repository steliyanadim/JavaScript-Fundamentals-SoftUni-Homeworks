
function dayOfWeek(num) {
    if (num < 1 || num > 7) {
        console.log('Invalid day!');
    } else {
        let weekDays = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ]
        console.log(weekDays[num - 1]);
    }
}
dayOfWeek(8)