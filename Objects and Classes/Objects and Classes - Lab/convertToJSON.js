function convertToJSON(name, lastName, hairColor) {
let personInfo = {
    name,
    lastName,
    hairColor,
}
let jsonFormat = JSON.stringify(personInfo)

console.log(jsonFormat);
}
convertToJSON('George', 'Jones', 'Brown')