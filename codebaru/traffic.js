let interval;
const merah = document.getElementById("lampu-merah");
const kuning = document.getElementById("lampu-kuning");
const hijau = document.getElementById("lampu-hijau");
const statusLampu = document.getElementById("status");

const tombolMulai = document.getElementById("mulai");
const tombolBerhenti = document.getElementById("berhenti");
const btnMerah = document.getElementById("btn-merah");
const btnKuning = document.getElementById("btn-kuning");
const btnHijau = document.getElementById("btn-hijau");

function matikanSemua() {
  merah.classList.remove("menyala");
  kuning.classList.remove("menyala");
  hijau.classList.remove("menyala");
}

function lampuOtomatis() {
  let step = 0;
  interval = setInterval(() => {
    matikanSemua();
    if (step === 0) {
      merah.classList.add("menyala");
      statusLampu.textContent = "Status: Berhenti 🚫";
    } else if (step === 1) {
      kuning.classList.add("menyala");
      statusLampu.textContent = "Status: Siap ⚠️";
    } else {
      hijau.classList.add("menyala");
      statusLampu.textContent = "Status: Jalan 🚗💨";
    }
    step = (step + 1) % 3;
  }, 2000);
}

tombolMulai.addEventListener("click", () => {
  clearInterval(interval);
  lampuOtomatis();
});

tombolBerhenti.addEventListener("click", () => {
  clearInterval(interval);
  matikanSemua();
  statusLampu.textContent = "Status: Mati ❌";
});

btnMerah.addEventListener("click", () => {
  clearInterval(interval);
  matikanSemua();
  merah.classList.add("menyala");
  statusLampu.textContent = "Status: Berhenti 🚫";
});

btnKuning.addEventListener("click", () => {
  clearInterval(interval);
  matikanSemua();
  kuning.classList.add("menyala");
  statusLampu.textContent = "Status: Siap ⚠️";
});

btnHijau.addEventListener("click", () => {
  clearInterval(interval);
  matikanSemua();
  hijau.classList.add("menyala");
  statusLampu.textContent = "Status: Jalan 🚗💨";
});
