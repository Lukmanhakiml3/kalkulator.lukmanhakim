// contoh data koleksi; nanti diganti dengan API/cms
const koleksi = [
  {title:"Ringkasan: Blue Ocean Strategy", desc:"Konsep jeung strategi…", tag:"strategy"},
  {title:"10 Taktik Growth Hacking", desc:"Checklist praktis untuk startup", tag:"growth"},
  {title:"Manajemen Keuangan UMKM", desc:"Panduan sederhana", tag:"finance"}
];

const cardsEl = document.getElementById('cards');
if(cardsEl){
  koleksi.forEach(k=>{
    const div = document.createElement('div');
    div.className='card';
    div.innerHTML = `<h3>${k.title}</h3><p style="color:#6b7280">${k.desc}</p><small style="color:#9aa4b6">${k.tag}</small>`;
    cardsEl.appendChild(div);
  });
}
