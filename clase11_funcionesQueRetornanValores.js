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
 
const MAYORIA_DE_EDAD = 18 		//Queda dentro del scope global  ::scope es el alcance que se tiene de las variables en una funcion

function esMayorDeEdad(persona) {
 return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayor(persona) {
	if(esMayorDeEdad(persona)) {
		console.log(`${persona.nombre} es mayor de edad`)
	} else { 
		console.log(`${persona.nombre} es menor de edad`)
	}
}

imprimirSiEsMayor(persona)

