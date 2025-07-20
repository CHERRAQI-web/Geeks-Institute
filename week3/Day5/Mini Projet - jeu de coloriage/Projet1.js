document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("box");
  const colorBoxes = document.querySelectorAll('.color-box');
  const clearButton = document.querySelector('button');
  let selectedColor = null;
  let mouseDown = false;

  // État du clic de souris (pour dessiner en glissant)
  document.body.addEventListener('mousedown', () => mouseDown = true);
  document.body.addEventListener('mouseup', () => mouseDown = false);

  // Sélection d'une couleur
  colorBoxes.forEach(box => {
    box.addEventListener('click', () => {
      selectedColor = box.style.backgroundColor;

      // Indicateur visuel
      colorBoxes.forEach(b => b.style.outline = "none");
      box.style.outline = "4px solid white";
    });
  });

  // Dimensions d'une case
  const squareWidth = 20;
  const squareHeight = 30;

  // Taille de la fenêtre visible
  const screenWidth = window.innerWidth - 330; // palette + marge
  const screenHeight = window.innerHeight;

  // Nombre de colonnes et lignes
  const columns = Math.floor(screenWidth / squareWidth);
  const rows = Math.floor(screenHeight / squareHeight);
  const totalSquares = columns * rows;

  // Appliquer au conteneur
  container.style.gridTemplateColumns = `repeat(${columns}, ${squareWidth}px)`;

  // Créer les cases
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.className = "square";

    // Clique pour colorier
    square.addEventListener("mousedown", () => {
      if (selectedColor) {
        square.style.backgroundColor = selectedColor;
      }
    });

    // Glissement pour dessiner
    square.addEventListener("mouseenter", () => {
      if (mouseDown && selectedColor) {
        square.style.backgroundColor = selectedColor;
      }
    });

    container.appendChild(square);
  }

  // Bouton clear
  clearButton.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach(square => {
      square.style.backgroundColor = 'white';
    });

    // Réinitialise la sélection
    colorBoxes.forEach(b => b.style.outline = "none");
    selectedColor = null;
  });
});
