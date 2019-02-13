// Cómo transformar un array. 
// El método map() itera sobre los elementos de un array en el orden de inserción
// y devuelve array nuevo con los elementos modificados.

var paula = {
	nombre: 'Paula',
	apellido: 'Becerra',
	estatura: 1.56
}

var juan = {
	nombre: 'Juan',
	apellido: 'Garcia',
	estatura: 1.85
}

var esteban = {
	nombre: 'Esteban',
	apellido: 'Loera',
	estatura: 1.60
}

var sofia = {
	nombre: 'Sofia',
	apellido: 'Liftsc',
	estatura: 1.90
}

//AQUI MODIFICAMOS LAS PROPIEDADES EL OBJETO PERSONA 

// const pasarAlturaACms = (persona) => {
// 	// persona.estatura = persona.estatura * 100
// 	persona.estatura *= 100
// 	return persona
// }

//AQUI CREAMOS UN NUEVO OPBJETO que nada tiene que ver con la persona que estaba en el array orginal
//PARA NO MODIFICAR NINGUN ATRIBUTO 
const pasarAlturaACms = (persona) => {
	return {
		...persona,
		estatura: persona.estatura * 100
	}
}

//arrow
// const pasarAlturaACms = (persona) => ({
// 		...persona,
// 		estatura: persona.estatura * 100
// 	})

var personas = [ paula, juan, esteban, sofia ]

var personaCms = personas.map(pasarAlturaACms)



console.log(personaCms)
console.log('array original: ')
console.log(personas)
