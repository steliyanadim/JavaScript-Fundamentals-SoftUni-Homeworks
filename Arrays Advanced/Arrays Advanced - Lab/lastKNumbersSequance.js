function lastKNumbersSequance(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let sequenceK = arr.slice(-k)
        let result = 0;
        for(let el of sequenceK){
            result += el;
        }
        arr.push(result);
    }
    console.log(arr.join(' '));
}
lastKNumbersSequance(6, 3)
