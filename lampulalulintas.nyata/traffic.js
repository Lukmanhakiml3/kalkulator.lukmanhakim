const lampuMerah = document.getElementById("lampu-merah");
const lampuKuning = document.getElementById("lampu-kuning");
const lampuHijau = document.getElementById("lampu-hijau");

const btnMulai = document.getElementById("mulai");
const btnBerhenti = document.getElementById("berhenti");
const btnMerah = document.getElementById("btn-merah");
const btnKuning = document.getElementById("btn-kuning");
const btnHijau = document.getElementById("btn-hijau");
const statusText = document.getElementById("status");
const suara = document.getElementById("suara");

let interval;
let nyala = false;

function matikanSemua() {
  [lampuMerah, lampuKuning, lampuHijau].forEach(l => l.classList.remove("nyala"));
}

function nyalakan(lampu) {
  matikanSemua();
  lampu.classList.add("nyala");
  suara.currentTime = 0;
  suara.play();
}

btnMulai.addEventListener("click", () => {
  if (nyala) return;
  nyala = true;
  statusText.textContent = "Status: Otomatis Menyala";

  let urutan = 0;
  const lampuList = [lampuMerah, lampuKuning, lampuHijau];

  interval = setInterval(() => {
    nyalakan(lampuList[urutan]);
    urutan = (urutan + 1) % lampuList.length;
  }, 2500);
});

btnBerhenti.addEventListener("click", () => {
  clearInterval(interval);
  nyala = false;
  statusText.textContent = "Status: Mati";
  matikanSemua();
});

btnMerah.addEventListener("click", () => {
  nyalakan(lampuMerah);
  statusText.textContent = "Status: Merah Menyala";
});

btnKuning.addEventListener("click", () => {
  nyalakan(lampuKuning);
  statusText.textContent = "Status: Kuning Menyala";
});

btnHijau.addEventListener("click", () => {
  nyalakan(lampuHijau);
  statusText.textContent = "Status: Hijau Menyala";
});
