function triplesOfLatinLetters(n) {
    n = Number(n);
    
    for (let i = 1; i <= n; i++) {
        let firstChar = String.fromCharCode(96 + i);
        for (let k = 1; k <= n; k++) {
            let secoundChar = String.fromCharCode(96 + k);
            for (let j = 1; j <= n; j++) {
                let thirdChar = String.fromCharCode(96 + j);
                console.log(firstChar + secoundChar + thirdChar);
            }
        }
    }
}
triplesOfLatinLetters('3')