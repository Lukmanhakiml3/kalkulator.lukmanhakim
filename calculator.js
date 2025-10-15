var tampilan = document.getElementById("tampilan");
var angkaTombol = document.getElementsByClassName("angka");
var operatorTombol = document.getElementsByClassName("operator");
var samaDenganTombol = document.querySelector(".sama-dengan");
var resetTombol = document.querySelector(".reset");

let sementara = "";
let operator = "";
let angka1 = null;
let hasilBaru = false;

    // Klik angka
    for (let i = 0; i < angkaTombol.length; i++) {
      angkaTombol[i].addEventListener("click", function() {
        if (hasilBaru) {
          tampilan.value = "";
          hasilBaru = false;
        }
        tampilan.value += this.textContent;
      });
    }

    // Klik operator
    for (let i = 0; i < operatorTombol.length; i++) {
      operatorTombol[i].addEventListener("click", function() {
        angka1 = tampilan.value;
        operator = this.textContent;
        tampilan.value = "";
      });
    }

    // Klik sama dengan
    samaDenganTombol.addEventListener("click", function() {
      angka2 = tampilan.value;
      let hasil = 0;
      if (operator === "+") hasil = parseFloat(angka1) + parseFloat(angka2);
      else if (operator === "-") hasil = parseFloat(angka1) - parseFloat(angka2);
      else if (operator === "x") hasil = parseFloat(angka1) * parseFloat(angka2); //kali
      else if (operator === "/") hasil = parseFloat(angka1) / parseFloat(angka2);
      tampilan.value = hasil;
      hasilBaru = true;
    });

    // Klik reset
    resetTombol.addEventListener("click", function() {
      tampilan.value = "";
      angka1 = "";
      angka2 = "";
      operator = "";
    });