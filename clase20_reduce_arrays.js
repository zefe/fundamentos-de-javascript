// El método reduce() nos permite reducir, mediante una función que se aplica a cada uno de los elemento del array, todos los elementos de dicho array, a un valor único.

var paula = {
	nombre: 'Paula',
	apellido: 'Becerra',
	estatura: 1.56,
	cantidadDeLibros: 111
}

var juan = {
	nombre: 'Juan',
	apellido: 'Garcia',
	estatura: 1.85,
	cantidadDeLibros: 50
}

var esteban = {
	nombre: 'Esteban',
	apellido: 'Loera',
	estatura: 1.60,
	cantidadDeLibros: 80
}

var sofia = {
	nombre: 'Sofia',
	apellido: 'Liftsc',
	estatura: 1.90,
	cantidadDeLibros: 200
}

var personas = [ paula, juan, esteban, sofia ]

// let acum = 0

// for (var i = 0; i < personas.length; i++) {
// 	acum = acum + personas[i].cantidadDeLibros
// }

//otra forma de hacerlo
//arreglo.reduce(funcion, valor_inicial_acumulador)
const reducer = (acum, persona) => {
	return acum + persona.cantidadDeLibros
}

//arow funccion desglosando el objecto
const reducer2 = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)
var totalDeLibros2 = personas.reduce(reducer2, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)
console.log(`En total todos tienen ${totalDeLibros2} libros | con arrowfunction`)

