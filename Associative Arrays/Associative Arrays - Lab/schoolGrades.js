function schoolGrades(input) {
    let students = {}
    let averageGrade = 0;
    
    for (let line of input) {
        let grades = line.split(' ')
        let name = grades.shift();

        if (!students.hasOwnProperty(name)) {
            students[name] = grades
        } else {
            let curValue = Object.values(students[name])
            let newValue = curValue.concat(grades)
            students[name] = newValue
        }
    }

    for (let student in students) {
        let grades = Object.values(students[student])
        for (let grade of grades) {
            averageGrade += Number(grade)
        }
        averageGrade = averageGrade / grades.length
        students[student] = averageGrade.toFixed(2);
        averageGrade = 0;
    }

    let sortedStudents = Object.entries(students);
    sortedStudents = sortedStudents.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))

    for (let [name, grade] of sortedStudents) {
        console.log(`${name}: ${grade}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)