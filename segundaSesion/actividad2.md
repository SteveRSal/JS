## Cuestionario de Coercion
#### Nombre: Steven Ramirez Salgado
​
1. Qué retona la siguiente expresión?
```
var sum = 3 + 2
console.log(sum)
```
​
> se resuelve la operación 
​
> 5
​
2. Qué retona la siguiente expresión?
```
typeof(3)
```
​
> es considerado un numero ya que el string no se expresa por el ""
​
> number
​
3. Qué retona la siguiente expresión?
```
typeof(3) === typeof("3")
```
​
> al querer demostrar la igualdad de estos, typeamos  === buscando que sea igual en los dos sentidos, en su tipo y en su valor, al estar englobado el segundo typeof, se considera un string por las comillas ""
​
> false
​
4. Qué retona la siguiente expresión?
```
5 / 0
```
​
> deberia dar NaN, matematicamente no existe el infinito cuando un denominador esta dividiendose en 0, por lo cual haciendo una linea, no tenemos un valor en el cero, por lo cual JS lo interpreta como si fuera una simple x
​
> infnity 
​
5. Qué retona la siguiente expresión?
```
3 / "bob"
```
​
> En este caso no existe alguna interpretacion razonable, por lo cual se expresa el NaN
​
> NaN
​
6. Qué retona la siguiente expresión?
```
NaN === NaN
```
​
> true
​
> false
​
7. Qué retona la siguiente expresión?
```
typeof(NaN)
```
​
> number
​
> number
​
8. Cual es el valor de la siguiente expresion?
```
var hello
```
​
> undefined
​
> undefined
​
9. Qué retona la siguiente expresión?
```
"some" + " person"
```
​
> concatenan
​
> some person
​
10. Qué retona la siguiente expresión?
```
var sport; 
sport === undefined
```
​
> undefined
​
> true