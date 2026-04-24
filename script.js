const morseAlphabet = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....",
    "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.",
    "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
    "Y": "-.--", "Z": "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----", " ": "/"
};

// Crear un diccionario inverso para traducir de Morse a Texto
const textAlphabet = {};
for (let key in morseAlphabet) {
    textAlphabet[morseAlphabet[key]] = key;
}

function translate() {
    const input = document.getElementById("input").value.trim().toUpperCase();
    const outputElement = document.getElementById("output");
    
    // Detectar si el usuario ingresó Morse o Texto
    if (input.includes(".") || input.includes("-")) {
        // Traducir de Morse a Texto
        const words = input.split("/");
        const translated = words.map(word => 
            word.trim().split(" ").map(char => textAlphabet[char] || "?").join("")
        ).join(" ");
        outputElement.innerText = translated;
    } else {
        // Traducir de Texto a Morse
        const translated = input.split("").map(char => 
            morseAlphabet[char] || "?"
        ).join(" ");
        outputElement.innerText = translated;
    }
}

function clearAll() {
    document.getElementById("input").value = "";
    document.getElementById("output").innerText = "";
}
function vibrateMorse(morseCode) {
    const unit = 100; // Duración de un punto en ms
    const sequence = [];

    morseCode.split("").forEach(char => {
        if (char === ".") sequence.push(unit, unit);
        else if (char === "-") sequence.push(unit * 3, unit);
        else if (char === " ") sequence.push(0, unit * 3);
    });

    navigator.vibrate(sequence);
}


