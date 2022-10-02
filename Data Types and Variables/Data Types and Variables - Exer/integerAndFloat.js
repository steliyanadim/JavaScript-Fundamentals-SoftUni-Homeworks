function integerAndFloat(first, secound, third) {

    let res = first + secound + third;
    let resToString = String(res)
    let isFloat = false;

    for (let i = 0; i < resToString.length; i++) {
        let currentChar = resToString[i];

        if (currentChar === '.') {
            isFloat = true;
        }
    }

    if (isFloat === true) {
        console.log(`${res} - Float`);
    } else {
        console.log(`${res} - Integer`);
    }

}
integerAndFloat(100, 200, 303)