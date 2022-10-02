function pyramidOfKingDjoser(base, increment) {

    let stoneCounter = 0;
    let marbleCounter = 0;
    let lapisLazuliCounter = 0;
    let stepCounter = 0;
    let currentBase = base;

    while (currentBase > 2) {
        let basePerimeter = currentBase * currentBase;
        let marbleCalc = ((currentBase * 4) - 4) * increment;
        let lapisLazuliCalc = ((currentBase * 4) - 4) * increment;
        let stoneCalc = (basePerimeter - ((currentBase * 4) - 4)) * increment;

        stoneCounter += stoneCalc;

        stepCounter++;

        if (stepCounter % 5 === 0) {
            lapisLazuliCounter += lapisLazuliCalc;
        } else {
            marbleCounter += marbleCalc;
        }

        lapisLazuliCalc = 0;
        stoneCalc = 0;
        marbleCalc = 0;
        currentBase -= 2;
    }

    if(base % 2 === 0){
        base = 2;
    }else{
        base = 1;

    }

    let goldCounter = base * increment;


    console.log(`Stone required: ${Math.ceil(stoneCounter)}`);
    console.log(`Marble required: ${Math.ceil(marbleCounter)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliCounter)}`);
    console.log(`Gold required: ${Math.ceil(goldCounter)}`);
    console.log(`Final pyramid height: ${Math.ceil(stepCounter * increment)}`);

}
pyramidOfKingDjoser(11,
    0.75
    )