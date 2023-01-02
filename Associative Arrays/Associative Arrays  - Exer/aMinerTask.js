function aMinerTask(input) {
    let inputLength = input.length;
    let resources = {};
    for (let i = 0; i < inputLength; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1])
        if(!resources.hasOwnProperty(resource)){
            resources[resource] = quantity;
        }else{
            resources[resource] += quantity;
        }
    }
    for(let material in resources){
        console.log(`${material} -> ${resources[material]}`);
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )