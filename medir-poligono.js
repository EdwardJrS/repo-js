/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function areaPoligono (poligono) {
  let poligonoLowerCase = poligono.toLowerCase();
  console.log(poligonoLowerCase);
  let base = 3;
  let altura = 8;
  let lado = 2;

  if (poligonoLowerCase !== 'Triangulo'.toLowerCase() && poligonoLowerCase !== 'Cuadrado'.toLowerCase() && poligonoLowerCase !== 'Rectangulo'.toLowerCase() ) {
    console.log('Eso que quieres medir no es un poligono permitido');
  } else if (poligonoLowerCase === 'triangulo') {
    let areaTriangulo = (base * altura) / 2;
    return console.log(areaTriangulo);
  } else if (poligonoLowerCase === 'cuadrado') {
    let areaCuadrado = lado**2;
    return console.log(areaCuadrado);
  } else if (poligonoLowerCase === 'rectangulo') {
    let areaRectangulo = (base * altura);
    return console.log(areaRectangulo);
  } 
}

areaPoligono("cuadrado");
areaPoligono("rectangulo");
areaPoligono("triangulo");
areaPoligono("culo");