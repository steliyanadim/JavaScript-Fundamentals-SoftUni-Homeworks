function firstAndLastKNumbers(arr) {
    let numberK = arr[0];

    let firstK = arr.slice(1, numberK + 1);
    let lastK = arr.slice(arr.length - numberK)
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
firstAndLastKNumbers([3,
    6, 7, 8, 9]
)