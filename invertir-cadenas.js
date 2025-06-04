/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertirCadena (cadena) {
  let nuevaCadena = '';
  let array = cadena.split("");

  // Se recorre el array de manera inverse y se va agregando
  // en la nueva cadena cada caracter
  for (let i = cadena.length - 1; i >= 0; i--) {
    nuevaCadena += array[i];
  }
  
  return console.log(nuevaCadena);
}

// Envio de las cadenas en minuscula
invertirCadena("Hola".toLowerCase());
invertirCadena("Edward".toLowerCase());
invertirCadena("Sierra".toLowerCase());

// Utilizando metodos de los strings
let invertida = 'picha'.split("").reverse().join("");
console.log(invertida);
