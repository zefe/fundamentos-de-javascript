// En esta clase aprenderemos como filtrar los arrays. 
// Para filtrar siempre necesitamos establecer una condición. 
// En este ejemplo nuestra condición es que la estatura de las personas sea mayor de 1.80mts.
// El método filter ( ) crea una nueva matriz con todos los elementos que pasan la prueba
// implementada por la función proporcionada. Recuerda que si no hay elementos que pasen la prueba,
// filter devuelve un array vacío.

//Para filtrar se necesita un array y una condicon. Recuerda que si no hay elementos que pasen la prueba,
// filter devuelve un array vacío.

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
 
const esAlta = ({ estatura }) => estatura > 1.8  //desglosando a la persona

var personas = [ paula, juan, esteban, sofia ]
//filter crea un nuevo arreglo
var personasAltas = personas.filter(esAlta)
//Otra opcion es usando una funcion anonima dentro de filter
// var personasAltas = personas.filter(function (persona) {
// 	return persona.estatura > 1.8
// })

console.log(personasAltas)

