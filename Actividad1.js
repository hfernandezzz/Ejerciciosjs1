const pregunta = require("prompt-sync")({ sigint: true })

const nombre = pregunta("¿Cual es tu nombre?")
const edad = pregunta("¿Cual es tu edad?")

if (edad >= 18) {
   console.log("Ya puedes conducir")
} else if (edad < 18) {
   console.log("Todavía no puedes conducir")
}