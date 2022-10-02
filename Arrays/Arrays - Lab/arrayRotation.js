function arrayRotation(arr, rotation) {
    let currentArr = [];
    let tempArr = [];
    let index = 1;

    for (let el of arr) {
        currentArr.push(el);
    }

    for(let r = 1; r <= rotation; r++){
        for (let i = 1; i < currentArr.length; i++) {
            tempArr.push(currentArr[index++]);
        }
        index = 1;
        tempArr.push(currentArr[0]);
        currentArr = tempArr;
        tempArr = [];
    }

    console.log(currentArr.join(' '));
}
arrayRotation([2, 4, 15, 31], 5)