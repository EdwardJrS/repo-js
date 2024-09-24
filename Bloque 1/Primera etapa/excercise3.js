/*
### Ejercicio 3: Contador de caracteres
- Pedir una frase y contar los caracteres
    sin tener en cuenta los espacios
*/

let library = "qewrtyuiopasdfghjklñzxcvbnm0123456789";
let sentence = prompt("Ingrese la frase").toLocaleLowerCase();
let count = 0;

for (let j = 0; j < library.length; j++) {
    for (let i = 0; i <= sentence.length - 1; i++) {
      if (sentence[i] == library[j]) {
        count ++;
      }  
    };
    if (count == sentence.length) {
        break;
    };
};

console.log(`Letras encontradas ${count}`);

/*
### Ejercicio 3: Contador de caracteres
- Pedir una frase y contar los caracteres
    sin tener en cuenta los espacios

let sentence = prompt("Ingrese la frase").toLocaleLowerCase();
let count = 0;

// Recorrer cada carácter de la frase
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") { // Ignorar espacios
        count++;
    }
}

console.log(`Letras encontradas: ${count}`);
*/