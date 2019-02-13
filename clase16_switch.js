var signo = prompt('Cual es tu signo ?')

// if (signo === 'acuario') {
// 	console.log('A pesar de que pueden adaptarse fácilmente a la energía que los rodea, Acuario tiene una profunda necesidad de tener tiempo a solas y alejarse de todo para recargar energías. Las personas nacidas bajo este signo ven al mundo como un lugar lleno de posibilidades.')
// }
// if (signo === 'piscis') {
// 	console.log('A pesar de que pueden adaptarse fácilmente a la energía que los rodea, Acuario tiene una profunda necesidad de tener tiempo a solas y alejarse de todo para recargar energías. Las personas nacidas bajo este signo ven al mundo como un lugar lleno de posibilidades.')
// }
// if (signo === 'acuario') {
// 	console.log('A pesar de que pueden adaptarse fácilmente a la energía que los rodea, Acuario tiene una profunda necesidad de tener tiempo a solas y alejarse de todo para recargar energías. Las personas nacidas bajo este signo ven al mundo como un lugar lleno de posibilidades.')
// }
// if (signo === 'piscis') {
// 	console.log('A pesar de que pueden adaptarse fácilmente a la energía que los rodea, Acuario tiene una profunda necesidad de tener tiempo a solas y alejarse de todo para recargar energías. Las personas nacidas bajo este signo ven al mundo como un lugar lleno de posibilidades.')
// }

//Cuando tenemos muchos "if" de acuerdo a una variable "signo" donde siempre estamos comparando esa variabale usamos "switch"

switch (signo) {
	case 'acuario':
	console.log('Acuari es ....')
	break
	case 'libra':
	console.log('Libra es ....')
	break
	case 'piscis':
	console.log('piscis es ....')
	break
	case 'leo':
	console.log('leo es ....')
	break
	case 'geminis':
	case 'géminis'
	console.log('géminis es ....')
	break
	default:
	console.log('No es un signo zodiacal valido')
	break
}
