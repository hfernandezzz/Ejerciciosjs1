const pregunta = require("prompt-sync")({ sigint: true })

let numInput = pregunta("Introduce un número: ")

let suma = 0;

let orden = 0;


while (numInput !== "Cancelar") {

    if (Number(numInput)) {
        suma = suma + Number(numInput)
        orden++
        numInput = pregunta("(" + orden + ")Introduce otro número. ")
    } else {

        console.log("Eso no es un número")
        numInput = pregunta("(" + orden + ")Introduce otro número. ")

    }
}
console.log("La suma de los números es: ", suma)



