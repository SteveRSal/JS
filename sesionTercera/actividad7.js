let primernumero = Number(prompt('Ingrese el primer número'));
let segundonumero = Number(prompt('Ingrese el segundo número'));
let tercernumero = Number(prompt('Ingrese el tercer número'));


if (primernumero > segundonumero & tercernumero < segundonumero) {
    alert('El primer número es el mayor')
} else if (segundonumero > primernumero & tercernumero < segundonumero) {
    alert('El segundo número es el mayor')
} else if (tercernumero>  segundonumero && primernumero  < segundonumero){
    alert('El tercer número es el mayor')

}else if(segundonumero == tercernumero && primernumero > segundonumero){
    alert('El primer número es el mayor')
}else if(primernumero == tercernumero && segundonumero > primernumero){
    alert('El segundo número es el mayor')
}else if(primernumero === segundonumero & tercernumero > primernumero){
    alert('El tercer número es el mayor')

}else if(primernumero === segundonumero && primernumero  tercernumero){
    alert('El primer y segundo número son iguales y son mayores al tercero')
}else if(segundonumero == tercernumero && segundonumero > primernumero){
    alert('El segundo y tercer número son iguales y son mayores al primero')
}else if(primernumero === tercernumero && primernumero > segundonumero){
    alert('El primer y tercer número son iguales y son mayores al segundo')
}else if(primernumero === segundonumero && primernumero == tercernumero){
    alert('Los tres números son iguales')
}else{
    alert('Se ingresaron datos erroneos')
}
 