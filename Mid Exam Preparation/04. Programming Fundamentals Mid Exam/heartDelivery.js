function heartDelivery(input) {
    let neighborhood = input[0].split('@').map(Number);
    let curJump = [];
    let curHouseIndex;
    let failedCounter = 0;
    let curStep = 0;

    function step(curStep) {
        if (neighborhood[curStep] !== 0) {
            neighborhood[curStep] -= 2;
            if ((neighborhood[curStep] === 0)) {
                console.log(`Place ${curStep} has Valentine's day.`)
            }
        } else {
            console.log(`Place ${curStep} already had Valentine's day.`)
        }
    }


    for (let i = 1; i < input.length; i++) {
        if (input[i] === 'Love!') {
            break;
        }
        curJump = input[i].split(' ')
        curHouseIndex = Number(curJump[1]);
        curStep += curHouseIndex;

        if (curStep < neighborhood.length || curStep < 0) {
            step(curStep)
        } else {
            curStep = 0;
            step(curStep)
        }
    }
    console.log(`Cupid's last position was ${curStep}.`);

    for (let el of neighborhood) {
        if (el !== 0) {
            failedCounter++;
        }
    }
    if(failedCounter > 0){
        console.log(`Cupid has failed ${failedCounter} places.`);
    }else{
        console.log(`Mission was successful.`);
    }
    
}

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])


