function repeatString(str, n) {
    let newStr = '';
    for(let i = 0; i < n; i++){
        newStr += str;
    }
    return newStr
}
//console.log(repeatString("abc", 3)); 

let repeat = repeatString("abc", 3);
console.log(repeat);