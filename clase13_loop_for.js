var sofia = {
	nombre: 'Sofia',
	apelldo: 'Lifszyc',
	edad: 16,
	peso: 65
}

console.log(`Al inicio del año ${sofia.nombre} pesa ${sofia.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = ({ peso }) => peso -= INCREMENTO_PESO

for (let i = 1; i <= DIAS_DEL_AÑO; i++) {
	var random = Math.random() //0... 1   0.0512121212

	if (random < 0.25) {
		//aumenta de peso
		aumentarDePeso(sofia)
	} else if (random < 0.5) {
		//adelgazar
		adelgazar(sofia)
	}

}

console.log(`Al final del año ${sofia.nombre} pesa ${sofia.peso.toFixed(2)} kg`)