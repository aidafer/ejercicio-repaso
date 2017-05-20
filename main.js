/*Ejercicio 1 (ejercicio a evaluar)
Creamos una función que tomará como parámetros un número
y un array de números. La función va a devolver el número
de veces que está repetido ese número en el array.
Por ejemplo, si le pasamos un 1 y [1,3,4,2,1,3,4,5],
la función devolverá un 2, porque el número 1 aparece dos veces en el array.
*/
//var uno = 1;
//var num = [1, 3, 4, 2, 1, 3, 4, 5];
numRepe(1, [1, 3, 4, 2, 1, 3, 4, 5])

function numRepe(uno, num){
  var esUno = 0;
  for (var i = 0; i < num.length; i++) {
    if (uno === num[i]) {
      esUno = esUno + 1;
    }
  }
  return esUno;
}

//no lo hice yo sola, me ayudó sara, lo digo porque no lo hubiese
//terminado bien
