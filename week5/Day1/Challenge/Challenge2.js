const prompt = require("prompt-sync")();
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

// 1. Convert JSON Morse to JS object
function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).length === 0) {
        reject("Erreur : l'objet Morse est vide.");
      } else {
        resolve(morseJS);
      }
    } catch (e) {
      reject("Erreur de parsing JSON.");
    }
  });
}

// 2. Convert user input to Morse array
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const input = prompt("Donne une phrase ou un mot : ");
    if (!input) return reject("Erreur : entrée vide.");

    const chars = input.toLowerCase().split("");
    const morseTranslation = [];

    for (const char of chars) {
      if (char === " ") {
        morseTranslation.push("/"); // symbole pour l’espace
      } else if (morseJS[char]) {
        morseTranslation.push(morseJS[char]);
      } else {
        return reject(`Erreur : caractère invalide "${char}"`);
      }
    }

    resolve(morseTranslation);
  });
}

// 3. Affiche le résultat avec saut de ligne
function joinWords(morseTranslation) {
  if (!Array.isArray(morseTranslation)) {
    console.error("joinWords attend un tableau.");
    return;
  }
     const output = morseTranslation.join("\n");
  console.log("\n Traduction en Morse :\n");
  console.log(output);
}

// Enchaînement des trois fonctions
toJs()
    .then(toMorse)
    .then(joinWords)
    .catch(err => {
      document.getElementById("output").textContent = "❌ " + err;
    });
