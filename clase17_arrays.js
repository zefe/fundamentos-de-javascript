//Los arrays son estructuras que nos permiten organizar elementos dentro de una collección.
// Estos elementos pueden ser números, strings, booleanos, objetos, etc.

var paula = {
	nombre: 'Paula',
	apellido: 'Becerra',
	estatura: 1.56
}

var juan = {
	nombre: 'Juan',
	apellido: 'Garcia',
	estatura: 1.80
}

var esteban = {
	nombre: 'Esteban',
	apellido: 'Loera',
	estatura: 1.60
}

var personas = [
	paula,
	juan,
	esteban
]

for (var i=0; i <personas.length; i++) {
	var persona = personas[i]
	console.log(`${persona.nombre} mide ${persona.estatura} mts`)
}