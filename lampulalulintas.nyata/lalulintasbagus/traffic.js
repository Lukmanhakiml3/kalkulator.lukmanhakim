const lampuMerah = document.getElementById("lampu-merah");
const lampuKuning = document.getElementById("lampu-kuning");
const lampuHijau = document.getElementById("lampu-hijau");

const btnMulai = document.getElementById("mulai");
const btnBerhenti = document.getElementById("berhenti");
const btnMerah = document.getElementById("btn-merah");
const btnKuning = document.getElementById("btn-kuning");
const btnHijau = document.getElementById("btn-hijau");
const statusText = document.getElementById("status");
const suaraBeep = document.getElementById("suara-beep");
const suaraAmbient = document.getElementById("suara-ambient");

let interval;
let otomatis = false;

function matikanSemua() {
  [lampuMerah, lampuKuning, lampuHijau].forEach(l => l.classList.remove("nyala"));
}

function nyalakan(lampu) {
  matikanSemua();
  lampu.classList.add("nyala");
  suaraBeep.currentTime = 0;
  suaraBeep.play();
}

btnMulai.addEventListener("click", () => {
  if (otomatis) return;
  otomatis = true;
  suaraAmbient.volume = 0.2;
  suaraAmbient.play();
  statusText.textContent = "Status: Mode Otomatis Aktif 🚦";

  let index = 0;
  const urutan = [lampuMerah, lampuKuning, lampuHijau];

  interval = setInterval(() => {
    nyalakan(urutan[index]);
    index = (index + 1) % urutan.length;
  }, 3000);
});

btnBerhenti.addEventListener("click", () => {
  clearInterval(interval);
  otomatis = false;
  matikanSemua();
  suaraAmbient.pause();
  statusText.textContent = "Status: Mati ❌";
});

btnMerah.addEventListener("click", () => {
  matikanSemua();
  nyalakan(lampuMerah);
  statusText.textContent = "Status: Lampu Merah 🔴";
});

btnKuning.addEventListener("click", () => {
  matikanSemua();
  nyalakan(lampuKuning);
  statusText.textContent = "Status: Lampu Kuning 🟡";
});

btnHijau.addEventListener("click", () => {
  matikanSemua();
  nyalakan(lampuHijau);
  statusText.textContent = "Status: Lampu Hijau 🟢";
});
