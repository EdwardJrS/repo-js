/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 * Un número primo es un número mayor que 1 que solo se puede dividir por 1 y por él mismo.
 */

// Arreglo para guardar los números del 2 al 100.
let numeros = [];

// For para agregar los números al arreglo.
for (let i = 2; i <= 100; i++) {
  numeros.push(i);
}

// Recorremos cada número para verificar si es primo
numeros.forEach((num) => {
  let esPrimo = true; // Asumimos que es primo

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      esPrimo = false; // Encontramos un divisor
      break; // Ya no es necesario seguir
    }
  }

  if (esPrimo) {
    console.log(`${num} es primo`);
  } else {
    console.log(`${num} no es primo`);
  }
});