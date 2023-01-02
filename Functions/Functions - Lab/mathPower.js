function mathPower(number, power) {
    let res = 1;
    for(let i = 0; i < power; i++){
        res *= number;
    }
    console.log(res);
}
mathPower(2,8)