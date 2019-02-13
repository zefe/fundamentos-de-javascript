var nombre = 'Zefe', apellido = 'Torres'

var nombreMayusculas = nombre.toUpperCase()
console.log(nombre)
console.log(nombreMayusculas)

var apellidoMinusculas = apellido.toLowerCase()
console.log(apellido)
console.log(apellidoMinusculas)

var primeraLetraNombre = nombre.charAt(0)
console.log(primeraLetraNombre)

var cantidadeDeLetrasNombre = nombre.length  //length es un atributo
console.log(cantidadeDeLetrasNombre)

//Concatenar cadenas
console.log("Hello " + nombre + " " + apellido)

//Usando INTERPOLACION	
console.log(`Hello ${nombre}  ${apellido}`)

//Acceder a los caracteres de una cadena especificando apartir de que posicion queremos que empuece
// y el nuemero de caracteres que queremos tomar
var str = nombre.substr(1, 2);
console.log(str)