// Pilih elemen
const lampuMerah = document.getElementById("lampu-merah");
const lampuKuning = document.getElementById("lampu-kuning");
const lampuHijau = document.getElementById("lampu-hijau");
const tombolMulai = document.getElementById("mulai");
const tombolBerhenti = document.getElementById("berhenti");
const btnMerah = document.getElementById("btn-merah");
const btnKuning = document.getElementById("btn-kuning");
const btnHijau = document.getElementById("btn-hijau");
const textStatus = document.getElementById("status");

let intervalOtomatis;
let indexLampu = 0;
const urutan = ["merah", "kuning", "hijau"];

// Fungsi matikan semua lampu
function matikanSemua() {
  lampuMerah.classList.remove("nyala");
  lampuKuning.classList.remove("nyala");
  lampuHijau.classList.remove("nyala");
}

// Fungsi nyalakan lampu sesuai warna
function nyalakanLampu(warna) {
  matikanSemua();

  switch (warna) {
    case "merah":
      lampuMerah.classList.add("nyala");
      textStatus.textContent = "Status: Merah - BERHENTI";
      break;
    case "kuning":
      lampuKuning.classList.add("nyala");
      textStatus.textContent = "Status: Kuning - HATI-HATI";
      break;
    case "hijau":
      lampuHijau.classList.add("nyala");
      textStatus.textContent = "Status: Hijau - JALAN";
      break;
  }
}

// 🔘 Tambahan: Fungsi untuk mulai otomatis
// Event tombol mulai
tombolMulai.addEventListener("click", function () {
  clearInterval(intervalOtomatis); // hentikan dulu jika ada yg aktif
  indexLampu = 0;
  intervalOtomatis = setInterval(() => {
    nyalakanLampu(urutan[indexLampu]);
    indexLampu = (indexLampu + 1) % urutan.length; // berputar terus
  }, 2000); // ganti lampu tiap 2 detik
});

// ⛔Event Tombol berhenti
tombolBerhenti.addEventListener("click", function () {
  console.log("cek warna merah")
  // clearInterval (intervalOtomatis);
  nyalakanLampu("merah");
  clearInterval(intervalOtomatis);
  matikanSemua();
  textStatus.textContent = "Status: Mati - Semua lampu off";
});
// jika punya basic yg kuat dipertahankan lagi
//berjalan akan tersimpan dalam memori akan tertumpuk menjadi bunyi / hank / tidak bisa digerakin itu nama infinite loop
// infinite loop (jalan terus ga ada berhentinya)
// 🔴🟡🟢 Event Tombol manual
btnMerah.addEventListener("click", () => nyalakanLampu("merah"));
btnKuning.addEventListener("click", () => nyalakanLampu("kuning"));
btnHijau.addEventListener("click", () => nyalakanLampu("hijau"));
