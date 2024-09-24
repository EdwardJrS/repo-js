/**
 * Ejercicio 2: Calificación de notas
    Recibir una nota y asignarle un grupo entre A, B, C, D o F
 */

let grade = parseInt(prompt("Ingrese la nota: [0-100]"));


if (grade >= 0 && grade <= 19) {
  console.log("Usted está en el rango F");
} else if (grade >= 20 && grade <= 39) {
  console.log("Usted está en el rango D");
} else if (grade >= 40 && grade <= 59) {
  console.log("Usted está en el rango C");
} else if (grade >= 60 && grade <= 79) {
  console.log("Usted está en el rango B");
} else if (grade >= 80 && grade <= 100) {
  console.log("Usted está en el rango A");
} else {
  console.log("Debe ingresar un dato entre 0 y 100");
}