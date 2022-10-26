function guineaPig(input) {
    let quantity = input.slice().map(x => x * 1000);
    let food = quantity.shift();
    let hay = quantity.shift();
    let cover = quantity.shift();
    let puppyWeigth = quantity.shift();
    let notEnough = false;

    for (let i = 1; i <= 30; i++) {
        food -= 300;
        if (i % 2 === 0) {
            hay -= food - (food * 0.95);
        }
        if (i % 3 === 0) {
            cover -= puppyWeigth / 3;
        }

        if (food <= 0 || cover <= 0 || hay <= 0) {
            notEnough = true;
            console.log('Merry must go to the pet store!');
            break;
        }
    }

    if (!notEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }
}
guineaPig((["10",
    "5",
    "5.2",
    "1"])
)