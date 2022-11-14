function meetings(data) {
    let appointments = {};
    for (let meeting of data) {
        let [weekday, person] = meeting.split(' ')
        if (appointments.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            console.log(`Scheduled for ${weekday}`);
            appointments[weekday] = person
        }
    }
    for (let appointment in appointments) {
        console.log(`${appointment} -> ${appointments[appointment]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)