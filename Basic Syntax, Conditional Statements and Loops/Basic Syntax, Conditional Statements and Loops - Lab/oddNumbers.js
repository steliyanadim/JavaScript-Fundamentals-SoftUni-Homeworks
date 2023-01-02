function oddNumbers(n) {
    let m = 1;
    let sum = 0;
    let i = 1;
    while (i <= n) {
        if (m % 2 !== 0) {
            sum += m;
            console.log(m);
            i++;
        }
        m++;
    }
    console.log(`Sum: ${sum}`);
}
oddNumbers(5)