const pregunta = require("prompt-sync")({ sigint: true })

let textInput = pregunta("Introduce un texto: ")
let orden = 0;
let concatenar = " ";

while (textInput !== "Cancelar") {
    if (Number(textInput)) {
        console.log("Esto no es un texto")
        textInput = pregunta("(" + orden + ")Introduce un texto: ")
    } else {
        textInput = pregunta("(" + orden + ")Introduce un texto: ")
        orden++
        concatenar = concatenar + textInput
    }
}
console.log(concatenar)