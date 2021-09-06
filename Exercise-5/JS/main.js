'use strict';

"use strict"
//Muestra todos los numeros divisores de un numero introducido por el usuario

 let numero= parseInt(prompt("introduce aqui tu numero", 1));
 console.log(`el numero elegido es ${numero}`)

 for (let i = 1; i <= numero; i++) {

if (numero % i == 0) {
    
  console.log("Sus divisores son:" + i);
}

 }
