//Melissa Fernanda Gallegos Rojas

//Se definie el array
var valores = [true, 10, false, "codigo", "herramientas", 7];

// Determinamos cuál de los dos elementos de texto es mayor o el menor
var dato1 = valores[3];
var dato2 = valores[4];

if (dato1.length > dato2.length) {
    alert(dato1 + " es mayor que " + dato2);
} else if (dato2.length > dato1.length) {
    alert(dato2 + " es mayor que " + dato1);
} else {
    alert("Ambos son iguales");
}

// Utilizamos los valores booleanos del array para obtener un resultado true y otro resultado false
var booleanTrue = valores[0];
var booleanFalse = valores[2];

alert("Se obtiene valor true: " + (booleanTrue || booleanFalse));
alert("Se obtiene valor false: " + (booleanTrue && booleanFalse));

//Se determina el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
var num1 = valores[1];
var num2 = valores[5];

alert("Suma: " + (num1 + num2));
alert("Resta: " + (num1 - num2));
alert("Multiplicación: " + (num1 * num2));
alert("División: " + (num1 / num2));
alert("Módulo: " + (num1 % num2));
