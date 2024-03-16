//Se declaran las variables
var num1 = 5;
var num2 = 8;

//Comprueba si num1es menor o igual a num2. Si es verdadero, muestra un mensaje de alerta que dice "num1 no es mayor que num2"
if (num1 <= num2) {
    alert("num1 no es mayor que num2");

//Si la primera condición es verdadera, luego verifica si num2es menor o igual a 0. Si es verdadera, muestra un mensaje de alerta que dice "num2 es positivo" 
    if (num2 <= 0) {
        alert("num2 es positivo");
    }
//Si las dos primeras condiciones son verdaderas, incrementa el valor de num1en 1 usando el ++operador y verifica si el nuevo valor de num1 sigue siendo menor que num2.
    if (++num1 < num2) {
        alert("Incrementar uno en num1, no lo hace mayor que num2");
    }
} else {
    //Si el valor de num1 es mayor que num2, muestra un mensaje de alerta que dice "num1 es mayor que num2"
    alert("num1 es mayor que num2");
}