'use strict';
//Hacer una tabla de multiplicar de un numero introducido.

let numero= parseInt(prompt("¿de que numero quieres la tabla?", 1));

  document.write("<h2>TABLA DEL "+numero+"</h2>");

for(let i = 1; i <=10; i++){
  document.write(i+" x "+numero+" = "+(i*numero)+ "<br/>");
}

//Para hacerlo de todas las tablas de multiplicar
//Ponemos "c" para asi poner otra variante

for (let c = 1; c <=10; c++) {

document.write("<h3>TABLA DEL"+c+"</h3>");

for(let i = 1; i <=10; i++){

document.write(i+" x "+c+" = "+(i*c)+ "<br/>");

}
}
