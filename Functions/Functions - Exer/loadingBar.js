function loadingBar(num) {
    let percentChar = '%';
    let dotChar = '.';

    if (num === 100) {
        console.log('100% Complete!');
        console.log(`[${percentChar.repeat(num / 10)}]`)
    } else {
        console.log(`${num}% [${(percentChar.repeat(num / 10)) + (dotChar.repeat(10 - (num / 10)))}]`);
        console.log('Still loading...');
    }
}
loadingBar(0)