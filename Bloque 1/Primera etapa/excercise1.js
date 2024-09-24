/* 
Ejercicio 1: Calculadora básica
- Pedir los números y pedir la operación y mostrar el resultado.
*/

let firstNumber = parseInt(prompt("Ingrese el primer número"));
let secondNumber = parseInt(prompt("Ingrese le segundo número"));
let selectOperation = prompt("Seleccione: \n a. Suma \n b. Resta \n c. Multiplicación \n d. División").toLocaleLowerCase();


// Operaciones con condiconales
if (selectOperation === "a") {
    let sum = firstNumber + secondNumber;
    console.log("La suma es: " + sum);
} else if (selectOperation === "b") {
    let men = firstNumber - secondNumber;
    console.log("La resta es: " + men);
} else if (selectOperation === "c") {
    let period = firstNumber * secondNumber;
    console.log("La multiplicacion es: " + period);
} else if (selectOperation === "d"){
    if (secondNumber === 0) {
        console.log("No se puede dividir entre 0. Intente nuevamente");
    } else {
        let division = firstNumber / secondNumber;
        console.log("La división es: " + division);
    }
} else {
    console.log("Debe ingresar una opción válida! Gracias");
}

// Nota: Se puede mejorar cuando usemos manejos de errores