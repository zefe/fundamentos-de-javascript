var nombre = 'zEfe'

function imprimirNombreEnMayusculas() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

function imprimirNombreEnMayusculas1(n) {
    n = n.toLowerCase()
    console.log(n)
}

function imprimirNombreEnMayusculas2(nombre){
	nombre = nombre.toUpperCase()
    console.log(nombre)
}


imprimirNombreEnMayusculas() //Al hacer referencia directa a una variable global dentro de una funcion, podermos modificar su valor, esto se le denomina sideEfect, y esto lo vamos a querer evitar.
imprimirNombreEnMayusculas1(nombre)
imprimirNombreEnMayusculas2(nombre)