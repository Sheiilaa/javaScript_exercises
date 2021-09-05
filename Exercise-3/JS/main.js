'use strict';
// Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario

let numero1= parseInt(prompt("introduce el primer numero", 0));
let numero2= parseInt(prompt("introduce el segundo numero", 0));

console.log(numero1);
console.log(numero2);

//Haremos un document.write el cual nos permite escribir en el body del la pagina, y asi el resultado aparecerá ahi en vez de en la consola.

document.write("<h1>DEL NUMERO "+numero1+" Al NUMERO "+ numero2+" HAY ESTOS NUMEROS:</h1> ")

//Por último haremos un bucle for
for (let i = numero1; i <= numero2; i++) {
    //El resultado lo pondremos también por consola
document.write(i+"<br/>");
}
