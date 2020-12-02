console.log("hello");

var btnTranslate = document.querySelector("#btn-translate");

var textArea = document.querySelector("#txt-input");

btnTranslate.addEventListener("click", () => {
    console.log(textArea.value);
})