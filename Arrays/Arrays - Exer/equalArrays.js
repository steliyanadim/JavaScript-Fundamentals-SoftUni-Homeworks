function equalArrays(firstArr, secondArr){
    let sum = 0;
    let currentIndex = 0;
    let equal = true;

    for(let i = 0; i < firstArr.length; i++){
        let currentNum = firstArr[i];
        if(currentNum !== secondArr[i]){
            currentIndex = i;
            equal = false;
            break;   
        }else{
            sum += Number(currentNum)
        }
    }
    if(equal){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }else{
        console.log(`Arrays are not identical. Found difference at ${currentIndex} index`);
    }

}
equalArrays(['10','2','30'], ['10','20','30'])