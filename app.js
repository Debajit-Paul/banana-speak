var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputtxt = document.querySelector("#output");


function clickEventHandeler (){
    outputtxt.value =txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandeler)