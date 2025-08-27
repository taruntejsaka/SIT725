if (typeof require !== "undefined") {
    var { isAdult } = require('./ageValidator.js');
}

function checkAge() {
    const age = parseInt(document.getElementById('age').value);
    const result = document.getElementById('result');

    try {
        if (isAdult(age)) {
            result.innerText = "You are an adult.";
        } else {
            result.innerText = "You are not an adult.";
        }
    } catch (error) {
        result.innerText = `Error: ${error.message}`;
    }
}
