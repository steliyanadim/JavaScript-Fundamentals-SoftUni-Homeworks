function sortAnArrayBy2Criteria(arr) {
    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    
    sortedArr.forEach(element => {
        console.log(element)
    });
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])