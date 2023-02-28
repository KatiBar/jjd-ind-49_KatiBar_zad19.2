function comparePasswords() {
    var password1 = document.getElementById("psw");
    var length = document.getElementById("length");
    var bigLetter = document.getElementById("bigLetter");
    var smallLetter = document.getElementById("smallLetter");
    var sign = document.getElementById("sign");

    var passwordToCompare = document.getElementById("psw2");
    var orDifferent = document.getElementById("comparison");

// Gdy Input jest aktywny, pojawia się tabela wiadomości z brakującym znakiem
    password1.onfocus = function() {
        document.getElementById("message").style.display = "table-row";
    }

// Porównywanie po wpisaniu każdego kolejnego znaku
    password1.onkeyup = function() {

        // Sprawdź, czy zgadza się długość
        if(password1.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("checked");
        } else {
            length.classList.remove("checked");
            length.classList.add("invalid");
        }

        // Sprawdź, czy jest mała litera
        var lowerCaseLetters = /[a-z]/;
        if(password1.value.match(lowerCaseLetters)) {
            smallLetter.classList.remove("invalid");
            smallLetter.classList.add("checked");
        } else {
            smallLetter.classList.remove("checked");
            smallLetter.classList.add("invalid");
        }

        // Sprawdź, czy jest duża litera
        var upperCaseLetters = /[A-Z]/;
        if(password1.value.match(upperCaseLetters)) {
            bigLetter.classList.remove("invalid");
            bigLetter.classList.add("checked");
        } else {
            bigLetter.classList.remove("checked");
            bigLetter.classList.add("invalid");
        }

        // Sprawdź, czy jest znak specjalny
        var signs = /[●!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
        if(password1.value.match(signs)) {
            sign.classList.remove("invalid");
            sign.classList.add("checked");
        } else {
            sign.classList.remove("checked");
            sign.classList.add("invalid");
        }
    }

    // Gdy Input jest aktywny, pojawia się tabela wiadomości z wynikiem porównania
    passwordToCompare.onfocus = function() {
        document.getElementById("messageAfterComparison").style.display = "table-row";
    }

    // Porównywanie po wpisaniu każdego kolejnego znaku
    passwordToCompare.onkeyup = function() {

        // Sprawdź, czy hasła są takie same
        if(password1.value === passwordToCompare.value) {
            orDifferent.classList.remove("invalid");
            orDifferent.classList.add("checked");
        } else {
            orDifferent.classList.remove("checked");
            orDifferent.classList.add("invalid");
        }
    }
}

comparePasswords();