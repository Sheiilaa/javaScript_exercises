'use strict';
//Hacer un programa el cual nos pida dos numeros y nos diga cual es el mayor, cual es el menor o si son iguales

//Primero pediremos por un alert que nos introduzca los números que queremos, para ello hacemos un parseInt
//Se pone parseInt para asi poder operar con el prompt, ya que el prompt solo recoge string
let numero1 = parseInt(prompt("introduce el primer numero", 0));
let numero2 = parseInt(prompt("introduce el segundo numero", 0));

//Haremos un bucle While Por si el usuario escribe un número inferior a 0 o una palabra, le repita los alert, hasta que escriba un numero correcto

//TEORIA: Un bucle while permite repetir la ejecución de un grupo de instrucciones mientras se cumpla una condición (es decir, mientras la condición 
//tenga el valor True). si el resultado es False, el cuerpo del bucle no se ejecuta y continúa la ejecución del resto del programa. Por ello en este caso usamos este tipo de bucle

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("introduce el primer numero", 0));
    numero2 = parseInt(prompt("introduce el segundo numero", 0)); }

    //Mostraremos por consola los números que se han seleccionado
    console.log(numero1, numero2);
    //Para comprobar cual es el mayor y el menor realizaremos un condicional 

    if (numero1 === numero2) {
        alert("los numeros son iguales");

    } else if (numero1 > numero2) {
        alert("el numero mayor es:" + numero1);
        alert("el numero menos es:" + numero2);
    } else if (numero2 > numero1) {
        alert("el numero menor es:" + numero1);
        alert("el numero mayor es:" + numero2);
    } else {
        alert("introduce numeros correctos");
    }


