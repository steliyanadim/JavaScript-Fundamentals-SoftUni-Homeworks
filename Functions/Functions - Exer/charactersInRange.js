function charactersInRange(firstChar, secoundChar){
    let startChar = Math.min(firstChar.charCodeAt(0), secoundChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0), secoundChar.charCodeAt(0));
    let result = [];
    let currentChart = '';
    
    for(let i = startChar + 1; i < endChar; i++){
        currentChart = String.fromCharCode(i);
        result.push(currentChart);
    }
    console.log(result.join(' '));
} 
charactersInRange('a', 'd')