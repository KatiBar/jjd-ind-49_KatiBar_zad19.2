function comparePasswords() {
    const password1 = document.getElementById("psw");
    let length = document.getElementById("length");
    let bigLetter = document.getElementById("bigLetter");
    let smallLetter = document.getElementById("smallLetter");
    let sign = document.getElementById("sign");

    const passwordToCompare = document.getElementById("psw2");
    let orDifferent = document.getElementById("comparison");

    let lowerCaseLetters = /[a-z]/;
    let upperCaseLetters = /[A-Z]/;
    let signs = /[●!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

// Gdy Input jest aktywny, pojawia się tabela wiadomości z brakującym znakiem
    password1.onfocus = function() {
        document.getElementById("message").style.display = "table-row";
    }

    function validate(predicate, element) {
        if(predicate) {
            element.classList.add("checked");
        } else {
            element.classList.remove("checked");
        }
    }

// Porównywanie po wpisaniu każdego kolejnego znaku
    password1.onkeyup = function() {

        // Sprawdź, czy zgadza się długość
        validate(password1.value.length >= 8, length);

        // Sprawdź, czy jest mała litera
        validate(password1.value.match(lowerCaseLetters), smallLetter);

        // Sprawdź, czy jest duża litera
        validate(password1.value.match(upperCaseLetters), bigLetter);

        // Sprawdź, czy jest znak specjalny
        validate(password1.value.match(signs), sign);
    }

    // Gdy Input jest aktywny, pojawia się tabela wiadomości z wynikiem porównania
    passwordToCompare.onfocus = function() {
        document.getElementById("messageAfterComparison").style.display = "table-row";
    }

    // Porównywanie po wpisaniu każdego kolejnego znaku
    passwordToCompare.onkeyup = function() {

        // Sprawdź, czy hasła są takie same
        validate(password1.value === passwordToCompare.value, orDifferent);
    }
}

comparePasswords();