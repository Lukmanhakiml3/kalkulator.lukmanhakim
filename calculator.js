var tampilan = document.getElementById("tampilan");
var angkaTombol = document.getElementsByClassName("angka");
var operatorTombol = document.getElementsByClassName("operator");
var samaDenganTombol = document.querySelector(".sama-dengan");
var resetTombol = document.querySelector(".reset");

    let angka1 = null;
    let angka2 = null;
    let operator = "";
    let hasilBaru = false;

    // klik angka
    for (let tombol of angkaTombol) {
      tombol.addEventListener("click", function() {
        if (hasilBaru) {
          tampilan.value = "";
          hasilBaru = false;
        }
        tampilan.value += this.textContent;
      });
    }

    // klik operator
    for (let tombol of operatorTombol) {
      tombol.addEventListener("click", function() {
        if (tampilan.value === "") return;
        angka1 = parseFloat(tampilan.value);
        operator = this.textContent;
        tampilan.value = "";
      });
    }

    // klik sama dengan
    samaDenganTombol.addEventListener("click", function() {
      if (tampilan.value === "" || angka1 === null) return;
      angka2 = parseFloat(tampilan.value);
      let hasil = 0;
      switch(operator) {
        case "+": hasil = angka1 + angka2; break;
        case "-": hasil = angka1 - angka2; break;
        case "x": hasil = angka1 * angka2; break;
        case "/": hasil = angka1 / angka2; break;
      }
      tampilan.value = hasil;
      hasilBaru = true;
      angka1 = null;
      angka2 = null;
      operator = "";
    });

    // klik reset
    resetTombol.addEventListener("click", function() {
      tampilan.value = "";
      angka1 = null;
      angka2 = null;
      operator = "";
      hasilBaru = false;
    });