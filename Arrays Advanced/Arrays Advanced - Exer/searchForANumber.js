function searchForANumber(arrOfNums, manipulations) {
    let numsToTake = manipulations[0];
    let numsToDelele = manipulations[1];
    let searchedNum = manipulations[2];
    let times = 0;

    let collection = arrOfNums.splice(0, numsToTake);
    collection.splice(0, numsToDelele);

    for(let el of collection){
        if(el === searchedNum){
            times++;
        }
    }
    
    console.log(`Number ${searchedNum} occurs ${times} times`);
}
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    
)