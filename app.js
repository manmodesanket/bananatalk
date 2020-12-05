var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#txt-input");

var textOutput = document.querySelector("#txt-output");

var url = "https://api.funtranslations.com/translate/minion.json";

var errorHandler = (err) => {
    console.log("ERROR OCCURED");
    alert("Error " + err);
}

btnTranslate.addEventListener("click", () => {
    var url2 = url + "?text=" + textInput.value;
    console.log(url2); 
    fetch(url2).then((res) => res.json()).then((res) => {
        console.log(res);
        textOutput.value = res.contents.translated;
    })
    .catch(errorHandler)
})