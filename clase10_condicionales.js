var persona = {
	nombre: 'zefe',
	apellido: 'torres',
	edad: 30,
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
}

function imprimirProfesiones(persona) {
		console.log(`${persona.nombre} es: `)

		if(persona.ingeniero){
			console.log('Ingeniero')
		}

		if(persona.cocinero) {
			console.log('Cocinero')
		} else {
			console.log('No es cocinero')
		}

		if(persona.edad >= 18) {
			console.log(`${persona.nombre} es mayor de edad`)
		} else { console.log(`${persona.nombre} es menor de edad`) }
}

imprimirProfesiones(persona)