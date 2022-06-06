let primernumero = parseFloat(prompt('Ingrese el primer número'));
let segundonumero = parseFloat(prompt('Ingrese el segundo número'));


if (primernumero > segundonumero) {
    alert('El primer número es mayor que el segundo.')
}else if(segundonumero > primernumero) {
    alert('El segundo número es mayor que el primero.')
}else if(primernumero === segundonumero){
    alert('Los numeros son iguales')
}else {
    alert('Ingreso datos erroneos')
}
if (primernumero > segundonumero) {
    alert('El primer número es mayor que el segundo.')
} else {
    alert('El segundo número es mayor que el primero.')
}