const buttonCrypt = document.getElementById('buttonCrypt');
const buttonDcrypt = document.getElementById('buttonDcrypt');



buttonCrypt.onclick = function (e) {
    e.preventDefault ();
    let msgCryptografa;

    const inputField = document.getElementById('textCrypt');
    const textoEncr = inputField.value;
    textoEncr = textoEncr.split("");

    let msgCryptografaArr = [];

    for (let i = 0; i < msgCryptografaArr.length; i++) {
        let letra;
        switch(msgCryptografaArr[i]){
            case "a":
                letra = "ai";
                break;
            case "e":
                letra = "enter";
                break;
            case "i":
                letra = "imes";
                break;
            case "o":
                letra = "ober";
                break;
            case "u":
                letra = "ufat";
                break;
            default:
                letra = msgCryptografaArr[i];
                break;
        }
        msgCryptografaArr.push(letter);
    }
    msgCryptografa = msgCryptografaArr.join("");
    return msgCryptografa;
}


buttonDcrypt.onclick = function (e) {
    e.preventDefault ();
    let msgDcryptografa;

    const inputField = document.getElementById('textCrypt');
    const textoEncr = inputField.value;
    textoEncr = textoEncr.split("");

    let msgDcryptografaArr = [];

    for (let i = 0; i < msgDcryptografaArr.length; i++) {
        let letra;
        switch(msgDcryptografaArr[i]){
            case "a":
                letra = "ai";
                break;
            case "e":
                letra = "enter";
                break;
            case "i":
                letra = "imes";
                break;
            case "o":
                letra = "ober";
                break;
            case "u":
                letra = "ufat";
                break;
            default:
                letra = msgDcryptografaArr[i];
                break;
        }
        msgDcryptografaArr.push(letter);
    }
    msgDcryptografa = msgDcryptografaArr.join("");
    return msgDcryptografa
}