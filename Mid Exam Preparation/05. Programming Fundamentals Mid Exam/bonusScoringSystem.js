function bonusScoringSystem(input) {
    input = input.map(Number)
    let students = input.shift();
    let lectures = input.shift();
    let bonus = input.shift();
    let maxBonus = 0;
    let maxAttendance = 0;

    for (let i = 0; i < input.length; i++) {
        let curAttendance = input[i]
        let curtotalBonus = curAttendance / lectures * (5 + bonus);
        if (curtotalBonus > maxBonus) {
            maxBonus = curtotalBonus;
            maxAttendance = curAttendance;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])
