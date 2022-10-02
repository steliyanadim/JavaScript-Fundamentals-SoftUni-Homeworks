function rotateArray(elements) {
    let newArr = [];
    let rotations = Number(elements[elements.length - 1]);

    for(let j = 0; j < elements.length - 1; j++){
        newArr.push(elements[j]);
    }

    for (let i = 1; i <= rotations; i++) {
        newArr.unshift(newArr[newArr.length - 1]);
        newArr.pop(newArr[newArr.length - 1]);
    }

    console.log(newArr.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])