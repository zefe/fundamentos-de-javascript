var sofia = {
	nombre: 'Sofia',
	apelldo: 'Lifszyc',
	edad: 16,
	peso: 55
}

console.log(`Al inicio del año ${sofia.nombre} pesa ${sofia.peso} kg`)

const INCREMENTO_PESO = 0.4
const DIAS_DEL_ANO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.75			//el 30% del tiempo come mucho
const realizaDeporte = () => Math.random() < 1		//el 40% del tiempo hace deporte

const META = sofia.peso - 3
var dias = 0

while (sofia.peso > META) {
	if (comeMucho()) {
		//aumentar de peso
		aumentarDePeso(sofia)
	}
	if (realizaDeporte()) {
		//adelgazar
		adelgazar(sofia)
	}
	dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${sofia.nombre} adelgazó 3kg`)