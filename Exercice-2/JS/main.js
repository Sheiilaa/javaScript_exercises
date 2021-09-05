'use strict';

// Utilizando un bucle, mostrar la suma y la media de los numeros intruducidos
// hasta introducir un numero negativo y ahí mostrar el resultado


let suma = 0;
let contador = 0;
let numero=0;

//para hacerlo usaremos el bucle do while

do {
  numero = parseInt(prompt("introduce  numeros hasta que metas uno negativo", 0));
  //Dentro de este bucle usaremos un condicional para que asi sepa cuando tiene que parar

  if(isNaN(numero)) {
    numero = 0;

  } else if(numero >= 0){
      suma = suma + numero;
    //tambien podria ponerse suma =+ numero

    contador++;
    //El contador es la cantidad de veces que el usuario pone un número
  }

console.log(` La suma es:${suma}`);
console.log(`cuantas veces has dicho numero ${contador}`);

} while(numero>=0);
//Para mostrar los resultados lo haremos de dos maneras:
//1)Lo mostraremos con un document.write y asi se mostrará en el HTML
document.write(`<h2>La suma es ${suma}<h2>`);
document.write(`<h2>La media es ${suma/contador} <h2>`);

//2)Lo mostraremos con un alert
alert("La suma de los numeros es: "+suma);
alert("la media de los numeros es: "+(suma/contador));
//RECUERDA!! La media de los numeros sera la suma de estos  dividido entre el contador 
