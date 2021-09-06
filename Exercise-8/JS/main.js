'use strict'
/*
Hacer una calculadora:
1.Pida dos numeros por pantalla
2.Si metemos uno mal que nos los vuelva a pedir
3. En el cuerpo de la pagina, en una alerta y por la consola
poner el resultado de sumar, restar, multiplicar y dividir esas dos cifras.
*/

let numero1 = parseInt(prompt("pon el primer numero", 0));
let numero2 = parseInt(prompt("pon el segundo numero", 0));

while (numero1<0 || isNaN(numero1 )) {
  numero1 = parseInt(prompt("pon un primer numero", 0));
}
while (numero1<0 || isNaN(numero2)) {
  numero2 = parseInt(prompt("pon el segundo numero", 0));
}
 /*
el bucle while tambien podria hacerse de esta manera:
while(numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){
numero1= parseInt(prompt("introdce el primer numero", 0));
numero2 = parseInt (prompt("introduce el segundo numero", 0));
}
 */

 let resultado = "la suma es: " + (numero1+numero2)+ "<br/>"+
                 "la resta es: "+ (numero1-numero2)+ "<br/>"+
                 "la multiplicacion es: "+ (numero1*numero2)+ "<br/>"+
                 "la división es: "+ (numero1/numero2)+ "<br/>";
     document.write(resultado);
//Para la alerta y la consola, tenemos que cambiar el <br/> por \n
//Por lo tanto, cambiaremos el nombre del resultado y asi podremos hacerlo
     let resultado2 = "la suma es: " + (numero1+numero2)+ "\n"+
                     "la resta es: "+ (numero1-numero2)+ "\n"+
                     "la multiplicacion es: "+ (numero1*numero2)+ "\n"+
                     "la división es: "+ (numero1/numero2)+ "\n";
    console.log(resultado2);
    alert(resultado2);
