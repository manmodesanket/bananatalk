console.log("hello");

var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#txt-input");

var textOutput = document.querySelector("#txt-output");

btnTranslate.addEventListener("click", () => {
    textOutput.value = textInput.value; 
})