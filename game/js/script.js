// Ambil levelId dari localStorage
const levelId = localStorage.getItem('levelId') || 1;

// Daftar level
const levels = [
  { id:1, name:"Tugu Pena", shapes:["tabung","kerucut"] },
  { id:2, name:"Level 2", shapes:["kubus","prisma"] }
];

const curLevel = levels.find(l=>l.id == levelId);

// Tampilkan judul
document.getElementById('iconTitle').innerText = curLevel.name;

// Render outline dan potongan
const outline = document.getElementById('outline');
const piecesList = document.getElementById('piecesList');

curLevel.shapes.forEach(shape=>{
  const piece = document.createElement('div');
  piece.className = 'piece';
  piece.innerText = shape;
  piece.draggable = true;
  piecesList.appendChild(piece);

  const slot = document.createElement('div');
  slot.className = 'slot';
  slot.dataset.shape = shape;
  outline.appendChild(slot);
});

// Drag & Drop sederhana
piecesList.addEventListener('dragstart', e=>{
  e.dataTransfer.setData('text/plain', e.target.innerText);
});

outline.addEventListener('dragover', e=> e.preventDefault());
outline.addEventListener('drop', e=>{
  const shape = e.dataTransfer.getData('text/plain');
  const slot = e.target.closest('.slot');
  if(!slot) return;
  if(slot.querySelector('.piece')) return;
  const piece = [...piecesList.children].find(p=>p.innerText===shape);
  if(piece){
    slot.appendChild(piece);
  }
});

// Reset
document.getElementById('btnReset').onclick = ()=> location.reload();
