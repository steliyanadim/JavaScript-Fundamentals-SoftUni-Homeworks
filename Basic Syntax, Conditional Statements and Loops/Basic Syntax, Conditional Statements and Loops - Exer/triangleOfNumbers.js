function triangleOfNumbers(num) {

    for (let currentNum = 1; currentNum <= num; currentNum++) {

        let printLine = '';

        for (let row = 1; row <= currentNum; row++) {
            printLine += `${currentNum} `
        }
        
        console.log(printLine);
    }
}
triangleOfNumbers(30)