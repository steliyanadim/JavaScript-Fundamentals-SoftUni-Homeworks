function passwordValidator(password) {
    let ValidPassword = true;
    let validChar = true;
    let digitsCounter = 0;

    for (let char of password) {
        let currentChar = char.charCodeAt(0);
        if (currentChar >= 0 && currentChar <= 47 ||
            currentChar >= 58 && currentChar <= 64 ||
            currentChar >= 91 && currentChar <= 96 ||
            currentChar >= 123 && currentChar <= 127) {
            validChar = false;
        }
        if (currentChar >= 48 && currentChar <= 57) {
            digitsCounter++;
        }
    }

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        ValidPassword = false;
    }

    if (!validChar) {
        console.log('Password must consist only of letters and digits');
        ValidPassword = false;
    }

    if (digitsCounter < 2) {
        console.log('Password must have at least 2 digits');
        ValidPassword = false;
    }

    if (ValidPassword) {
        console.log('Password is valid');
    }
}
passwordValidator('Pa$s$s')