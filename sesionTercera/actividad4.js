let number = parseFloat(prompt('Ingrese un número'));

let operacion = number % 2;

if (operacion === 0) {
    alert(' El ' + number + ' es par.');
} else {
    alert(' El ' + number + ' es impar.');
}