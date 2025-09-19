function goLevel(id){
  localStorage.setItem('levelId', id); // simpan level yang dipilih
  window.location.href = '../game/icon.html'; // pindah ke halaman ikon
}
