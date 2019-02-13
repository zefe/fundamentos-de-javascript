var persona = {
	name: 'zefe',
	edad: 30,
	status: 'active'
	//key: value
}

//Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. 
//Para solucionar esto se puede crear un objeto diferente.

//El objeto que pasamos como parametro, se pasan por referencia lo que significa que si los
//modificamos dentro de una funcion su valor se ve modificado fuera de esa funcion
//SOLUCION: Devolver un nuevo objeto copiando todo lo que tenia el onjeto anterior {...objeto}
function cumple(persona) {
	return () {
		...persona,
		edad: persona.edad + 1
	}
	console.log(persona)
}


cumple(persona)