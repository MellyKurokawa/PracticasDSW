//Melissa Fernanda Gallegos Rojas

//Declaramos las variables que se van a utilizar
var opcion = prompt("Escriba el planeta en el que desea saber su peso: tierra, marte o jupiter");
var peso;

//Dentro del switch estarán las opciones en las cuales se hará el cálculo de los pesos
switch (opcion){
  case "tierra":
  peso = parseInt(prompt("Ingrese tu peso:"));
  Tierra = peso * 9.8;
  alert("Tu peso en la Tierra es de: " + Tierra.toFixed(2) +"N");
  break;

  case "marte":
  peso = parseInt(prompt("Ingrese tu peso:"));
  Marte = (peso * 3.7) / 9.8;
  alert("Tu peso en Marte es de: " + Marte.toFixed(2) + "N");
  break;

  case "jupiter":
  peso = parseInt(prompt("Ingrese tu peso:"));
  Jupiter = (peso * 24.8) / 9.8;
  alert("Tu peso en Júpiter es de: " + Jupiter.toFixed(2) + "N");
  break;

  default:
    if (opcion !== null) {
      alert("La opción ingresada no existe");
    } else {
      alert("Operación cancelada");
    }
    break;
}