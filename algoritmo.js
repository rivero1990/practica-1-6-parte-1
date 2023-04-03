/* document.write("hola");
console.log ("hola 2");
document.querySelector("body").innerHTML += "<h2> hola 2 </h2>"; */

let caracterIngresado = "a";
let stringIngresado = "vacio";
let enteroIngresado = 123;
let flotanteIngresado = 123.8;
let booleanoIngresado = false;

document.write ("<h1> Ahora pido todos los datos <h1>");

caracterIngresado = prompt("Ingresa un caracter");
stringIngresado = prompt("Ingresa un string");
enteroIngresado= prompt("Ingresa un entero");
flotanteIngresado = prompt("Ingresa un flotante");
booleanoIngresado = prompt("Ingresa un booleano");

document.write ("<h1> Ahora imprimo todo<h1>");

document.write(" <h2> Caracter ingresado es: " + caracterIngresado +"<h2>");
document.write(" <h2> String ingresado es: " + stringIngresado +"<h2>");
document.write(" <h2> Entero ingresado es: " + enteroIngresado +"<h2>");
document.write(" <h2> Flotante ingresado es: " + flotanteIngresado +"<h2>");
document.write(" <h2> Booleano ingresado es: " + booleanoIngresado +"<h2>");

;

