function commonElements(firstArr, secoundArr){

for(let el of firstArr){
    if(secoundArr.includes(el)){
        console.log(el);
    }
}
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])