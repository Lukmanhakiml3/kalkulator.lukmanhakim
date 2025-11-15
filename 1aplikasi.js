// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector

let nilai = document.getElementsByTagName("span");
let nilaiSelector = document.querySelector("span");

console.log("getElementByTagName", nilai);
console.log("querySelector 1", nilaiSelector);

let title = document.querySelector("h2.info");
let nama = document.querySelector("div.info");
let alamat = document.querySelector("p span.info");
// let keterangan = document.querySelector("p>div>span.info");

console.log("querySelector 2: title", title);
console.log("querySelector 3: nama", nama);
console.log("querySelector 4: alamat", alamat);

title.textContent = "Judul Baru";
nama.textContent = "Nama Baru";
alamat.textContent = "Alamat Baru Baru";
// keterangan.textContent = "Keterangan Baru";

// Loop
for (let i = 0; i < nilai.length; i++) {
  console.log(nilai[i]);
  nilai[i].style.color = "blue";
  nilai[i].innerHTML = "Blue";
}
