/** Manipulando DOM */


var btnCrypt = document.getElementById('buttonCrypt');
var btnDcrypt = document.getElementById('buttonDcrypt');

var textResolvido = document.getElementById('textSolucao');
var inputField = document.getElementById('textCrypt') ;


/*~\/~ Função dos botões ~\/~ */

function cripto () {
    var msgCryptografa;
    if (!(inputField.value === '')){
    var textoEncr = inputField.value;
    textoEncr = textoEncr.split("");

    var msgCryptografaArr = [];

    for (var i = 0; i < textoEncr.length; i++) {
        var letra;
        switch(textoEncr[i]){
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
        msgCryptografaArr.push(letra);
    }
}
    msgCryptografa = msgCryptografaArr.join("");
    textResolvido.value = msgCryptografa;
}


function decripto () {
    if (!(inputField.value === '')){
    var textoDencr = inputField.value;
    var caso = textoDencr.replaceAll ("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
    }
   textResolvido.value = caso.toLowerCase();
}


btnCrypt.onclick = cripto;
btnDcrypt.onclick = decripto;