// Las clases son funciones cuya sintaxis tiene dos componentes:

// expresiones
// declaraciones

// Dentro de una función, el valor de this depende de cómo es llamada ésta.

// Objetos en js = prototipos y no tanto de clases

// class en js no son clases como en otros lenguajes que tienen herencia, en js terminan siendo prototipos

// Para definir un prototipo  lo unico que va poder hacer es definir una funcion

//PROTOTIPO
// function persona(parametros que va a requerir crear una nueva persona) {
// 	//esta funcion es la que se va a ejecutar cada que se quiera crear una nueva perosna
// 	//Es como el constructor
// }

function Persona(nombre, apellido, estatura) {
	this.nombre = nombre
	this.apellido = apellido
	this.estatura = estatura
}

Persona.prototype.saludar = function() {
	console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esAlta = function() {
	if(this.estatura > 1.8 ){
		console.log(`${this.nombre} ${this.apellido} es una persona alta`)
	}
}


var zefe = new Persona('zefe', 'torres', 1.9) //new crea un nuevo objeto con el prototipo Persona()
						// y ese objeto se hace referencia con la palabra this
var juan = new Persona('Juan', 'Flores', 1.6)

var luis = new Persona('Luis', 'Osorio', 1.9)


zefe.saludar()
juan.saludar()
luis.saludar()

zefe.esAlta()
juan.esAlta()
luis.esAlta()