const tampilan = document.getElementById("tampilan");
const angkaTombol = document.querySelectorAll(".angka");
const operatorTombol = document.querySelectorAll(".operator");
const samaDenganTombol = document.querySelector(".sama-dengan");
const resetTombol = document.querySelector(".reset");

let inputSekarang = "";
let operator = "";
let angkaPertama = null;
let hasilBaru = false;

// Tombol angka
angkaTombol.forEach(tombol => {
  tombol.addEventListener("click", () => {
    if (hasilBaru) {
      inputSekarang = "";
      hasilBaru = false;
    }
    inputSekarang += tombol.textContent;
    tampilan.value = inputSekarang;
  });
});

// Tombol operator
operatorTombol.forEach(tombol => {
  tombol.addEventListener("click", () => {
    if (inputSekarang === "") return;
    if (angkaPertama === null) {
      angkaPertama = parseFloat(inputSekarang);
    } else {
      angkaPertama = hitung(angkaPertama, parseFloat(inputSekarang), operator);
    }
    operator = tombol.textContent;
    inputSekarang = "";
    tampilan.value = operator;
  });
});

// Tombol sama dengan
samaDenganTombol.addEventListener("click", () => {
  if (angkaPertama !== null && operator !== "" && inputSekarang !== "") {
    const hasil = hitung(angkaPertama, parseFloat(inputSekarang), operator);
    tampilan.value = hasil;
    angkaPertama = hasil;
    inputSekarang = "";
    hasilBaru = true;
  }
});

// Tombol reset
resetTombol.addEventListener("click", () => {
  inputSekarang = "";
  operator = "";
  angkaPertama = null;
  tampilan.value = "";
});

// Fungsi hitung
function hitung(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "x": return a * b;
    case "/": return b !== 0 ? a / b : "Error";
    default: return b;
  }
}
