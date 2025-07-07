let idInterval = null;

function myMove() {
  let box = document.getElementById("animate");
  let container = document.getElementById("container");
  let position = 0;

  // Arrêter une ancienne animation si elle existe
  if (idInterval !== null) {
    clearInterval(idInterval);
  }

  idInterval = setInterval(() => {
    if (position + box.offsetWidth >= container.offsetWidth) {
      clearInterval(idInterval); // Arrêter si la boîte atteint la fin
    } else {
      position++;
      box.style.left = position + "px";
    }
  }, 1); // toutes les 1 milliseconde
}
