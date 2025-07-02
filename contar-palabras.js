/* MEDIO - DIFICIL
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

let contador = 0;

function contarPalabras (cadena) {
  let array = cadena.toLowerCase().split(" ");
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === array[i]){
        contador += 1;
      }
    }
    console.log(`La palabra ${array[i]} aparece ${contador} veces`);
    contador = 0;
  }
}

contarPalabras("Habia vez una vez");