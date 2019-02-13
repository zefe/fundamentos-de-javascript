var nombre = 'zefe', edad = 80

function imprimirEdad(name, age) {
	console.log(`${name} tiene ${age} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('juan', 20)
imprimirEdad('pablo', 15)

//JS es un lenguaje debilmente tipado y no espera que las cosas siempre esten definidas
// puede ser que no le pasemos algo y js va a tratar de ejecutarlo igual
// podemos pasar,parametros invertidos, o no pasar nada. JS trata de ejecutar el codigo
// Js es un lenguaje interpretado no se fija que las variables sean obligatorias o que tal parametro sea de algun tipo
imprimirEdad(20, 'oye')
imprimirEdad()  //funciona    UNDEFINED tiene UNDEFINED años
imprimirEdad('juaana') //funciona   juana tiene UNDEFINED años