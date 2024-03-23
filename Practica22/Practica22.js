// Melissa Fernanda Gallegos Rojas


//Arreglo de los días de la semana

// Inicializa un arreglo con los días de la semana
let diasDeLaSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
// Despliega el arreglo utilizando `alert`
for (let i = 0; i < diasDeLaSemana.length; i++) {
  alert(diasDeLaSemana[i]);
}
// Agrega un día al arreglo utilizando `push`
diasDeLaSemana.push('Nuevo día');
// Despliega el arreglo utilizando `alert` después de agregar un día
for (let i = 0; i < diasDeLaSemana.length; i++) {
  alert(diasDeLaSemana[i]);
}
// Elimina el último día del arreglo utilizando `pop`
diasDeLaSemana.pop();
// Despliega el arreglo utilizando `alert` después de eliminar el último día
for (let i = 0; i < diasDeLaSemana.length; i++) {
  alert(diasDeLaSemana[i]);
}


//Suma de números del 1 al 5 con while

//Se inicializa la variable suma en 0 y la variable i en 1
let suma = 0;
let i = 1;
//El ciclo continúa siempre que i sea menor o igual a 5. En cada iteración, el valor de i se suma a suma y luego i se incrementa en 1.
while (i <= 5) {
  suma += i;
  i++;
}
//Se imprime el resultado
alert(suma);


//Factorial del número 5 con do while

//Declaramos la variable numero en 5 y la variable factorial en 1
let numero = 5;
let factorial = 1;
// Aquí se inicia el bucle, ejecutará las declaraciones dentro de el al menos una vez.
do {
    //Esta línea calcula el producto del valor actual de factorial y numero y asigna el resultado nuevamente a factorial.
  factorial *= numero;
  //Esta línea disminuye el valor de numero en 1.
  numero--;
  //especifica la condición que debe ser verdadera para que el bucle continúe ejecutándose.
} while (numero > 1);
//Imprime el resultado y se lo muestra al usuario
alert(factorial);


//Hola

//Una variable i se inicializa a 1
//El ciclo continúa mientras i sea menor o igual a 7
//En cada iteración, el código comprueba si i es igual a 4
for (let i = 1; i <= 7; i++) {
    //Si i es igual a 4 se muestra una alerta con el mensaje "soy el 4to"
    if (i === 4) {
      alert("soy el 4to");
      //Si i no es igual a 4, se muestra una alerta con el mensaje "Hola"
    } else {
      alert("Hola");
    }
    //Una vez completado el bucle, se muestra una alerta con el mensaje "Acabamos de saludar"
  }
  alert("Acabamos de saludar");


  //Los meses del año con for in

  //Definimos el arreglo con los nombres de los primeros 11 meses del año
  let mesesAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];
//Utilizamos un bucle for in para recorrer los índices del arreglo. La variable i toma el valor de cada índice del arreglo en cada iteración.
for (let i in mesesAño) {
    //Se verifica que el valor de i sea menor que 11
  if (i < 11) {
    //Se imprimen los meses y se le muestra al usuario mediante un alert
    alert(mesesAño[i]);
  }
}


//Los meses del año con forEach

//Definimos el arreglo con los nombres de los primeros 11 meses del año
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];
//usando forEach es una función de devolución de llamada como argumento, que se llama una vez para cada elemento de la matriz
meses.forEach(function(mes) {
    //Se imprimen los meses y se le muestra al usuario mediante un alert
  alert(mes);
});


//Los meses del año con for of

//Definimos el arreglo con los nombres de los primeros 11 meses del año
let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];
//Con el bucle for of para recorrer cada elemento del array months
//La variable month toma el valor de cada elemento del array en cada iteración
for (let month of months) {
    //Se imprimen los meses y se le muestra al usuario mediante un alert
  alert(month);
}


// Los meses del año usando for in incluyendo el mes de Diciembre

//Definimos el arreglo con los primeros meses del año
let mesesDelAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];
//Creamos la variable diciembre
let diciembre = 'Diciembre';
//Se agrega diciembre al final del arreglo utilizando el método push()
mesesDelAño.push(diciembre); 
//Se utiliza un bucle for in para iterar sobre los índices del arreglo
for (let i in mesesDelAño) {
    //Dentro del bucle, se verifica si el mes actual es igual a 'Julio'
  if (mesesDelAño[i] === 'Julio') {
// Omitir el mes de Julio
    continue; 
  }
  //Se imprimen los meses del año omitiendo Julio y agregando Diciembre al final
  alert(mesesDelAño[i]);
}