function addAndRemove(elements) {

    let newArr = [];
    let num = 1;

    for (let i = 0; i < elements.length; i++) {
        let currentComand = elements[i];

        if (currentComand === 'add') {
            newArr.push(num);
        } else {
            newArr.pop();   
        }
        num++;
    }

    if(newArr.length === 0){
        console.log('Empty');
    }else{
        console.log(newArr.join(' '));
    }
}
addAndRemove(['add', 'add', 'add', 'add'])