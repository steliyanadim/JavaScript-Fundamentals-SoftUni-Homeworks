function factorialDivision(firstNum, secondNum) {
    let sumfirstNum = factorialfirstNum(firstNum);
    let sumSecondNum = factorialSecondNum(secondNum);
    
    let finalSum = sumfirstNum / sumSecondNum;
    console.log(finalSum.toFixed(2));

    function factorialfirstNum(firstNum){
        let firstResult = 1;
        for(let i = firstNum; i > 0; i--){
            firstResult *= i;
        }
        return firstResult;   
    }

    function factorialSecondNum(secondNum){
        let secondResult = 1;
        for(let i = secondNum; i > 0; i--){
            secondResult *= i;
        }
        return secondResult;
    }
}
factorialDivision(5, 2)