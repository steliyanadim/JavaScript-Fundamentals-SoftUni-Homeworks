function arenaTier(input) {
    let currentLine = input.shift()
    let arena = {};
    let currentSkill = {}

    while (currentLine !== 'Ave Cesar') {

        if (currentLine.includes(' -> ')) {
            add(currentLine)

        } else if (currentLine.includes(' vs ')) {
            battle(currentLine)
        }

        currentLine = input.shift()
    }

    let entries = Object.entries(arena);
    let arenaArr = []
    for(let element of entries){
        let name = element[0];
        let power = Object.entries(element[1]);
        let sum = 0;
        for (let curPower of power) {
                    sum += curPower[1]
                }
                arenaArr.push([name, power, sum])
        
    }

    let sorted = arenaArr.sort(([nameA, powerA, sumA],[nameB, powerB, sumB]) => sumB - sumA || nameA.localeCompare(nameB))
    for(let gladiator of sorted){
        console.log(`${gladiator[0]}: ${gladiator[2]} skill`);
        let sortedTechnics = gladiator[1].sort(([technicA, skillA],[technicB, skillB]) => skillB - skillA || technicA.localeCompare(technicB))
        for(let technic of sortedTechnics){
            console.log(`- ${technic[0]} <!> ${technic[1]}`);
        }
    }

    function add(currentLine) {
        let [gladiator, technique, skill] = currentLine.split(' -> ');
        skill = Number(skill)

        if (!arena.hasOwnProperty(gladiator)) {
            arena[gladiator] = {}
            arena[gladiator][technique] = skill;

        } else {
            if (arena[gladiator].hasOwnProperty(technique)) {
                if (arena[gladiator][technique] < skill) {
                    arena[gladiator][technique] = skill
                }
            } else {
                arena[gladiator][technique] = skill
            }
        }
    }

    function battle(currentLine) {
        let [firstGladiator, secondGladiator] = currentLine.split(' vs ')

        if (arena.hasOwnProperty(firstGladiator) && arena.hasOwnProperty(secondGladiator)) {

            for (let technic in arena[firstGladiator]) {
                if (arena[secondGladiator].hasOwnProperty(technic)) {
                    if (arena[secondGladiator][technic] > arena[firstGladiator][technic]) {
                        delete arena[firstGladiator]
                    } else if (arena[secondGladiator][technic] < arena[firstGladiator][technic]) {
                        delete arena[secondGladiator]
                    }
                }
            }
        }
    }
}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]
    )