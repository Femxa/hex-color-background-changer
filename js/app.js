const button = document.querySelector('#btn');
const colorBox = document.querySelector('#color-box');
const hexValue = document.querySelector('#hex-value');

// ¡Buena suerte!
button.addEventListener("click", generarColor);

function generarColor() {
    console.log("Has hecho click en el botón.");
    console.log(getRandomHexColor());

    // 1. Generar un color aleatorio y guardarlo en una variable
    const randomColor = getRandomHexColor();

    // 2. Asignar ese valor a las propiedades de dos nodos diferentes
      // 2a -> establecer el valor textual el nodo hexValue
      hexValue.textContent = randomColor;
      // 2b -> establecer el color de fondo del nodo colorBox
      colorBox.style.backgroundColor = randomColor;

}

function getRandomHexColor() {
  const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexValues.length);
    hexColor += hexValues[randomIndex];
  }

  return hexColor;
}