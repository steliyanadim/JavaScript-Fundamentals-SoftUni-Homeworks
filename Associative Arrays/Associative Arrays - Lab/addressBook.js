function addressBook(data) {
    let adresses = {};
    for (let person of data) {
        let [name, adress] = person.split(':');
        adresses[name] = adress;
    }
    let entr = Object.entries(adresses)
    entr = entr.sort(([nameA, adressA], [nameB, adressB]) => nameA.localeCompare(nameB));
    for (let [name, adress] of entr) {
        console.log(`${name} -> ${adress}`);
    }
}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)