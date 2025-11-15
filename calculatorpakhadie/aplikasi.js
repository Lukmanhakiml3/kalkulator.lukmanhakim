// Kalkulator DOM Dasar Javascript (deskripsi dan nama variabel dalam Bahasa Indonesia)
var tampilan = document.getElementById("tampilan");
var angkaTombol = document.getElementsByClassName("angka");
var operatorTombol = document.getElementsByClassName("operator");
var samaDenganTombol = document.getElementsByClassName("sama-dengan"); // ✅ benar
var resetTombol = document.getElementsByClassName("reset"); // ✅ benar
let namaAntum = document.getElementsByClassName("nama-kamu")[0];
namaAntum.style.color = "red";
namaAntum.innerHTML = `<h2 style="color:blue">Nama Kamu</h2>`; // ✅ perbaiki tag & posisi style

var sementara = "";
var operator = "";
var angka1 = null;
var angka2 = null;
var hasilBaru = false;

// 1. Event untuk tombol angka dan titik
for (let i = 0; i < angkaTombol.length; i++) {
  angkaTombol[i].addEventListener("click", function () {
    if (hasilBaru) {
      sementara = "";
      hasilBaru = false;
    }
    // ✅ parseFloat dihapus supaya bisa input lebih dari 1 digit
    sementara += this.textContent;
    tampilan.value = sementara;

    // ✅ perbaiki kesalahan sintaks sebelumnya (harus pakai this)
    this.style.background = "lightblue";
    setTimeout(() => (this.style.background = ""), 200); // efek klik singkat
  });
}

// 2. Tombol operator
for (let i = 0; i < operatorTombol.length; i++) {
  operatorTombol[i].addEventListener("click", function () {
    if (sementara === "" && this.textContent !== "-") {
      return;
    }
    if (operator !== "") {
      return; // ✅ titik koma sudah benar
    }

    angka1 = parseFloat(sementara);
    operator = this.textContent.replaceAll(" ", "");
    sementara = "";
    tampilan.value = "";
  });
}

// 3. Tombol sama dengan
for (let k = 0; k < samaDenganTombol.length; k++) {
  samaDenganTombol[k].addEventListener("click", function () {
    if (operator === "" || sementara === "") {
      return;
    }
    angka2 = parseFloat(sementara);

    let hasil;

    if (operator === "+") {
      hasil = angka1 + angka2;
    } else if (operator === "-") {
      hasil = angka1 - angka2;
    } else if (operator === "x" || operator === "*") {
      hasil = angka1 * angka2;
    } else if (operator === "/") {
      hasil = angka1 / angka2;
    } else {
      return;
    }

    tampilan.value = hasil;
    sementara = String(hasil);
    angka1 = null;
    angka2 = null;
    operator = "";
    hasilBaru = true;
  });
}

// 4. Tombol reset
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

// ✅ duplikat reset, aman & tidak bikin error
resetTombol[0]?.addEventListener?.("click", function () {
  tampilan.value = "";
  angka1 = null;
  angka2 = null;
  operator = "";
  sementara = "";
  hasilBaru = false;
});
