function softUniReception(input) {
    let arr = input.map(Number);
    let students = arr[3];
    let totalAnswersPerHour = arr[0] + arr[1] + arr[2];
    let neededHours = 0;

    while(students > 0){
        neededHours++;
        if(neededHours % 4 === 0){
            continue;
        }
        students -= totalAnswersPerHour;
    }

    console.log(`Time needed: ${neededHours}h.`);
}
softUniReception(['3','2','5','40'])