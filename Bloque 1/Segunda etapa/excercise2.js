/*
### Ejercicio 2: Análisis de cadenas
- Pide al usuario que ingrese una frase.
- Usa métodos como length, toUpperCase(), y indexOf() para analizar la frase.
- Muestra la longitud, la frase en mayúsculas y la posición de una letra específica.
*/

let cadena = prompt("Ingresa la frase para analizar:");
let cadenaMayus = cadena.toUpperCase();
console.log(`Longitud de la cadena: ${cadena.length}`);
console.log("La frase convertida a mayúscula: " + cadenaMayus);
let browser = prompt("Ingresa la letra y yo la encontraré!! :D").toUpperCase();

for (let i = 0; i < cadenaMayus.length; i++) {
    if (browser === cadenaMayus[i]){
        console.log(`La letra está ubicada en la posición ${i} del array`);
        break;
    };
};