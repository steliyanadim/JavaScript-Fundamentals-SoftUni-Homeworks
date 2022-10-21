function movingTarget(input) {
    let targets = input[0].split(' ').map(Number);

    function shootCommand(index, power) {
        if (index >= 0 && index < targets.length) {
            targets[index] -= power;
            if (targets[index] <= 0) {
                targets.splice(index, 1)
            };
        }
    }
    function strikeCommand(index, radius) {
        if (index >= 0 && index < targets.length) {
            let startIndex = index - radius;
            let lastIndex = startIndex + radius * 2;
            let elementToDelete = (radius * 2) + 1;

            if ((startIndex >= 0 && startIndex < targets.length) &&
                (lastIndex < targets.length)) {
                targets.splice(startIndex, elementToDelete);
            } else {
                console.log('Strike missed!');
            }
        }
    }

    function addCommand(index, value) {
        if (index >= 0 && index < targets.length) {
            targets.splice(index, 0, value);
        } else {
            console.log("Invalid placement!")
        }
    }

    for (let i = 1; i < input.length; i++) {
        if (input[i] === 'End') {
            break;
        }
        let currentLine = input[i].split(' ');
        let command = currentLine[0];
        let index = Number(currentLine[1]);
        let value = Number(currentLine[2]);
        switch (command) {
            case 'Shoot': shootCommand(index, value); break;
            case 'Strike': strikeCommand(index, value); break;
            case 'Add': addCommand(index, value); break;
        }
    }
    console.log(targets.join('|'));
}
movingTarget(["10 20 30 40 50",
    "Shoot 12 10",
    "End"])