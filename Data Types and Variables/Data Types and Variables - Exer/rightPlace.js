function rightPlace(firstWord, char, secoundWord) {

    let result = '';
    for (let i = 0; i < firstWord.length; i++) {
        let currentChart = firstWord[i];
        if (currentChart === '_') {
            currentChart = char;
        }
        result += currentChart;
    }

    let finalRes = result === secoundWord ? 'Matched' : 'Not Matched';

    console.log(finalRes);

}
rightPlace('Str_ng', 'i', 'String')