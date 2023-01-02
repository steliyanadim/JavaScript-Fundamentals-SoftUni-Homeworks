function printNthElement(elements) {
    let nElements = [];
    let step = Number(elements[elements.length - 1])

    for (let i = 0; i < elements.length - 1; i += step) {
        let currentElement = elements[i];
        nElements.push(currentElement);
    }
    console.log(nElements.join(' '));
}
printNthElement(['dsa', 'asd', 'test', 'test', '2'])