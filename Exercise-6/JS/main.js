'use strict';
/*
Un programa que nos diga si un numero es par o impar
Seguir estos pasos:
1. ventana de prompt
2. si no es valido que nos pida de nuevo el numero
*/

var number = parseInt(prompt("INTRODUCE UN NUMERO",0));

while (isNaN(number)) {
  number = parseInt(prompt("INTRODUCE UN NUMERO",0));
}
if (number % 2 ==0) {
  alert("es un numero par");

}else {
  alert("es un numero impar");
}
