var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputtxt = document.querySelector("#output");

var url = "	https://api.funtranslations.com/translate/minion.json"

function generateURL(txt){
    return translateURL = url + "?" + "text=" +txt;
}

function clickEventHandeler (){
    inputText =txtInput.value;
    fetch(generateURL(inputText))
    .then(function responseHandeler(response) {return response.json()})
    .then(function logJSON(json) {outputtxt.value =json.contents.translated; console.log(json)})
}

btnTranslate.addEventListener("click", clickEventHandeler)