function mergeArrays(firstArr, secoundArr){
    let finalResult = [];
    for(let i = 0; i < firstArr.length; i++){
       
        let currentResul = 0;

        if(i % 2 === 0){
            currentResul = Number(firstArr[i]) + Number(secoundArr[i]);
        }else{
            currentResul = firstArr[i] + secoundArr[i];
        }

        finalResult.push(currentResul);
    }
console.log(finalResult.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']
)