// Arrow Function permiten una nomenclatura mas corta para escribir expresiones de funciones
// No es necesario escribir la palabra function, el return, ni las llaves

var persona = {
	nombre: 'zefe',
	apellido: 'torres',
	edad: 15,
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
}

const MAYORIA_DE_EDAD = 18 		//Queda dentro del scope global  ::scope es el alcance que se tiene de las variables en una funcion

// const esMayorDeEdad = function(persona) { //tenemos una funcion anonima que no tiene nombre, pero la asignamos 
//  return persona.edad >= MAYORIA_DE_EDAD		 // a una variable que si tiene nombre 'esmayordeedad'
// }

//Arrow function
const esMayorDeEdad  = persona => persona.edad >= MAYORIA_DE_EDAD 

//desestructurar	
//const esMayorDeEdad  = ({ edad }) => edad >= MAYORIA_DE_EDAD 

function imprimirSiEsMayor(persona) {
	if(esMayorDeEdad(persona)) {
		console.log(`${persona.nombre} es mayor de edad`)
	} else { 
		console.log(`${persona.nombre} es menor de edad`)
	}
}

function permitirAcceso(persona){
	if(!esMayorDeEdad(persona)){
		console.log('Acceso denegado')
	}
}

imprimirSiEsMayor(persona)
permitirAcceso(persona)