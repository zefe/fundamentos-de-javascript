let contador = 0

const llueve = () => Math.random() < 0.25

do {
	// contador += 1
	contador++
} while (!llueve())

if(contador === 1){
console.log(`Fui a ver si llovia ${contador} vez`)
}else{console.log(`Fui a ver si llovia ${contador} veces`)}

let frecuencia = contador===1 ? "vez":"veces"; // operador ternario, si es true hace lo que esta despues de la ?, y si es false, hace cómo un else ejecutando lo que viene detras de :
console.log(`Fui a ver si llovia ${contador} ${frecuencia}`)

