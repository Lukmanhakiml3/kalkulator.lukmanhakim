// Bagian DOM “Data Diriku”
let nilai = document.getElementsByTagName("span");
let nilaiSelector = document.querySelector("span");

console.log("getElementByTagName", nilai);
console.log("querySelector 1", nilaiSelector);

let title = document.querySelector("h3.info");
let nama = document.querySelector("div.info");
let alamat = document.querySelector("p span.info");

console.log("querySelector 2:title", title);
console.log("querySelector 3:nama", nama);
console.log("querySelector 4:alamat", alamat);

title.textContent = "Judul Baru";
nama.textContent = "Nama Baru";
alamat.textContent = "Alamat Baru";

for (let i = 0; i < nilai.length; i++) {
  nilai[i].style.color = "blue";
  nilai[i].innerHTML = "Ini index ke " + i;
}

// =======================================================
// Bagian Kalkulator DOM Dasar
var tampilan = document.getElementById("tampilan");
var angkaTombol = document.getElementsByClassName("angka");
var operatorTombol = document.getElementsByClassName("operator");
var samaDenganTombol = document.getElementsByClassName("sama-dengan");
var resetTombol = document.getElementsByClassName("reset");

var sementara = "";
var operator = "";
var angka1 = null;
var angka2 = null;
var hasilBaru = false;

// 1️⃣ Event untuk tombol angka
for (let i = 0; i < angkaTombol.length; i++) {
  angkaTombol[i].addEventListener("click", function () {
    if (hasilBaru) {
      sementara = "";
      hasilBaru = false;
    }
    sementara += this.textContent;
    tampilan.value = sementara;
  });
}

// 2️⃣ Tombol operator
for (let index = 0; index < operatorTombol.length; index++) {
  operatorTombol[index].addEventListener("click", function () {
    if (sementara === "" && this.textContent !== "-") return;
    if (operator !== "") return;

    angka1 = parseFloat(sementara);
    operator = this.textContent;
    sementara = "";
    tampilan.value = operator;
  });
}

// 3️⃣ Tombol sama dengan
for (let k = 0; k < samaDenganTombol.length; k++) {
  samaDenganTombol[k].addEventListener("click", function () {
    if (operator === "" || sementara === "") return;

    angka2 = parseFloat(sementara);
    let hasil;

    if (operator === "+") hasil = angka1 + angka2;
    else if (operator === "-") hasil = angka1 - angka2;
    else if (operator === "x") hasil = angka1 * angka2;
    else if (operator === "/") hasil = angka1 / angka2;

    tampilan.value = hasil;
    sementara = String(hasil);
    angka1 = null;
    angka2 = null;
    operator = "";
    hasilBaru = true;
  });
}

// 4️⃣ Tombol reset
for (let r = 0; r < resetTombol.length; r++) {
  resetTombol[r].addEventListener("click", function () {
    tampilan.value = "";
    sementara = "";
    operator = "";
    angka1 = null;
    angka2 = null;
    hasilBaru = false;
  });
}
