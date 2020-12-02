console.log("hello");

var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#txt-input");

var textOutput = document.querySelector("#txt-output");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

btnTranslate.addEventListener("click", () => {
    var url2 = url + "?text=" + textInput.value;
    console.log(url2); 
    fetch(url2).then((res) => res.json()).then((res) => {
        console.log(res);
        textOutput.value = res.contents.text;
    }) 
})