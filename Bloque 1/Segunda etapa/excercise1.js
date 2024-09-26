/**
 * ### Ejercicio 1: Manipulación de arrays
 *   - Crea un array con al menos cinco elementos.
 *   - Usa métodos como push() para agregar un elemento, pop() para eliminar el último, y sort() para ordenarlo.
 *   - Muestra el array en cada paso. 
 */

let arrayCarros = ["Mazda", "Kia", "Fiat", "Renault", "Chevrolet"];
console.log(`Array creado ${arrayCarros}`);
arrayCarros.push(prompt("Ingresa una nueva marca"));
console.log(`Nueva marca ingresada ${arrayCarros}`);
arrayCarros.pop();
console.log(`Ultima marca ingresada eliminada ${arrayCarros}`);
arrayCarros.sort();
console.log(`Array final ${arrayCarros}`);