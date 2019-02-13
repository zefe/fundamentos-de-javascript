//Comparando numeros Primitivos

var x = 4
var y = '4'

console.log(x == y)  // == lleva los 2 valores que comparamos a un mismo tipo
					// regresa true por que el numero lo comvierte a cadena '4' == '4' TRUE
					//Aplica para tipos de datos PRIMITIVOS Boolean string, number, null


console.log(x === y) // === respeta el tipo de dato de cada variable que estamos comparando 4 === '4' FALSE
						//RECOMENDADO A UTILIZAR


//Comparando objetos

var zefe = {		// obj1 Diferente posicion en memoria
	nombre: 'Zefe'
}

var otraPersona = {  // obj2 Es diferente posicion en la memaria
	nombre: 'Juan'
}

var otraPersona = {  //obj3 Ocupa la misma posision en memoria si cambia obj1 cambia obj3
	...Zefe				//creando objeto literal - nuevo obj
}

console.log(zefe == otraPersona)

console.log(zefe === otraPersona)