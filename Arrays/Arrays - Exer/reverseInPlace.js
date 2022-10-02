function reverceInPlace(arr) {
    let j = arr.length
    let r = arr.length - 1;

    for (let i = 0; i < j / 2; i++) {
        let currentChar = arr[i];
        let conteiner = currentChar;
        let reverceChart = arr[r];
        arr[i] = reverceChart;
        arr[r] = currentChar;
        r--;

    }
    console.log(arr.join(' '));
}
reverceInPlace(['a', 'b', 'c', 'd', 'e'])