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
  merah.classList.remove("nyala");
  kuning.classList.remove("nyala");
  hijau.classList.remove("nyala");
}

function lampuOtomatis() {
  let step = 0;
  interval = setInterval(() => {
    matikanSemua();
    if (step === 0) {
      merah.classList.add("nyala");
      statusLampu.textContent = "Status: BERHENTI 🚫";
    } else if (step === 1) {
      kuning.classList.add("nyala");
      statusLampu.textContent = "Status: SIAP ⚠️";
    } else {
      hijau.classList.add("nyala");
      statusLampu.textContent = "Status: JALAN 🚗💨";
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
  statusLampu.textContent = "Status: MATI ❌";
});

btnMerah.addEventListener("click", () => {
  clearInterval(interval);
  matikanSemua();
  merah.classList.add("nyala");
  statusLampu.textContent = "Status: BERHENTI 🚫";
});

btnKuning.addEventListener("click", () => {
  clearInterval(interval);
  matikanSemua();
  kuning.classList.add("nyala");
  statusLampu.textContent = "Status: SIAP ⚠️";
});

btnHijau.addEventListener("click", () => {
  clearInterval(interval);
  matikanSemua();
  hijau.classList.add("nyala");
  statusLampu.textContent = "Status: JALAN 🚗💨";
});
