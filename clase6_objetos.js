var persona = {
	name: 'zefe',
	edad: 30,
	status: 'active'
	//key: value
}

function imprimirDatos(per) {
	var per = per.name.toUpperCase();
	console.log(per);
}

//o podemos acceder solo a algunas propiedades del objeto
function datosPersona({ name, edad }) {
	console.log(name.toLowerCase(), edad)
}

imprimirDatos(persona)
datosPersona(persona)

