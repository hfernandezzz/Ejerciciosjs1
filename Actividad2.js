const pregunta = require("prompt-sync")({ sigint: true })

const nota = pregunta("¿Cual es tu nota?")

if (nota >= 0 && nota <= 3) {
    console.log("Muy deficiente")
} else if (nota >= 3 && nota <= 5) {
    console.log("Insuficiente")
} else if (nota >= 5 && nota <= 6) {
    console.log("Suficiente")
} else if (nota >= 6 && nota <= 7) {
    console.log("Bien")
} else if (nota >= 7 && nota <= 9) {
    console.log("Notable")
} else if (nota >= 9 && nota <= 10) {
    console.log("Sobresaliente")
}