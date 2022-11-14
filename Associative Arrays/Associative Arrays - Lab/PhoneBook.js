function phoneBook(data) {
    let phonebook = {};

    for (let entry of data) {
        let [name, number] = entry.split(' ')
        phonebook[name] = number;
    }
    for(let person in phonebook){
        console.log(`${person} -> ${phonebook[person]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)