var edad = 30
//incrementar un valor de las siguientes formas:
//edad = edad +1
edad += 1
console.log(edad)


var peso = 78
//peso -= 2
console.log(peso)

var jugarFucho = 3
peso = peso - jugarFucho;
console.log(peso)

//DECIMALES
//La manera de almacenar decimales no estan precisa, para relver esto usamos 
//Math.round()  funciona sin importar el numero de decomales que haya.
var precioVino = 200.3
var total = Math.round(precioVino * 100 * 3)  / 100
console.log(total);

var totalStr = total.toFixed(2) //pasar a dos decimales 
console.log(totalStr)
var totalFlo = parseFloat(totalStr) //pasar de cadena a float
console.log(totalFlo)