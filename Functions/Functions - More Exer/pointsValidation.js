function pointsValidation(points) {
    let x1 = points[0];
    let x2 = points[2];
    let y1 = points[1];
    let y2 = points[3];

    let firstCheck = firstPoint();
    let secondCheck = secondPoint();
    let thirdCheck = thirdPoint();

    if (firstCheck % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (secondCheck % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (thirdCheck % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function firstPoint() {
        let firstDistance = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return firstDistance;
    }

    function secondPoint() {
        let secondDistance = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return secondDistance;
    }

    function thirdPoint(){
        let thirdDistance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return thirdDistance;
    }
}
pointsValidation([2, 1, 1, 1])